import StepIndicator from '../StepIndicator/StepIndicator';
import styles from './StepProgress.module.css';

const steps = [
  {
    id: 1,
    title: 'Your Info',
  },
  {
    id: 2,
    title: 'Select Plan',
  },
  {
    id: 3,
    title: 'Add ons',
  },
  {
    id: 4,
    title: 'Summary',
  },
];

const StepProgress = ({ currentStep = 1 }) => {
  return (
    <div className={styles.root}>
      {steps.map((step) => (
        <StepIndicator
          key={step.id}
          step={step.id}
          title={step.title}
          active={step.id === currentStep}
        />
      ))}
    </div>
  );
};

export default StepProgress;
