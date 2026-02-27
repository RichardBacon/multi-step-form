import { type RefObject } from 'react';
import { type PersonalInfo } from '../../../types';
import PersonalInfoForm from '../../shared/PersonalInfoForm/PersonalInfoForm';
import StepHeader from '../../shared/StepHeader/StepHeader';

interface PersonalInfoStepProps {
  personalInfo: PersonalInfo;
  onPersonalInfoChange: (field: keyof PersonalInfo, value: string) => void;
  errors: Partial<Record<keyof PersonalInfo, string>>;
  headingRef?: RefObject<HTMLHeadingElement>;
  onSubmit?: () => void;
}

const PersonalInfoStep = ({
  personalInfo,
  onPersonalInfoChange,
  errors,
  headingRef,
  onSubmit,
}: PersonalInfoStepProps) => {
  return (
    <>
      <StepHeader
        ref={headingRef}
        heading="Personal Info"
        subheading="Please provide your name, email address, and phone number."
      />
      <PersonalInfoForm
        personalInfo={personalInfo}
        onPersonalInfoChange={onPersonalInfoChange}
        errors={errors}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default PersonalInfoStep;
