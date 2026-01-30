import Button from '../../ui/Button/Button';
import styles from './SummaryContent.module.css';

const SummaryContent = () => {
  return (
    <div className={styles.root}>
      <div className={styles.planSummaryItem}>
        <div className={styles.planSummaryItemContent}>
          <span>Arcade (Monthly)</span>
          <Button variant="tertiary">Change</Button>
        </div>
        <span>$9/mo</span>
      </div>
      <div className={styles.addOnSummaryItem}>
        <span>Online service</span>
        <span>+$1/mo</span>
      </div>
      <div className={styles.addOnSummaryItem}>
        <span>Larger storage</span>
        <span>+$2/mo</span>
      </div>
    </div>
  );
};

export default SummaryContent;
