import PersonalInfoForm from '../../shared/PersonalInfoForm/PersonalInfoForm';
import StepActions from '../../shared/StepActions/StepActions';
import StepHeader from '../../shared/StepHeader/StepHeader';
import Button from '../../shared/Button/Button';

const PersonalInfoStep = () => {
  return (
    <>
      <StepHeader
        heading="Personal Info"
        subheading="Please provide your name, email address, and phone number."
      />
      <PersonalInfoForm />
      <StepActions>
        <Button variant="primary">Next Step</Button>
      </StepActions>
    </>
  );
};

export default PersonalInfoStep;
