import PersonalInfoStep from '../../steps/PersonalInfoStep/PersonalInfoStep';
import styles from './StepLayout.module.css';

const StepLayout = () => {
  return (
    <div className={styles.root}>
      <PersonalInfoStep />
    </div>
  );
};

export default StepLayout;
