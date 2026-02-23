import { type ChangeEvent, type Dispatch, type SetStateAction } from 'react';
import { type PersonalInfo } from '../../../types';
import FormField from '../FormField/FormField';
import styles from './PersonalInfoForm.module.css';

interface PersonalInfoFormProps {
  personalInfo: PersonalInfo;
  setPersonalInfo: Dispatch<SetStateAction<PersonalInfo>>;
}

const PersonalInfoForm = ({
  personalInfo,
  setPersonalInfo,
}: PersonalInfoFormProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPersonalInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form className={styles.root}>
      <FormField
        label="Name"
        type="text"
        name="name"
        placeholder="e.g. John Doe"
        value={personalInfo.name}
        onChange={handleChange}
      />
      <FormField
        label="Email Address"
        type="email"
        name="email"
        placeholder="e.g. john.doe@example.com"
        value={personalInfo.email}
        onChange={handleChange}
      />
      <FormField
        label="Phone Number"
        type="tel"
        name="phone"
        placeholder="e.g. +44 123 456 7890"
        value={personalInfo.phone}
        onChange={handleChange}
      />
    </form>
  );
};

export default PersonalInfoForm;
