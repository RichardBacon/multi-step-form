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

interface StepProgressProps {
  currentStep: number;
}

const StepProgress = ({ currentStep }: StepProgressProps) => {
  const activeStep = Math.min(currentStep, 4);

  return (
    <nav aria-label="Form progress">
      <ol className={styles.root}>
        {steps.map((step) => (
          <li key={step.id}>
            <StepIndicator
              step={step.id}
              title={step.title}
              active={step.id === activeStep}
              completed={step.id < activeStep}
            />
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default StepProgress;
