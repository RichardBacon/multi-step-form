import PersonalInfoForm from '../../forms/PersonalInfoForm/PersonalInfoForm';
import StepHeader from '../../forms/StepHeader/StepHeader';
import styles from './PersonalInfoStep.module.css';

const PersonalInfoStep = () => {
  return (
    <div className={styles.root}>
      <StepHeader />
      <PersonalInfoForm />
    </div>
  );
};

export default PersonalInfoStep;
