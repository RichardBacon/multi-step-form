import { type RefObject } from 'react';
import StepHeader from '../../shared/StepHeader/StepHeader';
import styles from './ThankYouStep.module.css';

interface ThankYouStepProps {
  headingRef?: RefObject<HTMLHeadingElement | null>;
}

const ThankYouStep = ({ headingRef }: ThankYouStepProps) => {
  return (
    <div className={styles.root}>
      <img
        className={styles.icon}
        src="/assets/images/icon-thank-you.svg"
        alt="Thank you"
      />
      <StepHeader
        ref={headingRef}
        heading="Thank you!"
        subheading="Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com."
      />
    </div>
  );
};

export default ThankYouStep;
