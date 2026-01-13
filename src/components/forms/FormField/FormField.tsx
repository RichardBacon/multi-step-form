import { type HTMLInputTypeAttribute } from 'react';
import styles from './FormField.module.css';

interface FormFieldProps {
  label: string;
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder?: string;
}

const FormField = ({ label, type, name, placeholder }: FormFieldProps) => {
  return (
    <div className={styles.root}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormField;
