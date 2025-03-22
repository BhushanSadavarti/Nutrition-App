
export interface FoodItem {
  name: string;
  category: 'protein' | 'carbs' | 'fat' | 'mixed' | 'vegetable' | 'fruit' | 'dairy' | 'spice';
  caloriesPer100g: number;
  proteinPer100g: number;
  carbsPer100g: number;
  fatPer100g: number;
  fiberPer100g: number;
  servingSize: number; // in grams
  servingDescription: string;
  imageUrl?: string;
}

// Database of common Indian raw foods with nutritional information
export const indianFoods: FoodItem[] = [
  // Protein sources
  {
    name: 'Moong Dal (Split Green Gram)',
    category: 'protein',
    caloriesPer100g: 347,
    proteinPer100g: 24.5,
    carbsPer100g: 59.9,
    fatPer100g: 1.2,
    fiberPer100g: 16.3,
    servingSize: 30,
    servingDescription: '¼ cup raw',
  },
  {
    name: 'Masoor Dal (Red Lentils)',
    category: 'protein',
    caloriesPer100g: 343,
    proteinPer100g: 25.8,
    carbsPer100g: 59.0,
    fatPer100g: 1.1,
    fiberPer100g: 10.8,
    servingSize: 30,
    servingDescription: '¼ cup raw',
  },
  {
    name: 'Chana Dal (Split Bengal Gram)',
    category: 'protein',
    caloriesPer100g: 360,
    proteinPer100g: 22.5,
    carbsPer100g: 57.8,
    fatPer100g: 5.5,
    fiberPer100g: 13.6,
    servingSize: 30,
    servingDescription: '¼ cup raw',
  },
  {
    name: 'Toor Dal (Split Pigeon Peas)',
    category: 'protein',
    caloriesPer100g: 335,
    proteinPer100g: 22.3,
    carbsPer100g: 57.6,
    fatPer100g: 1.7,
    fiberPer100g: 15.0,
    servingSize: 30,
    servingDescription: '¼ cup raw',
  },
  {
    name: 'Paneer (Indian Cottage Cheese)',
    category: 'protein',
    caloriesPer100g: 265,
    proteinPer100g: 18.3,
    carbsPer100g: 3.4,
    fatPer100g: 20.8,
    fiberPer100g: 0,
    servingSize: 50,
    servingDescription: '¼ cup cubed',
  },
  {
    name: 'Tofu',
    category: 'protein',
    caloriesPer100g: 144,
    proteinPer100g: 17.3,
    carbsPer100g: 3.1,
    fatPer100g: 8.4,
    fiberPer100g: 0.9,
    servingSize: 100,
    servingDescription: '½ cup cubed',
  },
  {
    name: 'Rajma (Kidney Beans)',
    category: 'protein',
    caloriesPer100g: 333,
    proteinPer100g: 23.4,
    carbsPer100g: 60.0,
    fatPer100g: 0.8,
    fiberPer100g: 15.2,
    servingSize: 30,
    servingDescription: '¼ cup raw',
  },
  {
    name: 'Soya Chunks',
    category: 'protein',
    caloriesPer100g: 345,
    proteinPer100g: 52.0,
    carbsPer100g: 33.0,
    fatPer100g: 0.5,
    fiberPer100g: 13.5,
    servingSize: 30,
    servingDescription: '¼ cup dry',
  },
  {
    name: 'Chicken Breast',
    category: 'protein',
    caloriesPer100g: 165,
    proteinPer100g: 31.0,
    carbsPer100g: 0,
    fatPer100g: 3.6,
    fiberPer100g: 0,
    servingSize: 100,
    servingDescription: '1 medium piece',
  },
  {
    name: 'Fish (Rohu)',
    category: 'protein',
    caloriesPer100g: 97,
    proteinPer100g: 19.0,
    carbsPer100g: 0,
    fatPer100g: 1.8,
    fiberPer100g: 0,
    servingSize: 100,
    servingDescription: '1 medium fillet',
  },
  
  // Carb sources
  {
    name: 'Basmati Rice',
    category: 'carbs',
    caloriesPer100g: 356,
    proteinPer100g: 7.5,
    carbsPer100g: 78.2,
    fatPer100g: 0.6,
    fiberPer100g: 0.7,
    servingSize: 50,
    servingDescription: '¼ cup raw',
  },
  {
    name: 'Brown Rice',
    category: 'carbs',
    caloriesPer100g: 362,
    proteinPer100g: 7.9,
    carbsPer100g: 76.2,
    fatPer100g: 2.7,
    fiberPer100g: 3.5,
    servingSize: 50,
    servingDescription: '¼ cup raw',
  },
  {
    name: 'Whole Wheat Atta',
    category: 'carbs',
    caloriesPer100g: 340,
    proteinPer100g: 13.2,
    carbsPer100g: 71.2,
    fatPer100g: 2.5,
    fiberPer100g: 10.7,
    servingSize: 30,
    servingDescription: '¼ cup',
  },
  {
    name: 'Jowar (Sorghum)',
    category: 'carbs',
    caloriesPer100g: 329,
    proteinPer100g: 10.4,
    carbsPer100g: 72.6,
    fatPer100g: 3.1,
    fiberPer100g: 6.7,
    servingSize: 30,
    servingDescription: '¼ cup raw',
  },
  {
    name: 'Bajra (Pearl Millet)',
    category: 'carbs',
    caloriesPer100g: 378,
    proteinPer100g: 11.6,
    carbsPer100g: 67.5,
    fatPer100g: 5.0,
    fiberPer100g: 11.5,
    servingSize: 30,
    servingDescription: '¼ cup raw',
  },
  {
    name: 'Ragi (Finger Millet)',
    category: 'carbs',
    caloriesPer100g: 336,
    proteinPer100g: 7.3,
    carbsPer100g: 72.0,
    fatPer100g: 1.3,
    fiberPer100g: 3.6,
    servingSize: 30,
    servingDescription: '¼ cup raw',
  },
  {
    name: 'Oats',
    category: 'carbs',
    caloriesPer100g: 389,
    proteinPer100g: 16.9,
    carbsPer100g: 66.3,
    fatPer100g: 6.9,
    fiberPer100g: 10.6,
    servingSize: 40,
    servingDescription: '⅓ cup raw',
  },
  {
    name: 'Sweet Potato',
    category: 'carbs',
    caloriesPer100g: 86,
    proteinPer100g: 1.6,
    carbsPer100g: 20.1,
    fatPer100g: 0.1,
    fiberPer100g: 3.0,
    servingSize: 100,
    servingDescription: '1 medium',
  },
  {
    name: 'Quinoa',
    category: 'carbs',
    caloriesPer100g: 368,
    proteinPer100g: 14.1,
    carbsPer100g: 64.2,
    fatPer100g: 6.1,
    fiberPer100g: 7.0,
    servingSize: 30,
    servingDescription: '¼ cup raw',
  },
  
  // Fat sources
  {
    name: 'Mustard Oil',
    category: 'fat',
    caloriesPer100g: 884,
    proteinPer100g: 0,
    carbsPer100g: 0,
    fatPer100g: 100,
    fiberPer100g: 0,
    servingSize: 10,
    servingDescription: '1 tbsp',
  },
  {
    name: 'Coconut Oil',
    category: 'fat',
    caloriesPer100g: 892,
    proteinPer100g: 0,
    carbsPer100g: 0,
    fatPer100g: 100,
    fiberPer100g: 0,
    servingSize: 10,
    servingDescription: '1 tbsp',
  },
  {
    name: 'Ghee (Clarified Butter)',
    category: 'fat',
    caloriesPer100g: 900,
    proteinPer100g: 0,
    carbsPer100g: 0,
    fatPer100g: 100,
    fiberPer100g: 0,
    servingSize: 10,
    servingDescription: '1 tbsp',
  },
  {
    name: 'Flaxseeds',
    category: 'fat',
    caloriesPer100g: 534,
    proteinPer100g: 18.3,
    carbsPer100g: 28.9,
    fatPer100g: 42.2,
    fiberPer100g: 27.3,
    servingSize: 10,
    servingDescription: '1 tbsp',
  },
  {
    name: 'Sesame Seeds',
    category: 'fat',
    caloriesPer100g: 573,
    proteinPer100g: 17.7,
    carbsPer100g: 23.4,
    fatPer100g: 49.7,
    fiberPer100g: 11.8,
    servingSize: 10,
    servingDescription: '1 tbsp',
  },
  {
    name: 'Avocado',
    category: 'fat',
    caloriesPer100g: 160,
    proteinPer100g: 2.0,
    carbsPer100g: 8.5,
    fatPer100g: 14.7,
    fiberPer100g: 6.7,
    servingSize: 50,
    servingDescription: '¼ medium',
  },
  
  // Mixed foods
  {
    name: 'Chickpeas (Kabuli Chana)',
    category: 'mixed',
    caloriesPer100g: 364,
    proteinPer100g: 19.3,
    carbsPer100g: 60.6,
    fatPer100g: 6.0,
    fiberPer100g: 17.4,
    servingSize: 30,
    servingDescription: '¼ cup raw',
  },
  {
    name: 'Black Beans (Kala Chana)',
    category: 'mixed',
    caloriesPer100g: 341,
    proteinPer100g: 21.6,
    carbsPer100g: 62.4,
    fatPer100g: 1.4,
    fiberPer100g: 15.5,
    servingSize: 30,
    servingDescription: '¼ cup raw',
  },
  {
    name: 'Peanuts',
    category: 'mixed',
    caloriesPer100g: 567,
    proteinPer100g: 25.8,
    carbsPer100g: 16.1,
    fatPer100g: 49.2,
    fiberPer100g: 8.5,
    servingSize: 30,
    servingDescription: '¼ cup raw',
  },
  {
    name: 'Almonds',
    category: 'mixed',
    caloriesPer100g: 579,
    proteinPer100g: 21.2,
    carbsPer100g: 21.6,
    fatPer100g: 49.9,
    fiberPer100g: 12.5,
    servingSize: 30,
    servingDescription: '¼ cup raw',
  },
  {
    name: 'Coconut (Fresh)',
    category: 'mixed',
    caloriesPer100g: 354,
    proteinPer100g: 3.3,
    carbsPer100g: 15.2,
    fatPer100g: 33.5,
    fiberPer100g: 9.0,
    servingSize: 30,
    servingDescription: '¼ cup grated',
  },
  {
    name: 'Cashews',
    category: 'mixed',
    caloriesPer100g: 553,
    proteinPer100g: 18.2,
    carbsPer100g: 30.2,
    fatPer100g: 43.8,
    fiberPer100g: 3.3,
    servingSize: 30,
    servingDescription: '¼ cup raw',
  },
  {
    name: 'Makhana (Fox Nuts)',
    category: 'mixed',
    caloriesPer100g: 347,
    proteinPer100g: 9.7,
    carbsPer100g: 76.9,
    fatPer100g: 0.1,
    fiberPer100g: 14.5,
    servingSize: 30,
    servingDescription: '1 cup puffed',
  },
  
  // Vegetables
  {
    name: 'Spinach (Palak)',
    category: 'vegetable',
    caloriesPer100g: 23,
    proteinPer100g: 2.9,
    carbsPer100g: 3.6,
    fatPer100g: 0.4,
    fiberPer100g: 2.2,
    servingSize: 100,
    servingDescription: '2 cups raw',
  },
  {
    name: 'Bitter Gourd (Karela)',
    category: 'vegetable',
    caloriesPer100g: 17,
    proteinPer100g: 1.0,
    carbsPer100g: 3.7,
    fatPer100g: 0.2,
    fiberPer100g: 2.8,
    servingSize: 100,
    servingDescription: '1 medium',
  },
  {
    name: 'Bottle Gourd (Lauki)',
    category: 'vegetable',
    caloriesPer100g: 15,
    proteinPer100g: 0.6,
    carbsPer100g: 3.4,
    fatPer100g: 0.1,
    fiberPer100g: 0.7,
    servingSize: 100,
    servingDescription: '1 cup chopped',
  },
  {
    name: 'Okra (Bhindi)',
    category: 'vegetable',
    caloriesPer100g: 33,
    proteinPer100g: 1.9,
    carbsPer100g: 7.5,
    fatPer100g: 0.1,
    fiberPer100g: 3.2,
    servingSize: 100,
    servingDescription: '10-12 medium pieces',
  },
  {
    name: 'Brinjal (Baingan)',
    category: 'vegetable',
    caloriesPer100g: 25,
    proteinPer100g: 1.0,
    carbsPer100g: 6.0,
    fatPer100g: 0.2,
    fiberPer100g: 3.4,
    servingSize: 100,
    servingDescription: '1 small',
  },
  {
    name: 'Fenugreek Leaves (Methi)',
    category: 'vegetable',
    caloriesPer100g: 49,
    proteinPer100g: 4.4,
    carbsPer100g: 6.0,
    fatPer100g: 0.9,
    fiberPer100g: 3.9,
    servingSize: 50,
    servingDescription: '1 cup chopped',
  },
  
  // Fruits
  {
    name: 'Banana',
    category: 'fruit',
    caloriesPer100g: 89,
    proteinPer100g: 1.1,
    carbsPer100g: 22.8,
    fatPer100g: 0.3,
    fiberPer100g: 2.6,
    servingSize: 118,
    servingDescription: '1 medium banana',
  },
  {
    name: 'Mango',
    category: 'fruit',
    caloriesPer100g: 60,
    proteinPer100g: 0.8,
    carbsPer100g: 15.0,
    fatPer100g: 0.4,
    fiberPer100g: 1.6,
    servingSize: 100,
    servingDescription: '1 cup sliced',
  },
  {
    name: 'Guava',
    category: 'fruit',
    caloriesPer100g: 68,
    proteinPer100g: 2.6,
    carbsPer100g: 14.3,
    fatPer100g: 1.0,
    fiberPer100g: 5.4,
    servingSize: 90,
    servingDescription: '1 medium',
  },
  {
    name: 'Papaya',
    category: 'fruit',
    caloriesPer100g: 43,
    proteinPer100g: 0.5,
    carbsPer100g: 11.0,
    fatPer100g: 0.1,
    fiberPer100g: 1.7,
    servingSize: 140,
    servingDescription: '1 cup cubed',
  },
  
  // Dairy
  {
    name: 'Yogurt (Plain)',
    category: 'dairy',
    caloriesPer100g: 59,
    proteinPer100g: 3.5,
    carbsPer100g: 4.7,
    fatPer100g: 3.3,
    fiberPer100g: 0,
    servingSize: 100,
    servingDescription: '½ cup',
  },
  {
    name: 'Buttermilk (Chaas)',
    category: 'dairy',
    caloriesPer100g: 40,
    proteinPer100g: 3.3,
    carbsPer100g: 4.8,
    fatPer100g: 0.9,
    fiberPer100g: 0,
    servingSize: 200,
    servingDescription: '1 glass',
  },
  
  // Spices
  {
    name: 'Turmeric (Haldi)',
    category: 'spice',
    caloriesPer100g: 312,
    proteinPer100g: 9.7,
    carbsPer100g: 67.1,
    fatPer100g: 3.3,
    fiberPer100g: 22.7,
    servingSize: 5,
    servingDescription: '1 tsp',
  },
  {
    name: 'Cumin Seeds (Jeera)',
    category: 'spice',
    caloriesPer100g: 375,
    proteinPer100g: 17.8,
    carbsPer100g: 44.2,
    fatPer100g: 22.3,
    fiberPer100g: 10.5,
    servingSize: 5,
    servingDescription: '1 tsp',
  }
];

