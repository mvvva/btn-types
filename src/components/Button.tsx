import React from 'react';

type ButtonProps = {
  color?: 'default' | 'blue' | 'gray' | 'dark' | 'light' | 'success' | 'failure' | 'warning' | 'purple';
  pill?: boolean;
  outline?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  children: React.ReactNode;
};

const borderClasses = {
  default: 'border-[#0e7490]',
  blue: 'border-[#1d4ed8]',
  gray: 'border-[#d1d5db]',
  dark: 'border-[#1f2937]',
  light: 'border-[#d1d5db]',
  success: 'border-[#15803d]',
  failure: 'border-[#b91c1c]',
  warning: 'border-[#facc15]',
  purple: 'border-[#7e22ce]',
};

const colorClasses = {
  default: 'bg-[#0e7490] text-white',
  blue: 'bg-[#1d4ed8] text-white',
  gray: 'bg-white text-[#111827]',
  dark: 'bg-[#1f2937] text-white',
  light: 'bg-white text-[#111827]',
  success: 'bg-[#15803d] text-white',
  failure: 'bg-[#b91c1c] text-white',
  warning: 'bg-[#facc15] text-white',
  purple: 'bg-[#7e22ce] text-white',
};

const sizeClasses = {
  xs: 'px-2 py-1 text-xs',
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-2.5 text-lg',
  xl: 'px-6 py-3 text-xl',
};

const Button: React.FC<ButtonProps> = ({
  color = 'default',
  pill = false,
  outline = false,
  size = 'md',
  disabled = false,
  children,
}) => {
  const baseClasses = `${colorClasses[color]} ${sizeClasses[size]} ${
    pill ? 'rounded-full' : 'rounded-md'
  } font-medium focus:outline-none transition duration-150 ease-in-out`;

  const outlineClasses = outline
    ? `border-2 ${borderClasses[color]} bg-transparent ${color === 'default' ? 'text-[#0e7490]' : `text-[#1d4ed8]`}`
    : '';

  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'hover:opacity-80';

  return (
    <button
      className={`${baseClasses} ${outlineClasses} ${disabledClasses}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
