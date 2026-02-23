import PersonalInfoForm from '../../shared/PersonalInfoForm/PersonalInfoForm';
import StepHeader from '../../shared/StepHeader/StepHeader';

const PersonalInfoStep = () => {
  return (
    <>
      <StepHeader
        heading="Personal Info"
        subheading="Please provide your name, email address, and phone number."
      />
      <PersonalInfoForm />
    </>
  );
};

export default PersonalInfoStep;
