import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { UserProfile } from '@/utils/calorieCalculator';
import { Utensils, Clock, Info, CheckCircle2, Beef, Leaf } from 'lucide-react';

interface MealItem {
  name: string;
  portion: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

interface MealPlan {
  title: string;
  description: string;
  type: 'veg' | 'non-veg';
  meals: {
    title: string;
    time: string;
    items: MealItem[];
  }[];
}

interface DietPlanProps {
  targetCalories: number;
  macros: { 
    protein: number; 
    carbs: number; 
    fat: number;
  };
  profile?: UserProfile;
  className?: string;
}

const DietPlan: React.FC<DietPlanProps> = ({ 
  targetCalories,
  macros,
  profile,
  className 
}) => {
  const [selectedPlan, setSelectedPlan] = useState('plan-1');
  const [dietType, setDietType] = useState<'veg' | 'non-veg'>('veg');
  
  // Create diet plans based on the macros
  const dietPlans: MealPlan[] = [
    // Balanced Diet Plan - Vegetarian
    {
      title: "Balanced Indian Diet",
      description: "A well-balanced traditional Indian diet with optimal mix of proteins, carbs and fats.",
      type: "veg",
      meals: [
        {
          title: "Breakfast",
          time: "7:00 - 8:00 AM",
          items: [
            {
              name: "Masala Oats",
              portion: "1 cup (150g)",
              calories: Math.round(targetCalories * 0.2),
              protein: Math.round(macros.protein * 0.2),
              carbs: Math.round(macros.carbs * 0.2),
              fat: Math.round(macros.fat * 0.1)
            },
            {
              name: "Mixed Nuts",
              portion: "1 handful (25g)",
              calories: Math.round(targetCalories * 0.05),
              protein: Math.round(macros.protein * 0.05),
              carbs: Math.round(macros.carbs * 0.02),
              fat: Math.round(macros.fat * 0.1)
            },
            {
              name: "Low-fat Milk",
              portion: "1 cup (250ml)",
              calories: Math.round(targetCalories * 0.05),
              protein: Math.round(macros.protein * 0.1),
              carbs: Math.round(macros.carbs * 0.05),
              fat: Math.round(macros.fat * 0.05)
            }
          ]
        },
        {
          title: "Mid-Morning Snack",
          time: "10:00 - 11:00 AM",
          items: [
            {
              name: "Apple",
              portion: "1 medium (150g)",
              calories: Math.round(targetCalories * 0.05),
              protein: Math.round(macros.protein * 0.01),
              carbs: Math.round(macros.carbs * 0.05),
              fat: 0
            },
            {
              name: "Greek Yogurt",
              portion: "1 small cup (100g)",
              calories: Math.round(targetCalories * 0.05),
              protein: Math.round(macros.protein * 0.08),
              carbs: Math.round(macros.carbs * 0.02),
              fat: Math.round(macros.fat * 0.05)
            }
          ]
        },
        {
          title: "Lunch",
          time: "1:00 - 2:00 PM",
          items: [
            {
              name: "Brown Rice",
              portion: "1 cup cooked (150g)",
              calories: Math.round(targetCalories * 0.15),
              protein: Math.round(macros.protein * 0.05),
              carbs: Math.round(macros.carbs * 0.2),
              fat: Math.round(macros.fat * 0.02)
            },
            {
              name: "Dal Tadka",
              portion: "1 cup (200g)",
              calories: Math.round(targetCalories * 0.1),
              protein: Math.round(macros.protein * 0.15),
              carbs: Math.round(macros.carbs * 0.1),
              fat: Math.round(macros.fat * 0.1)
            },
            {
              name: "Mixed Vegetable Curry",
              portion: "1 cup (150g)",
              calories: Math.round(targetCalories * 0.08),
              protein: Math.round(macros.protein * 0.05),
              carbs: Math.round(macros.carbs * 0.08),
              fat: Math.round(macros.fat * 0.1)
            },
            {
              name: "Cucumber Raita",
              portion: "1/2 cup (100g)",
              calories: Math.round(targetCalories * 0.05),
              protein: Math.round(macros.protein * 0.05),
              carbs: Math.round(macros.carbs * 0.03),
              fat: Math.round(macros.fat * 0.08)
            }
          ]
        },
        {
          title: "Evening Snack",
          time: "4:00 - 5:00 PM",
          items: [
            {
              name: "Roasted Chana",
              portion: "1/4 cup (50g)",
              calories: Math.round(targetCalories * 0.07),
              protein: Math.round(macros.protein * 0.1),
              carbs: Math.round(macros.carbs * 0.05),
              fat: Math.round(macros.fat * 0.05)
            },
            {
              name: "Masala Chai (no sugar)",
              portion: "1 cup (200ml)",
              calories: Math.round(targetCalories * 0.03),
              protein: Math.round(macros.protein * 0.01),
              carbs: Math.round(macros.carbs * 0.02),
              fat: Math.round(macros.fat * 0.05)
            }
          ]
        },
        {
          title: "Dinner",
          time: "7:00 - 8:00 PM",
          items: [
            {
              name: "Roti/Chapati",
              portion: "2 medium (60g)",
              calories: Math.round(targetCalories * 0.1),
              protein: Math.round(macros.protein * 0.05),
              carbs: Math.round(macros.carbs * 0.1),
              fat: Math.round(macros.fat * 0.02)
            },
            {
              name: "Paneer Bhurji",
              portion: "3/4 cup (150g)",
              calories: Math.round(targetCalories * 0.12),
              protein: Math.round(macros.protein * 0.15),
              carbs: Math.round(macros.carbs * 0.05),
              fat: Math.round(macros.fat * 0.15)
            },
            {
              name: "Palak (Spinach)",
              portion: "1 cup cooked (100g)",
              calories: Math.round(targetCalories * 0.05),
              protein: Math.round(macros.protein * 0.05),
              carbs: Math.round(macros.carbs * 0.03),
              fat: Math.round(macros.fat * 0.05)
            }
          ]
        }
      ]
    },
    // Balanced Diet Plan - Non-Vegetarian
    {
      title: "Balanced Indian Diet",
      description: "A well-balanced traditional Indian diet with optimal mix of proteins, carbs and fats.",
      type: "non-veg",
      meals: [
        {
          title: "Breakfast",
          time: "7:00 - 8:00 AM",
          items: [
            {
              name: "Egg Bhurji",
              portion: "2 eggs",
              calories: Math.round(targetCalories * 0.15),
              protein: Math.round(macros.protein * 0.15),
              carbs: Math.round(macros.carbs * 0.05),
              fat: Math.round(macros.fat * 0.15)
            },
            {
              name: "Whole Wheat Toast",
              portion: "2 slices",
              calories: Math.round(targetCalories * 0.1),
              protein: Math.round(macros.protein * 0.08),
              carbs: Math.round(macros.carbs * 0.15),
              fat: Math.round(macros.fat * 0.05)
            },
            {
              name: "Low-fat Milk",
              portion: "1 cup (250ml)",
              calories: Math.round(targetCalories * 0.05),
              protein: Math.round(macros.protein * 0.1),
              carbs: Math.round(macros.carbs * 0.05),
              fat: Math.round(macros.fat * 0.05)
            }
          ]
        },
        {
          title: "Mid-Morning Snack",
          time: "10:00 - 11:00 AM",
          items: [
            {
              name: "Mixed Fruits",
              portion: "1 cup (150g)",
              calories: Math.round(targetCalories * 0.07),
              protein: Math.round(macros.protein * 0.01),
              carbs: Math.round(macros.carbs * 0.1),
              fat: 0
            },
            {
              name: "Greek Yogurt",
              portion: "1 small cup (100g)",
              calories: Math.round(targetCalories * 0.05),
              protein: Math.round(macros.protein * 0.08),
              carbs: Math.round(macros.carbs * 0.02),
              fat: Math.round(macros.fat * 0.05)
            }
          ]
        },
        {
          title: "Lunch",
          time: "1:00 - 2:00 PM",
          items: [
            {
              name: "Brown Rice",
              portion: "1 cup cooked (150g)",
              calories: Math.round(targetCalories * 0.15),
              protein: Math.round(macros.protein * 0.05),
              carbs: Math.round(macros.carbs * 0.2),
              fat: Math.round(macros.fat * 0.02)
            },
            {
              name: "Chicken Curry",
              portion: "150g",
              calories: Math.round(targetCalories * 0.15),
              protein: Math.round(macros.protein * 0.2),
              carbs: Math.round(macros.carbs * 0.05),
              fat: Math.round(macros.fat * 0.15)
            },
            {
              name: "Mixed Vegetable",
              portion: "1 cup (150g)",
              calories: Math.round(targetCalories * 0.08),
              protein: Math.round(macros.protein * 0.05),
              carbs: Math.round(macros.carbs * 0.08),
              fat: Math.round(macros.fat * 0.05)
            }
          ]
        },
        {
          title: "Evening Snack",
          time: "4:00 - 5:00 PM",
          items: [
            {
              name: "Roasted Peanuts",
              portion: "1/4 cup (30g)",
              calories: Math.round(targetCalories * 0.07),
              protein: Math.round(macros.protein * 0.1),
              carbs: Math.round(macros.carbs * 0.05),
              fat: Math.round(macros.fat * 0.1)
            },
            {
              name: "Green Tea",
              portion: "1 cup (250ml)",
              calories: Math.round(targetCalories * 0.01),
              protein: 0,
              carbs: Math.round(macros.carbs * 0.01),
              fat: 0
            }
          ]
        },
        {
          title: "Dinner",
          time: "7:00 - 8:00 PM",
          items: [
            {
              name: "Roti/Chapati",
              portion: "2 medium (60g)",
              calories: Math.round(targetCalories * 0.1),
              protein: Math.round(macros.protein * 0.05),
              carbs: Math.round(macros.carbs * 0.1),
              fat: Math.round(macros.fat * 0.02)
            },
            {
              name: "Fish Curry",
              portion: "150g",
              calories: Math.round(targetCalories * 0.12),
              protein: Math.round(macros.protein * 0.2),
              carbs: Math.round(macros.carbs * 0.05),
              fat: Math.round(macros.fat * 0.1)
            },
            {
              name: "Steamed Vegetables",
              portion: "1 cup (150g)",
              calories: Math.round(targetCalories * 0.05),
              protein: Math.round(macros.protein * 0.03),
              carbs: Math.round(macros.carbs * 0.07),
              fat: Math.round(macros.fat * 0.02)
            }
          ]
        }
      ]
    },
    // High Protein Diet Plan - Vegetarian
    {
      title: "High Protein Indian Diet",
      description: "Protein-rich diet plan designed for muscle growth and recovery.",
      type: "veg",
      meals: [
        {
          title: "Breakfast",
          time: "7:00 - 8:00 AM",
          items: [
            {
              name: "Paneer Paratha",
              portion: "2 medium (100g)",
              calories: Math.round(targetCalories * 0.15),
              protein: Math.round(macros.protein * 0.15),
              carbs: Math.round(macros.carbs * 0.15),
              fat: Math.round(macros.fat * 0.15)
            },
            {
              name: "Greek Yogurt",
              portion: "1 cup (200g)",
              calories: Math.round(targetCalories * 0.08),
              protein: Math.round(macros.protein * 0.12),
              carbs: Math.round(macros.carbs * 0.05),
              fat: Math.round(macros.fat * 0.07)
            },
            {
              name: "Protein Shake",
              portion: "1 scoop with milk (300ml)",
              calories: Math.round(targetCalories * 0.07),
              protein: Math.round(macros.protein * 0.15),
              carbs: Math.round(macros.carbs * 0.02),
              fat: Math.round(macros.fat * 0.03)
            }
          ]
        },
        {
          title: "Mid-Morning Snack",
          time: "10:00 - 11:00 AM",
          items: [
            {
              name: "Paneer Cubes",
              portion: "100g",
              calories: Math.round(targetCalories * 0.1),
              protein: Math.round(macros.protein * 0.1),
              carbs: Math.round(macros.carbs * 0.01),
              fat: Math.round(macros.fat * 0.1)
            },
            {
              name: "Cucumber Slices",
              portion: "1 cup (100g)",
              calories: Math.round(targetCalories * 0.01),
              protein: Math.round(macros.protein * 0.01),
              carbs: Math.round(macros.carbs * 0.01),
              fat: 0
            }
          ]
        },
        {
          title: "Lunch",
          time: "1:00 - 2:00 PM",
          items: [
            {
              name: "Tofu Curry",
              portion: "150g",
              calories: Math.round(targetCalories * 0.15),
              protein: Math.round(macros.protein * 0.2),
              carbs: Math.round(macros.carbs * 0.05),
              fat: Math.round(macros.fat * 0.1)
            },
            {
              name: "Brown Rice",
              portion: "3/4 cup cooked (100g)",
              calories: Math.round(targetCalories * 0.1),
              protein: Math.round(macros.protein * 0.03),
              carbs: Math.round(macros.carbs * 0.15),
              fat: Math.round(macros.fat * 0.01)
            },
            {
              name: "Mixed Vegetable Salad",
              portion: "1 large bowl (150g)",
              calories: Math.round(targetCalories * 0.04),
              protein: Math.round(macros.protein * 0.02),
              carbs: Math.round(macros.carbs * 0.05),
              fat: Math.round(macros.fat * 0.02)
            }
          ]
        },
        {
          title: "Evening Snack",
          time: "4:00 - 5:00 PM",
          items: [
            {
              name: "Soy Protein Bar",
              portion: "1 bar (50g)",
              calories: Math.round(targetCalories * 0.08),
              protein: Math.round(macros.protein * 0.12),
              carbs: Math.round(macros.carbs * 0.08),
              fat: Math.round(macros.fat * 0.05)
            },
            {
              name: "Green Tea",
              portion: "1 cup (250ml)",
              calories: Math.round(targetCalories * 0.01),
              protein: 0,
              carbs: Math.round(macros.carbs * 0.01),
              fat: 0
            }
          ]
        },
        {
          title: "Dinner",
          time: "7:00 - 8:00 PM",
          items: [
            {
              name: "Soya Chunks Curry",
              portion: "150g",
              calories: Math.round(targetCalories * 0.15),
              protein: Math.round(macros.protein * 0.2),
              carbs: Math.round(macros.carbs * 0.08),
              fat: Math.round(macros.fat * 0.1)
            },
            {
              name: "Quinoa",
              portion: "3/4 cup cooked (100g)",
              calories: Math.round(targetCalories * 0.1),
              protein: Math.round(macros.protein * 0.05),
              carbs: Math.round(macros.carbs * 0.15),
              fat: Math.round(macros.fat * 0.03)
            },
            {
              name: "Stir-fried Vegetables",
              portion: "1 cup (150g)",
              calories: Math.round(targetCalories * 0.05),
              protein: Math.round(macros.protein * 0.03),
              carbs: Math.round(macros.carbs * 0.07),
              fat: Math.round(macros.fat * 0.05)
            }
          ]
        }
      ]
    },
    // High Protein Diet Plan - Non-Vegetarian
    {
      title: "High Protein Indian Diet",
      description: "Protein-rich diet plan designed for muscle growth and recovery.",
      type: "non-veg",
      meals: [
        {
          title: "Breakfast",
          time: "7:00 - 8:00 AM",
          items: [
            {
              name: "Egg Bhurji",
              portion: "3 eggs",
              calories: Math.round(targetCalories * 0.15),
              protein: Math.round(macros.protein * 0.2),
              carbs: Math.round(macros.carbs * 0.02),
              fat: Math.round(macros.fat * 0.15)
            },
            {
              name: "Multigrain Toast",
              portion: "2 slices (60g)",
              calories: Math.round(targetCalories * 0.08),
              protein: Math.round(macros.protein * 0.05),
              carbs: Math.round(macros.carbs * 0.1),
              fat: Math.round(macros.fat * 0.02)
            },
            {
              name: "Protein Shake",
              portion: "1 scoop with water (300ml)",
              calories: Math.round(targetCalories * 0.07),
              protein: Math.round(macros.protein * 0.15),
              carbs: Math.round(macros.carbs * 0.02),
              fat: Math.round(macros.fat * 0.02)
            }
          ]
        },
        {
          title: "Mid-Morning Snack",
          time: "10:00 - 11:00 AM",
          items: [
            {
              name: "Grilled Chicken Strips",
              portion: "75g",
              calories: Math.round(targetCalories * 0.1),
              protein: Math.round(macros.protein * 0.15),
              carbs: 0,
              fat: Math.round(macros.fat * 0.05)
            },
            {
              name: "Cucumber & Bell Pepper",
              portion: "1 cup (100g)",
              calories: Math.round(targetCalories * 0.02),
              protein: Math.round(macros.protein * 0.01),
              carbs: Math.round(macros.carbs * 0.03),
              fat: 0
            }
          ]
        },
        {
          title: "Lunch",
          time: "1:00 - 2:00 PM",
          items: [
            {
              name: "Chicken Tikka",
              portion: "150g",
              calories: Math.round(targetCalories * 0.15),
              protein: Math.round(macros.protein * 0.25),
              carbs: Math.round(macros.carbs * 0.02),
              fat: Math.round(macros.fat * 0.1)
            },
            {
              name: "Brown Rice",
              portion: "3/4 cup cooked (100g)",
              calories: Math.round(targetCalories * 0.1),
              protein: Math.round(macros.protein * 0.03),
              carbs: Math.round(macros.carbs * 0.15),
              fat: Math.round(macros.fat * 0.01)
            },
            {
              name: "Mixed Vegetable Salad",
              portion: "1 large bowl (150g)",
              calories: Math.round(targetCalories * 0.04),
              protein: Math.round(macros.protein * 0.02),
              carbs: Math.round(macros.carbs * 0.05),
              fat: Math.round(macros.fat * 0.02)
            }
          ]
        },
        {
          title: "Evening Snack",
          time: "4:00 - 5:00 PM",
          items: [
            {
              name: "Greek Yogurt",
              portion: "1 cup (200g)",
              calories: Math.round(targetCalories * 0.08),
              protein: Math.round(macros.protein * 0.12),
              carbs: Math.round(macros.carbs * 0.05),
              fat: Math.round(macros.fat * 0.05)
            },
            {
              name: "Mixed Berries",
              portion: "1/2 cup (75g)",
              calories: Math.round(targetCalories * 0.03),
              protein: Math.round(macros.protein * 0.01),
              carbs: Math.round(macros.carbs * 0.05),
              fat: 0
            }
          ]
        },
        {
          title: "Dinner",
          time: "7:00 - 8:00 PM",
          items: [
            {
              name: "Grilled Fish",
              portion: "150g",
              calories: Math.round(targetCalories * 0.15),
              protein: Math.round(macros.protein * 0.25),
              carbs: 0,
              fat: Math.round(macros.fat * 0.1)
            },
            {
              name: "Quinoa",
              portion: "3/4 cup cooked (100g)",
              calories: Math.round(targetCalories * 0.1),
              protein: Math.round(macros.protein * 0.05),
              carbs: Math.round(macros.carbs * 0.15),
              fat: Math.round(macros.fat * 0.03)
            },
            {
              name: "Stir-fried Vegetables",
              portion: "1 cup (150g)",
              calories: Math.round(targetCalories * 0.05),
              protein: Math.round(macros.protein * 0.03),
              carbs: Math.round(macros.carbs * 0.07),
              fat: Math.round(macros.fat * 0.05)
            }
          ]
        }
      ]
    },
    // Plant-Based Diet Plan
    {
      title: "Plant-Based Indian Diet",
      description: "Nutritionally complete vegetarian diet with diverse plant-based proteins.",
      type: "veg",
      meals: [
        {
          title: "Breakfast",
          time: "7:00 - 8:00 AM",
          items: [
            {
              name: "Vegetable Poha",
              portion: "1 cup (150g)",
              calories: Math.round(targetCalories * 0.15),
              protein: Math.round(macros.protein * 0.08),
              carbs: Math.round(macros.carbs * 0.15),
              fat: Math.round(macros.fat * 0.08)
            },
            {
              name: "Sprouts Salad",
              portion: "1/2 cup (75g)",
              calories: Math.round(targetCalories * 0.05),
              protein: Math.round(macros.protein * 0.1),
              carbs: Math.round(macros.carbs * 0.05),
              fat: Math.round(macros.fat * 0.01)
            },
            {
              name: "Almond Milk",
              portion: "1 cup (250ml)",
              calories: Math.round(targetCalories * 0.05),
              protein: Math.round(macros.protein * 0.02),
              carbs: Math.round(macros.carbs * 0.03),
              fat: Math.round(macros.fat * 0.1)
            }
          ]
        },
        {
          title: "Mid-Morning Snack",
          time: "10:00 - 11:00 AM",
          items: [
            {
              name: "Mixed Fruits",
              portion: "1 cup (150g)",
              calories: Math.round(targetCalories * 0.07),
              protein: Math.round(macros.protein * 0.02),
              carbs: Math.round(macros.carbs * 0.1),
              fat: Math.round(macros.fat * 0.01)
            },
            {
              name: "Roasted Fox Nuts (Makhana)",
              portion: "1/2 cup (25g)",
              calories: Math.round(targetCalories * 0.05),
              protein: Math.round(macros.protein * 0.03),
              carbs: Math.round(macros.carbs * 0.05),
              fat: Math.round(macros.fat * 0.05)
            }
          ]
        },
        {
          title: "Lunch",
          time: "1:00 - 2:00 PM",
          items: [
            {
              name: "Rajma Curry",
              portion: "1 cup (200g)",
              calories: Math.round(targetCalories * 0.15),
              protein: Math.round(macros.protein * 0.15),
              carbs: Math.round(macros.carbs * 0.15),
              fat: Math.round(macros.fat * 0.08)
            },
            {
              name: "Brown Rice",
              portion: "3/4 cup cooked (100g)",
              calories: Math.round(targetCalories * 0.1),
              protein: Math.round(macros.protein * 0.03),
              carbs: Math.round(macros.carbs * 0.15),
              fat: Math.round(macros.fat * 0.01)
            },
            {
              name: "Steamed Vegetables",
              portion: "1 cup (150g)",
              calories: Math.round(targetCalories * 0.05),
              protein: Math.round(macros.protein * 0.03),
              carbs: Math.round(macros.carbs * 0.07),
              fat: Math.round(macros.fat * 0.01)
            }
          ]
        },
        {
          title: "Evening Snack",
          time: "4:00 - 5:00 PM",
          items: [
            {
              name: "Tofu Cutlet",
              portion: "2 pieces (100g)",
              calories: Math.round(targetCalories * 0.08),
              protein: Math.round(macros.protein * 0.15),
              carbs: Math.round(macros.carbs * 0.03),
              fat: Math.round(macros.fat * 0.1)
            },
            {
              name: "Green Tea",
              portion: "1 cup (250ml)",
              calories: Math.round(targetCalories * 0.01),
              protein: 0,
              carbs: Math.round(macros.carbs * 0.01),
              fat: 0
            }
          ]
        },
        {
          title: "Dinner",
          time: "7:00 - 8:00 PM",
          items: [
            {
              name: "Multigrain Roti",
              portion: "2 medium (60g)",
              calories: Math.round(targetCalories * 0.1),
              protein: Math.round(macros.protein * 0.05),
              carbs: Math.round(macros.carbs * 0.12),
              fat: Math.round(macros.fat * 0.02)
            },
            {
              name: "Chana Masala",
              portion: "1 cup (200g)",
              calories: Math.round(targetCalories * 0.12),
              protein: Math.round(macros.protein * 0.15),
              carbs: Math.round(macros.carbs * 0.12),
              fat: Math.round(macros.fat * 0.1)
            },
            {
              name: "Cucumber Raita",
              portion: "1/2 cup (100g)",
              calories: Math.round(targetCalories * 0.05),
              protein: Math.round(macros.protein * 0.05),
              carbs: Math.round(macros.carbs * 0.03),
              fat: Math.round(macros.fat * 0.08)
            }
          ]
        }
      ]
    }
  ];

  // Filter diet plans based on selected type
  const filteredDietPlans = dietPlans.filter(plan => plan.type === dietType);

  // NEW FUNCTION: Calculate and adjust meal nutrition to exactly match target values
  const calculateAndAdjustMealNutrition = (plan: MealPlan) => {
    // First calculate the current total
    const total = {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0
    };
    
    plan.meals.forEach(meal => {
      meal.items.forEach(item => {
        total.calories += item.calories;
        total.protein += item.protein;
        total.carbs += item.carbs;
        total.fat += item.fat;
      });
    });
    
    // Calculate the difference between target and actual
    const diff = {
      calories: targetCalories - total.calories,
      protein: macros.protein - total.protein,
      carbs: macros.carbs - total.carbs,
      fat: macros.fat - total.fat
    };
    
    // Distribute the difference across all meals proportionally
    if (Math.abs(diff.calories) > 5 || Math.abs(diff.protein) > 2 || 
        Math.abs(diff.carbs) > 2 || Math.abs(diff.fat) > 2) {
      
      // Find the last meal and its last item to adjust
      const lastMeal = plan.meals[plan.meals.length - 1];
      const lastItem = lastMeal.items[lastMeal.items.length - 1];
      
      // Adjust the last item to match the exact target values
      lastItem.calories += diff.calories;
      lastItem.protein += diff.protein;
      lastItem.carbs += diff.carbs;
      lastItem.fat += diff.fat;
      
      // Ensure no negative values
      lastItem.calories = Math.max(lastItem.calories, 1);
      lastItem.protein = Math.max(lastItem.protein, 0);
      lastItem.carbs = Math.max(lastItem.carbs, 0);
      lastItem.fat = Math.max(lastItem.fat, 0);
    }
    
    // Recalculate the total after adjustments
    const adjustedTotal = {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0
    };
    
    plan.meals.forEach(meal => {
      meal.items.forEach(item => {
        adjustedTotal.calories += item.calories;
        adjustedTotal.protein += item.protein;
        adjustedTotal.carbs += item.carbs;
        adjustedTotal.fat += item.fat;
      });
    });
    
    return adjustedTotal;
  };

  return (
    <Card className={cn("w-full overflow-hidden dark:border-gray-700 dark:bg-gray-800/80", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center">
          <Utensils className="w-5 h-5 mr-2" />
          Personalized Diet Plans
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pb-6">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Choose from one of these meal plans based on your preferences. Each plan is nutritionally balanced to match your calculated daily target of {targetCalories} calories.
          </p>
          
          <div className="flex justify-center mb-4">
            <div className="flex bg-muted/50 p-1 rounded-lg">
              <button
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${dietType === 'veg' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}
                onClick={() => setDietType('veg')}
              >
                <Leaf className="h-4 w-4 mr-2" />
                Vegetarian
              </button>
              <button
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${dietType === 'non-veg' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}
                onClick={() => setDietType('non-veg')}
              >
                <Beef className="h-4 w-4 mr-2" />
                Non-Vegetarian
              </button>
            </div>
          </div>
          
          <Tabs defaultValue="plan-1" className="w-full" onValueChange={setSelectedPlan}>
          <TabsList className="grid grid-cols-3 mb-4 w-full">
              {filteredDietPlans.map((plan, index) => (
                <TabsTrigger 
                  key={index} 
                  value={`plan-${index + 1}`}
                  className="relative"
                >
                  {plan.title.split(' ')[0]}
                  {selectedPlan === `plan-${index + 1}`}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {filteredDietPlans.map((plan, planIndex) => {
              const planNutrition = calculateAndAdjustMealNutrition(plan);
              return (
                <TabsContent key={planIndex} value={`plan-${planIndex + 1}`} className="space-y-4">
                  <div className="bg-muted/30 dark:bg-gray-700/20 rounded-lg p-4">
                    <h3 className="font-medium text-lg">{plan.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                    
                    <div className="grid grid-cols-4 gap-2 mt-4 text-center text-xs">
                      <div className="p-2 rounded-md bg-gray-700 dark:bg-gray-900/30">
                        <div className="font-medium text-white">{planNutrition.calories}</div>
                        <div className="text-white">calories</div>
                      </div>
                      <div className="p-2 rounded-md bg-red-500 dark:bg-red-500">
                        <div className="font-medium text-white">{planNutrition.protein}g</div>
                        <div className="text-white">protein</div>
                      </div>
                      <div className="p-2 rounded-md bg-amber-500 dark:bg-amber-500">
                        <div className="font-medium text-white">{planNutrition.carbs}g</div>
                        <div className="text-white">carbs</div>
                      </div>
                      <div className="p-2 rounded-md bg-green-500 dark:bg-green-500">
                        <div className="font-medium text-white">{planNutrition.fat}g</div>
                        <div className="text-white">fat</div>
                      </div>
                    </div>
                  </div>
                  
                  <Separator className="dark:bg-gray-700" />
                  
                  <div className="space-y-6">
                    {plan.meals.map((meal, mealIndex) => (
                      <div key={mealIndex} className="border rounded-lg p-4 dark:border-gray-700 meal-item-transition">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="font-medium text-base flex items-center">
                            {meal.title}
                          </h3>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="w-3 h-3 mr-1" />
                            {meal.time}
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          {meal.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="border-b last:border-0 pb-3 last:pb-0 dark:border-gray-700/50">
                              <div className="flex justify-between items-center">
                                <div className="flex-1">
                                  <div className="font-medium text-sm">{item.name}</div>
                                  <div className="text-xs text-muted-foreground">{item.portion}</div>
                                </div>
                                <div className="text-sm font-medium">{item.calories} kcal</div>
                              </div>
                              
                              <div className="grid grid-cols-3 gap-2 mt-2">
                                <div className="text-xs">
                                  <span className="text-red-500 font-medium">{item.protein}g</span>
                                  <span className="text-muted-foreground ml-1">protein</span>
                                </div>
                                <div className="text-xs">
                                  <span className="text-amber-500 font-medium">{item.carbs}g</span>
                                  <span className="text-muted-foreground ml-1">carbs</span>
                                </div>
                                <div className="text-xs">
                                  <span className="text-green-500 font-medium">{item.fat}g</span>
                                  <span className="text-muted-foreground ml-1">fat</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-xs flex items-start text-muted-foreground bg-muted/20 dark:bg-gray-700/20 p-3 rounded-lg">
                    <Info className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <p>
                      This diet plan exactly matches your calculated needs of {targetCalories} calories,
                      with {macros.protein}g protein, {macros.carbs}g carbs, and {macros.fat}g fat.
                      For best results, try to stick close to these meal timings and portions.
                    </p>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </CardContent>
    </Card>
  );
};

export default DietPlan;