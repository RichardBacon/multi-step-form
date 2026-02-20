import Button from '../Button/Button';
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
        <span className={styles.addOnSummaryItemName}>Online service</span>
        <span className={styles.addOnSummaryItemPrice}>+$1/mo</span>
      </div>
      <div className={styles.addOnSummaryItem}>
        <span className={styles.addOnSummaryItemName}>Larger storage</span>
        <span className={styles.addOnSummaryItemPrice}>+$2/mo</span>
      </div>
    </div>
  );
};

export default SummaryContent;
