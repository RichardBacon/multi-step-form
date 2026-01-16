import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}
const Button = ({ children, variant = 'primary' }: ButtonProps) => {
  return (
    <button className={clsx(styles.root, styles[variant])}>{children}</button>
  );
};

export default Button;