// Create three different meal plans based on dietary preferences
export const createMealPlans = (
  calorieTarget: number,
  macros: { protein: number; carbs: number; fat: number }
): string[] => {
  return [
    "Balanced",
    "High Protein",
    "Plant-Based"
  ];
};

// Generate multiple food plans
export const generateFoodPlans = (
  calorieTarget: number,
  macros: { protein: number; carbs: number; fat: number }
): FoodItem[][] => {
  // Plan 1: Balanced Plan
  const balancedPlan = createBalancedPlan(calorieTarget, macros);
  
  // Plan 2: High Protein Plan
  const highProteinPlan = createHighProteinPlan(calorieTarget, macros);
  
  // Plan 3: Plant-Based Plan
  const plantBasedPlan = createPlantBasedPlan(calorieTarget, macros);
  
  return [balancedPlan, highProteinPlan, plantBasedPlan];
};

// Create a balanced meal plan
const createBalancedPlan = (
  calorieTarget: number,
  macros: { protein: number; carbs: number; fat: number }
): FoodItem[] => {
  const proteinFoods = indianFoods.filter(food => food.category === 'protein')
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);
  
  const carbFoods = indianFoods.filter(food => food.category === 'carbs')
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);
  
  const fatFoods = indianFoods.filter(food => food.category === 'fat')
    .sort(() => 0.5 - Math.random())
    .slice(0, 1);
  
  const mixedFoods = indianFoods.filter(food => food.category === 'mixed')
    .sort(() => 0.5 - Math.random())
    .slice(0, 1);
  
  const vegetables = indianFoods.filter(food => food.category === 'vegetable')
    .sort(() => 0.5 - Math.random())
    .slice(0, 1);
  
  const fruits = indianFoods.filter(food => food.category === 'fruit')
    .sort(() => 0.5 - Math.random())
    .slice(0, 1);
  
  return [...proteinFoods, ...carbFoods, ...fatFoods, ...mixedFoods, ...vegetables, ...fruits];
};

