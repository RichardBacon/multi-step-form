import StepActions from '../../forms/StepActions/StepActions';
import StepHeader from '../../forms/StepHeader/StepHeader';
import SummaryContent from '../../forms/SummaryContent/SummaryContent';
import Button from '../../ui/Button/Button';
import styles from './SummaryStep.module.css';

const SummaryStep = () => {
  return (
    <div className={styles.root}>
      <StepHeader
        heading="Finishing up"
        subheading="Double check everything looks OK before confirming."
      />
      <SummaryContent />
      <div className={styles.stepActionsContainer}>
        <StepActions>
          <Button variant="secondary">Go Back</Button>
          <Button variant="primary">Confirm</Button>
        </StepActions>
      </div>
    </div>
  );
};

export default SummaryStep;
