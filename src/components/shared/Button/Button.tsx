import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
}
const Button = ({ children, variant = 'primary', onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(styles.root, styles[variant])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