// Create a high protein meal plan
const createHighProteinPlan = (
  calorieTarget: number,
  macros: { protein: number; carbs: number; fat: number }
): FoodItem[] => {
  const proteinFoods = indianFoods.filter(food => food.category === 'protein')
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
  
  const carbFoods = indianFoods.filter(food => food.category === 'carbs')
    .sort(() => 0.5 - Math.random())
    .slice(0, 1);
  
  const fatFoods = indianFoods.filter(food => food.category === 'fat')
    .sort(() => 0.5 - Math.random())
    .slice(0, 1);
  
  const mixedFoods = indianFoods.filter(food => food.category === 'mixed')
    .sort(() => 0.5 - Math.random())
    .slice(0, 1);
  
  const vegetables = indianFoods.filter(food => food.category === 'vegetable')
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);
  
  return [...proteinFoods, ...carbFoods, ...fatFoods, ...mixedFoods, ...vegetables];
};

// Create a plant-based meal plan
const createPlantBasedPlan = (
  calorieTarget: number,
  macros: { protein: number; carbs: number; fat: number }
): FoodItem[] => {
  const plantProteinFoods = indianFoods.filter(food => 
    food.category === 'protein' && 
    !food.name.includes('Chicken') && 
    !food.name.includes('Fish'))
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);
  
  const carbFoods = indianFoods.filter(food => food.category === 'carbs')
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);
  
  const fatFoods = indianFoods.filter(food => food.category === 'fat')
    .sort(() => 0.5 - Math.random())
    .slice(0, 1);
  
  const mixedFoods = indianFoods.filter(food => food.category === 'mixed')
    .sort(() => 0.5 - Math.random())
    .slice(0, 1);
  
  const vegetables = indianFoods.filter(food => food.category === 'vegetable')
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);
  
  const fruits = indianFoods.filter(food => food.category === 'fruit')
    .sort(() => 0.5 - Math.random())
    .slice(0, 1);
  
  return [...plantProteinFoods, ...carbFoods, ...fatFoods, ...mixedFoods, ...vegetables, ...fruits];
};

// Recommend foods based on target macros
export const recommendFoods = (
  calorieTarget: number,
  macros: { protein: number; carbs: number; fat: number }
): FoodItem[][] => {
  return generateFoodPlans(calorieTarget, macros);
};

// Calculate serving size to meet calorie target for multiple plans
export const calculateServingSizes = (
  foodPlans: FoodItem[][],
  calorieTarget: number
): { food: FoodItem; servings: number; calories: number }[][] => {
  return foodPlans.map(foods => {
    const totalFoods = foods.length;
    const caloriesPerFood = calorieTarget / totalFoods;
    
    return foods.map(food => {
      const caloriesPer1g = food.caloriesPer100g / 100;
      const idealGrams = Math.round(caloriesPerFood / caloriesPer1g);
      const servings = Math.round(idealGrams / food.servingSize * 10) / 10;
      const calories = Math.round(servings * food.servingSize * caloriesPer1g);
      
      return {
        food,
        servings,
        calories
      };
    });
  });
};
