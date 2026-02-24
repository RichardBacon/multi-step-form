import { type PersonalInfo } from '../../../types';
import PersonalInfoForm from '../../shared/PersonalInfoForm/PersonalInfoForm';
import StepHeader from '../../shared/StepHeader/StepHeader';

interface PersonalInfoStepProps {
  personalInfo: PersonalInfo;
  onPersonalInfoChange: (field: keyof PersonalInfo, value: string) => void;
}

const PersonalInfoStep = ({
  personalInfo,
  onPersonalInfoChange,
}: PersonalInfoStepProps) => {
  return (
    <>
      <StepHeader
        heading="Personal Info"
        subheading="Please provide your name, email address, and phone number."
      />
      <PersonalInfoForm
        personalInfo={personalInfo}
        onPersonalInfoChange={onPersonalInfoChange}
      />
    </>
  );
};

export default PersonalInfoStep;
