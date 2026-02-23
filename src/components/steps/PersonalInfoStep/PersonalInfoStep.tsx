import { type Dispatch, type SetStateAction } from 'react';
import { type PersonalInfo } from '../../../types';
import PersonalInfoForm from '../../shared/PersonalInfoForm/PersonalInfoForm';
import StepHeader from '../../shared/StepHeader/StepHeader';

interface PersonalInfoStepProps {
  personalInfo: PersonalInfo;
  setPersonalInfo: Dispatch<SetStateAction<PersonalInfo>>;
}

const PersonalInfoStep = ({
  personalInfo,
  setPersonalInfo,
}: PersonalInfoStepProps) => {
  return (
    <>
      <StepHeader
        heading="Personal Info"
        subheading="Please provide your name, email address, and phone number."
      />
      <PersonalInfoForm
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />
    </>
  );
};

export default PersonalInfoStep;
