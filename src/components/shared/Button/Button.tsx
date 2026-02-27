import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
  disabled?: boolean;
}
const Button = ({
  children,
  variant = 'primary',
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(styles.root, styles[variant])}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
