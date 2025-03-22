import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import ProfileForm from './ProfileForm';
import CalorieInfoCard from './CalorieInfoCard';
import DietPlan from './FoodSuggestions';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';
import { UserProfile, calculateBMR, calculateTDEE, calculateTargetCalories, calculateMacros } from '@/utils/calorieCalculator';
import { ArrowLeft, Sun, Moon, Sparkles } from 'lucide-react';

interface CalorieCalculatorProps {
  className?: string;
}

const CalorieCalculator: React.FC<CalorieCalculatorProps> = ({ className }) => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [results, setResults] = useState<{
    bmr: number;
    tdee: number;
    targetCalories: number;
    macros: { protein: number; carbs: number; fat: number };
  } | null>(null);
  const { theme, setTheme } = useTheme();

  const handleCalculate = (userProfile: UserProfile) => {
    const bmr = calculateBMR(userProfile);
    const tdee = calculateTDEE(userProfile);
    const targetCalories = calculateTargetCalories(userProfile);
    const macros = calculateMacros(userProfile, targetCalories);
    
    setProfile(userProfile);
    setResults({
      bmr,
      tdee,
      targetCalories,
      macros,
    });
  };

  const handleReset = () => {
    setProfile(null);
    setResults(null);
  };
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-end mb-4">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="rounded-full"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>

      {!results ? (
       <div className="animate-fade-in">
       <div className="text-center mb-8">
         <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
           <Sparkles className="w-3 h-3 mr-1.5" />
           Customized For You
         </div>
         <h2 className={`text-2xl font-playfair font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
           Enter Your Details
         </h2>
         <p className="text-muted-foreground text-sm max-w-md mx-auto">
           Provide your information below to get personalized calorie recommendations and Indian food suggestions.
         </p>
       </div>
       <ProfileForm onCalculate={handleCalculate} />
     </div>
      ) : (
        <div className="space-y-8 animate-fade-in">
          <Button 
            variant="ghost" 
            onClick={handleReset}
            className="mb-4 -ml-2"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Start Over
          </Button>
          
          <div className="grid md:grid-cols-2 gap-6">
            <CalorieInfoCard
              profile={profile!}
              bmr={results.bmr}
              tdee={results.tdee}
              targetCalories={results.targetCalories}
              macros={results.macros}
            />
            
            <DietPlan
              targetCalories={results.targetCalories}
              macros={results.macros}
              profile={profile!}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CalorieCalculator;