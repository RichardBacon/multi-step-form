import type { ReactNode } from 'react';
import Button from '../../shared/Button/Button';
import StepActions from '../../shared/StepActions/StepActions';

interface StepProps {
  children: ReactNode;
  showBack?: boolean;
  showNext?: boolean;
  nextLabel?: string;
  onNextStep?: () => void;
  onBackStep?: () => void;
  validateStep?: () => boolean;
}

const Step = ({
  children,
  showBack = false,
  showNext = true,
  nextLabel = 'Next Step',
  onNextStep,
  onBackStep,
  validateStep,
}: StepProps) => {
  const handleNext = () => {
    if (validateStep && !validateStep()) return;
    onNextStep?.();
  };

  return (
    <>
      {children}
      {(showBack || showNext) && (
        <StepActions>
          {showBack && (
            <Button variant="secondary" onClick={onBackStep}>
              Go Back
            </Button>
          )}
          {showNext && (
            <Button variant="primary" onClick={handleNext}>
              {nextLabel}
            </Button>
          )}
        </StepActions>
      )}
    </>
  );
};

export default Step;
