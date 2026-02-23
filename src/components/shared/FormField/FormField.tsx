import { type ChangeEvent, type HTMLInputTypeAttribute } from 'react';
import styles from './FormField.module.css';

interface FormFieldProps {
  label: string;
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormField = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
}: FormFieldProps) => {
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
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormField;
