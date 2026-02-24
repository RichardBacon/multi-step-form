import { type ChangeEvent, type HTMLInputTypeAttribute } from 'react';
import styles from './FormField.module.css';

interface FormFieldProps {
  label: string;
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder?: string;
  value?: string;
  error?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormField = ({
  label,
  type,
  name,
  placeholder,
  value,
  error,
  onChange,
}: FormFieldProps) => {
  const errorId = `${name}-error`;
  const hasError = Boolean(error);

  return (
    <div className={styles.root}>
      <div className={styles.labelRow}>
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
        {hasError && (
          <span id={errorId} className={styles.error} aria-live="polite">
            {error}
          </span>
        )}
      </div>
      <input
        className={`${styles.input} ${hasError ? styles.inputError : ''}`}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-invalid={hasError}
        aria-describedby={hasError ? errorId : undefined}
      />
    </div>
  );
};

export default FormField;
