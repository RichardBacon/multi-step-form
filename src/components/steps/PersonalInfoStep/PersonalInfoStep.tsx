import PersonalInfoForm from '../../forms/PersonalInfoForm/PersonalInfoForm';
import StepActions from '../../forms/StepActions/StepActions';
import StepHeader from '../../forms/StepHeader/StepHeader';
import styles from './PersonalInfoStep.module.css';

const PersonalInfoStep = () => {
  return (
    <div className={styles.root}>
      <StepHeader
        heading="Personal Info"
        subheading="Please provide your name, email address, and phone number."
      />
      <PersonalInfoForm />
      <div className={styles.stepActionsContainer}>
        <StepActions />
      </div>
    </div>
  );
};

export default PersonalInfoStep;
