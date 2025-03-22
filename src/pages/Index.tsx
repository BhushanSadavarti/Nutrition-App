import React from 'react';
import CalorieCalculator from '@/components/CalorieCalculator';
import { useTheme } from '@/components/ThemeProvider';

const Index = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen bg-gradient-to-b ${theme === 'dark' ? 'from-gray-900 to-gray-800' : 'from-white to-blue-50'} flex flex-col transition-colors duration-200`}>
      <header className="w-full max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto animate-slide-down">
          <div className={`inline-block px-3 py-1 ${theme === 'dark' ? 'bg-primary/20 text-white' : 'bg-primary/10 text-primary'} text-sm font-medium rounded-full`}>
          Personalized  Nutrition Guide
          </div>
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Your Perfect <span className="text-primary">Indian</span> Diet
          </h1>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Discover your ideal calorie intake and get personalized Indian food suggestions 
            that align with your nutritional goals.
          </p>
        </div>
      </header>

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-4 pb-20">
        <div className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'card-container'} p-6 sm:p-8 animate-slide-up rounded-xl border shadow-sm`}>
          <CalorieCalculator />
        </div>
      </main>

      <footer className={`py-6 border-t ${theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            Created with ♥ for health and wellness. Always consult with a healthcare provider
            before making significant changes to your diet.
          </p>       
        </div>
      </footer>
    </div>
  );
};

export default Index;