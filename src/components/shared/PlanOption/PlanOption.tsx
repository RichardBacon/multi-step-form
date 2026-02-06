import { clsx } from 'clsx';
import styles from './PlanOption.module.css';

interface PlanOptionProps {
  iconImageSrc: string;
  title: string;
  price: string;
  selected?: boolean;
}

const PlanOption = ({
  iconImageSrc,
  title,
  price,
  selected = false,
}: PlanOptionProps) => {
  return (
    <div className={clsx(styles.root, selected && styles.selected)}>
      <img className={styles.icon} src={iconImageSrc} alt="" />
      <div className={styles.text}>
        <span className={styles.title}>{title}</span>
        <span className={styles.price}>{price}</span>
      </div>
    </div>
  );
};

export default PlanOption;
