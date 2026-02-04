import FormField from '../FormField/FormField';
import styles from './PersonalInfoForm.module.css';

const PersonalInfoForm = () => {
  return (
    <form className={styles.root}>
      <FormField
        label="Name"
        type="text"
        name="name"
        placeholder="e.g. John Doe"
      />
      <FormField
        label="Email Address"
        type="email"
        name="email"
        placeholder="e.g. john.doe@example.com"
      />
      <FormField
        label="Phone Number"
        type="tel"
        name="phone"
        placeholder="e.g. +44 123 456 7890"
      />
    </form>
  );
};

export default PersonalInfoForm;
