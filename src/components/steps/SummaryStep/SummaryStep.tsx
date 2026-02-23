import StepHeader from '../../shared/StepHeader/StepHeader';
import SummaryContent from '../../shared/SummaryContent/SummaryContent';
import TotalRow from '../../shared/TotalRow/TotalRow';

const SummaryStep = () => {
  return (
    <>
      <StepHeader
        heading="Finishing up"
        subheading="Double check everything looks OK before confirming."
      />
      <SummaryContent />
      <TotalRow />
    </>
  );
};

export default SummaryStep;
