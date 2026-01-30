import StepHeader from '../../forms/StepHeader/StepHeader';
import styles from './ThankYouStep.module.css';

const ThankYouStep = () => {
  return (
    <div className={styles.root}>
      <img src="/assets/images/icon-thank-you.svg" alt="Thank you" />
      <StepHeader
        heading="Thank you!"
        subheading="Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com."
      />
    </div>
  );
};

export default ThankYouStep;
