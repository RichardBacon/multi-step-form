import { type ChangeEvent, type FormEvent } from 'react';
import { type PersonalInfo } from '../../../types';
import FormField from '../FormField/FormField';
import styles from './PersonalInfoForm.module.css';

interface PersonalInfoFormProps {
  personalInfo: PersonalInfo;
  onPersonalInfoChange: (field: keyof PersonalInfo, value: string) => void;
  errors: Partial<Record<keyof PersonalInfo, string>>;
  onSubmit?: () => void;
}

const PersonalInfoForm = ({
  personalInfo,
  onPersonalInfoChange,
  errors,
  onSubmit,
}: PersonalInfoFormProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name as keyof PersonalInfo;
    if (field in personalInfo) {
      onPersonalInfoChange(field, e.target.value);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.();
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit}>
      <FormField
        label="Name"
        type="text"
        name="name"
        placeholder="e.g. John Doe"
        value={personalInfo.name}
        onChange={handleChange}
        error={errors.name}
      />
      <FormField
        label="Email Address"
        type="email"
        name="email"
        placeholder="e.g. john.doe@example.com"
        value={personalInfo.email}
        onChange={handleChange}
        error={errors.email}
      />
      <FormField
        label="Phone Number"
        type="tel"
        name="phone"
        placeholder="e.g. +44 123 456 7890"
        value={personalInfo.phone}
        onChange={handleChange}
        error={errors.phone}
      />
    </form>
  );
};

export default PersonalInfoForm;
