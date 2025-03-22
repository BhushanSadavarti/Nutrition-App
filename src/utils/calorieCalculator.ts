
export interface UserProfile {
  age: number;
  gender: 'male' | 'female';
  weight: number; // in kg
  height: number; // in cm
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very-active';
  goal: 'lose' | 'maintain' | 'gain';
}

// Activity level multipliers
const activityMultipliers = {
  sedentary: 1.2, // Little or no exercise
  light: 1.375, // Light exercise 1-3 days/week
  moderate: 1.55, // Moderate exercise 3-5 days/week
  active: 1.725, // Hard exercise 6-7 days/week
  'very-active': 1.9, // Very hard exercise & physical job or 2x training
};

// Goal adjustments (percentage of maintenance)
const goalAdjustments = {
  lose: 0.85, // 15% deficit
  maintain: 1.0, // Maintenance calories
  gain: 1.15, // 15% surplus
};

// Calculate Basal Metabolic Rate (BMR) using Mifflin-St Jeor equation
export const calculateBMR = (profile: UserProfile): number => {
  const { age, gender, weight, height } = profile;
  
  if (gender === 'male') {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    return 10 * weight + 6.25 * height - 5 * age - 161;
  }
};

// Calculate Total Daily Energy Expenditure (TDEE)
export const calculateTDEE = (profile: UserProfile): number => {
  const bmr = calculateBMR(profile);
  const activityMultiplier = activityMultipliers[profile.activityLevel];
  
  return Math.round(bmr * activityMultiplier);
};

// Calculate target calories based on goal
export const calculateTargetCalories = (profile: UserProfile): number => {
  const tdee = calculateTDEE(profile);
  const adjustment = goalAdjustments[profile.goal];
  
  return Math.round(tdee * adjustment);
};

// Calculate macronutrient distribution (in grams)
export const calculateMacros = (
  profile: UserProfile, 
  targetCalories: number
): { protein: number; carbs: number; fat: number } => {
  // Protein: 1.6g per kg of bodyweight for gain, 2g for loss, 1.8g for maintenance
  let proteinMultiplier = 1.8;
  if (profile.goal === 'gain') proteinMultiplier = 1.6;
  if (profile.goal === 'lose') proteinMultiplier = 2.0;
  
  const protein = Math.round(profile.weight * proteinMultiplier);
  
  // Fat: minimum 20% of calories
  const fatCalories = targetCalories * 0.25; // 25% of calories from fat
  const fat = Math.round(fatCalories / 9); // 9 calories per gram of fat
  
  // Remaining calories from carbs
  const remainingCalories = targetCalories - (protein * 4) - (fat * 9);
  const carbs = Math.round(remainingCalories / 4); // 4 calories per gram of carbs
  
  return { protein, carbs, fat };
};

// Get calorie goal description
export const getGoalDescription = (goal: UserProfile['goal']): string => {
  switch (goal) {
    case 'lose':
      return 'Weight Loss';
    case 'maintain':
      return 'Weight Maintenance';
    case 'gain':
      return 'Weight Gain';
    default:
      return 'Custom Goal';
  }
};

// Get activity level description
export const getActivityDescription = (level: UserProfile['activityLevel']): string => {
  switch (level) {
    case 'sedentary':
      return 'Sedentary (little or no exercise)';
    case 'light':
      return 'Lightly active (light exercise 1-3 days/week)';
    case 'moderate':
      return 'Moderately active (moderate exercise 3-5 days/week)';
    case 'active':
      return 'Active (hard exercise 6-7 days/week)';
    case 'very-active':
      return 'Very active (hard daily exercise & physical job)';
    default:
      return 'Custom Activity Level';
  }
};
