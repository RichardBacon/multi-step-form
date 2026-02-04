import PersonalInfoForm from '../../shared/PersonalInfoForm/PersonalInfoForm';
import StepActions from '../../shared/StepActions/StepActions';
import StepHeader from '../../shared/StepHeader/StepHeader';
import Button from '../../shared/Button/Button';
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
        <StepActions>
          <Button variant="primary">Next Step</Button>
        </StepActions>
      </div>
    </div>
  );
};

export default PersonalInfoStep;
