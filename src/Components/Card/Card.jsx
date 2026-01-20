import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  height = 'auto',
  hover = true 
}) => {
  const baseClasses = 'rounded-2xl shadow-lg overflow-hidden transition-all duration-300';
  
  const variants = {
    default: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
    gradient: 'bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700',
    transparent: 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30',
    primary: 'bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-700'
  };

  const heightClasses = {
    auto: 'h-auto',
    fixed: 'h-96', // Fixed height for equal card heights
    tall: 'h-[28rem]',
    short: 'h-64'
  };

  const hoverClasses = hover 
    ? 'hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/10 dark:hover:shadow-sky-400/20' 
    : '';

  const combinedClasses = `
    ${baseClasses} 
    ${variants[variant]} 
    ${heightClasses[height]} 
    ${hoverClasses} 
    ${className}
  `.trim();

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};

// Specialized card components for consistent usage
export const IssueCardContainer = ({ children, className = '' }) => (
  <Card 
    height="fixed" 
    variant="default" 
    className={`flex flex-col ${className}`}
  >
    {children}
  </Card>
);

export const DashboardCard = ({ children, className = '' }) => (
  <Card 
    height="auto" 
    variant="gradient" 
    className={`p-6 ${className}`}
  >
    {children}
  </Card>
);

export const FormCard = ({ children, className = '' }) => (
  <Card 
    height="auto" 
    variant="transparent" 
    hover={false}
    className={`p-6 sm:p-8 ${className}`}
  >
    {children}
  </Card>
);

export const CategoryCard = ({ children, className = '' }) => (
  <Card 
    height="auto" 
    variant="default" 
    className={`p-6 flex flex-col items-center text-center ${className}`}
  >
    {children}
  </Card>
);

export default Card;