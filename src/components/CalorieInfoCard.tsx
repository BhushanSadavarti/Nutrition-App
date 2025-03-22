
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import AnimatedNumber from './AnimatedNumber';
import { getGoalDescription, getActivityDescription, UserProfile } from '@/utils/calorieCalculator';
import { Activity, Goal, Flame, Apple, Beef, Cookie } from 'lucide-react';

interface CalorieInfoCardProps {
  profile: UserProfile;
  bmr: number;
  tdee: number;
  targetCalories: number;
  macros: {
    protein: number;
    carbs: number;
    fat: number;
  };
  className?: string;
}

const CalorieInfoCard: React.FC<CalorieInfoCardProps> = ({
  profile,
  bmr,
  tdee,
  targetCalories,
  macros,
  className,
}) => {
  const goalLabel = getGoalDescription(profile.goal);
  const activityLabel = getActivityDescription(profile.activityLevel);
  
  const proteinCalories = macros.protein * 4;
  const carbsCalories = macros.carbs * 4;
  const fatCalories = macros.fat * 9;
  
  const proteinPercent = Math.round((proteinCalories / targetCalories) * 100);
  const carbsPercent = Math.round((carbsCalories / targetCalories) * 100);
  const fatPercent = Math.round((fatCalories / targetCalories) * 100);

  return (
    <Card className={cn("w-full overflow-hidden", className)}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">Your Daily Calories</CardTitle>
          <Badge variant="outline" className="font-normal">
            <Goal className="w-3 h-3 mr-1" />
            {goalLabel}
          </Badge>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Activity className="w-3 h-3 mr-1" />
          <span>{activityLabel}</span>
        </div>
      </CardHeader>
      
      <CardContent className="pb-6">
        <div className="space-y-6">
          <div className="flex flex-col items-center justify-center py-6 px-4 bg-primary/5 rounded-xl">
            <Flame className="w-8 h-8 text-primary mb-2" />
            <div className="text-2xl font-bold text-primary flex items-baseline">
              <AnimatedNumber value={targetCalories} className="text-3xl" />
              <span className="ml-1 text-lg">kcal</span>
            </div>
            <div className="text-sm text-muted-foreground mt-1">daily target</div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="text-sm font-medium">BMR</div>
                <div className="text-xl font-bold flex align-center">
                  <AnimatedNumber value={bmr} /> kcal
                </div>
                <div className="text-xs text-muted-foreground">Base metabolic rate</div>
              </div>
              
              <div className="space-y-1">
                <div className="text-sm font-medium">TDEE</div>
                <div className="text-xl font-bold flex align-center">
                  <AnimatedNumber value={tdee} /> kcal
                </div>
                <div className="text-xs text-muted-foreground">Total daily energy expenditure</div>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-3">
              <div className="text-sm font-medium">Macronutrients</div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Beef className="w-5 h-5 text-red-500 mr-2" />
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm">Protein</span>
                      <span className="text-sm text-muted-foreground">{proteinPercent}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-red-500 transition-all duration-500 ease-out"
                        style={{ width: `${proteinPercent}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="font-medium">{macros.protein}g</span>
                      <span className="text-muted-foreground">{macros.protein * 4} kcal</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Cookie className="w-5 h-5 text-amber-500 mr-2" />
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm">Carbs</span>
                      <span className="text-sm text-muted-foreground">{carbsPercent}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-amber-500 transition-all duration-500 ease-out"
                        style={{ width: `${carbsPercent}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="font-medium">{macros.carbs}g</span>
                      <span className="text-muted-foreground">{macros.carbs * 4} kcal</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Apple className="w-5 h-5 text-green-500 mr-2" />
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm">Fat</span>
                      <span className="text-sm text-muted-foreground">{fatPercent}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-500 transition-all duration-500 ease-out"
                        style={{ width: `${fatPercent}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="font-medium">{macros.fat}g</span>
                      <span className="text-muted-foreground">{macros.fat * 9} kcal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalorieInfoCard;
