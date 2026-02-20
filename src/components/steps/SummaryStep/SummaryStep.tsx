import StepActions from '../../shared/StepActions/StepActions';
import StepHeader from '../../shared/StepHeader/StepHeader';
import SummaryContent from '../../shared/SummaryContent/SummaryContent';
import Button from '../../shared/Button/Button';
import TotalRow from '../../shared/TotalRow/TotalRow';
import styles from './SummaryStep.module.css';

const SummaryStep = () => {
  return (
    <div className={styles.root}>
      <StepHeader
        heading="Finishing up"
        subheading="Double check everything looks OK before confirming."
      />
      <SummaryContent />
      <TotalRow />
      <StepActions>
        <Button variant="secondary">Go Back</Button>
        <Button variant="primary">Confirm</Button>
      </StepActions>
    </div>
  );
};

export default SummaryStep;
