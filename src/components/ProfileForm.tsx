import React, { useState } from 'react';
import { UserProfile } from '@/utils/calorieCalculator';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { 
  Accessibility,
  ArrowRight, 
  User,
  UserRound,
  Scale,
  Ruler,
  Calendar,
  Goal,
  Activity
} from 'lucide-react';

interface ProfileFormProps {
  onCalculate: (profile: UserProfile) => void;
  className?: string;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ onCalculate, className }) => {
  const [profile, setProfile] = useState<UserProfile>({
    age: 30,
    gender: 'male',
    weight: 70,
    height: 170,
    activityLevel: 'moderate',
    goal: 'maintain',
  });

  const [activeSection, setActiveSection] = useState<number>(0);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    let parsedValue: string | number = value;
    if (name === 'age' || name === 'weight' || name === 'height') {
      parsedValue = value === '' ? '' : Number(value);
    }
    
    setProfile(prev => ({
      ...prev,
      [name]: parsedValue
    }));
  };
  
  const handleRadioChange = (name: string, value: string) => {
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate(profile);
  };
  
  const handleNext = () => {
    if (activeSection < 3) {
      setActiveSection(prev => prev + 1);
    } else {
      onCalculate(profile);
    }
  };
  
  const handleBack = () => {
    if (activeSection > 0) {
      setActiveSection(prev => prev - 1);
    }
  };
  
  const sectionValid = () => {
    switch (activeSection) {
      case 0: // Age & Gender
        return profile.age > 0 && profile.age < 120;
      case 1: // Weight & Height
        return profile.weight > 30 && profile.weight < 300 && 
               profile.height > 100 && profile.height < 250;
      case 2: // Activity Level
        return !!profile.activityLevel;
      case 3: // Goal
        return !!profile.goal;
      default:
        return true;
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case 0:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-primary/70" />
                <Label htmlFor="age" className="text-lg">Age</Label>
              </div>
              <div className="space-y-2">
                <Input
                  id="age"
                  name="age"
                  type="number"
                  value={profile.age}
                  onChange={handleInputChange}
                  min="15"
                  max="120"
                  className="text-lg h-12"
                  onInput={(e) => {
                    const input = e.currentTarget;
                    if (input.value.startsWith('0') && input.value.length > 1) {
                      input.value = input.value.replace(/^0+/, '');
                    }
                  }}
                />
                <Slider
                  value={[profile.age]}
                  min={15}
                  max={120}
                  step={1}
                  onValueChange={(value) => {
                    setProfile(prev => ({ ...prev, age: value[0] }));
                  }}
                  className="mt-2"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>15</span>
                  <span>70</span>
                  <span>120</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center">
                <Accessibility className="w-5 h-5 mr-2 text-primary/70" />
                <Label className="text-lg">Gender</Label>
              </div>
              <RadioGroup
                value={profile.gender}
                onValueChange={(value) => handleRadioChange('gender', value)}
                className="flex space-x-2"
              >
                <div className="flex-1">
                  <Label
                    htmlFor="gender-male"
                    className={cn(
                      "flex flex-col items-center justify-center w-full p-4 border-2 rounded-xl cursor-pointer transition-all",
                      profile.gender === 'male' 
                        ? "border-primary bg-primary/5" 
                        : "border-border hover:border-primary/30"
                    )}
                  >
                    <User className={cn(
                      "w-12 h-12 mb-2 transition-colors",
                      profile.gender === 'male' ? "text-primary" : "text-muted-foreground"
                    )} />
                    <span className={cn(
                      "font-medium",
                      profile.gender === 'male' ? "text-primary" : "text-muted-foreground"
                    )}>Male</span>
                    <RadioGroupItem value="male" id="gender-male" className="sr-only" />
                  </Label>
                </div>
                
                <div className="flex-1">
                  <Label
                    htmlFor="gender-female"
                    className={cn(
                      "flex flex-col items-center justify-center w-full p-4 border-2 rounded-xl cursor-pointer transition-all",
                      profile.gender === 'female' 
                        ? "border-primary bg-primary/5" 
                        : "border-border hover:border-primary/30"
                    )}
                  >
                    <UserRound className={cn(
                      "w-12 h-12 mb-2 transition-colors",
                      profile.gender === 'female' ? "text-primary" : "text-muted-foreground"
                    )} />
                    <span className={cn(
                      "font-medium",
                      profile.gender === 'female' ? "text-primary" : "text-muted-foreground"
                    )}>Female</span>
                    <RadioGroupItem value="female" id="gender-female" className="sr-only" />
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        );
      
      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center">
                <Scale className="w-5 h-5 mr-2 text-primary/70" />
                <Label htmlFor="weight" className="text-lg">Weight (kg)</Label>
              </div>
              <div className="space-y-2">
                <Input
                  id="weight"
                  name="weight"
                  type="number"
                  value={profile.weight}
                  onChange={handleInputChange}
                  min="30"
                  max="300"
                  step="0.5"
                  className="text-lg h-12"
                  onInput={(e) => {
                    const input = e.currentTarget;
                    if (input.value.startsWith('0') && !input.value.startsWith('0.') && input.value.length > 1) {
                      input.value = input.value.replace(/^0+/, '');
                    }
                  }}
                />
                <Slider
                  value={[profile.weight]}
                  min={30}
                  max={200}
                  step={0.5}
                  onValueChange={(value) => {
                    setProfile(prev => ({ ...prev, weight: value[0] }));
                  }}
                  className="mt-2"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>30</span>
                  <span>100</span>
                  <span>200</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center">
                <Ruler className="w-5 h-5 mr-2 text-primary/70" />
                <Label htmlFor="height" className="text-lg">Height (cm)</Label>
              </div>
              <div className="space-y-2">
                <Input
                  id="height"
                  name="height"
                  type="number"
                  value={profile.height}
                  onChange={handleInputChange}
                  min="100"
                  max="250"
                  className="text-lg h-12"
                  onInput={(e) => {
                    const input = e.currentTarget;
                    if (input.value.startsWith('0') && input.value.length > 1) {
                      input.value = input.value.replace(/^0+/, '');
                    }
                  }}
                />
                <Slider
                  value={[profile.height]}
                  min={100}
                  max={220}
                  step={1}
                  onValueChange={(value) => {
                    setProfile(prev => ({ ...prev, height: value[0] }));
                  }}
                  className="mt-2"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>100</span>
                  <span>170</span>
                  <span>220</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center">
                <Activity className="w-5 h-5 mr-2 text-primary/70" />
                <Label className="text-lg">Activity Level</Label>
              </div>
              <RadioGroup
                value={profile.activityLevel}
                onValueChange={(value) => handleRadioChange('activityLevel', value)}
                className="space-y-3"
              >
                {[
                  { value: 'sedentary', label: 'Sedentary', description: 'Little or no exercise' },
                  { value: 'light', label: 'Lightly Active', description: 'Light exercise 1-3 times/week' },
                  { value: 'moderate', label: 'Moderately Active', description: 'Moderate exercise 3-5 times/week' },
                  { value: 'active', label: 'Active', description: 'Hard exercise 6-7 times/week' },
                  { value: 'very-active', label: 'Very Active', description: 'Hard daily exercise & physical job' },
                ].map((option) => (
                  <div key={option.value} className="flex items-start space-x-2">
                    <RadioGroupItem value={option.value} id={`activity-${option.value}`} className="mt-1" />
                    <Label
                      htmlFor={`activity-${option.value}`}
                      className={cn(
                        "flex flex-col cursor-pointer",
                        profile.activityLevel === option.value ? "text-primary font-medium" : ""
                      )}
                    >
                      <span>{option.label}</span>
                      <span className="text-sm text-muted-foreground">{option.description}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center">
                <Goal className="w-5 h-5 mr-2 text-primary/70" />
                <Label className="text-lg">Your Goal</Label>
              </div>
              <RadioGroup
                value={profile.goal}
                onValueChange={(value) => handleRadioChange('goal', value)}
                className="space-y-4"
              >
                {[
                  { value: 'lose', label: 'Lose Weight', description: '15% calorie deficit' },
                  { value: 'maintain', label: 'Maintain Weight', description: 'Balanced calorie intake' },
                  { value: 'gain', label: 'Gain Weight', description: '15% calorie surplus' },
                ].map((option) => (
                  <div key={option.value} className="flex-1">
                    <Label
                      htmlFor={`goal-${option.value}`}
                      className={cn(
                        "flex flex-col justify-between w-full p-4 h-24 border-2 rounded-xl cursor-pointer transition-all",
                        profile.goal === option.value 
                          ? "border-primary bg-primary/5" 
                          : "border-border hover:border-primary/30"
                      )}
                    >
                      <span className={cn(
                        "font-medium",
                        profile.goal === option.value ? "text-primary" : "text-foreground"
                      )}>{option.label}</span>
                      <span className="text-sm text-muted-foreground">{option.description}</span>
                      <RadioGroupItem value={option.value} id={`goal-${option.value}`} className="sr-only" />
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  const progressPercent = (activeSection / 3) * 100;

  return (
    <div className={cn("w-full max-w-lg mx-auto", className)}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-1 mb-6">
          <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Basic Info</span>
            <span>Measurements</span>
            <span>Activity</span>
            <span>Goal</span>
          </div>
        </div>

        {renderSection()}
        
        <div className="flex justify-between pt-4">
          {activeSection > 0 ? (
            <Button 
              type="button"
              onClick={handleBack}
              variant="outline"
              className="min-w-[100px]"
            >
              Back
            </Button>
          ) : <div></div>}
          
          <Button 
            type="button"
            onClick={handleNext}
            disabled={!sectionValid()}
            className="min-w-[100px]"
          >
            {activeSection < 3 ? 'Next' : 'Calculate'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
