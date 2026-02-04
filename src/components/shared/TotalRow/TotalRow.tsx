import styles from './TotalRow.module.css';

const TotalRow = () => {
  return (
    <div className={styles.root}>
      <span>Total (per month)</span>
      <span className={styles.total}>$12/mo</span>
    </div>
  );
};

export default TotalRow;
