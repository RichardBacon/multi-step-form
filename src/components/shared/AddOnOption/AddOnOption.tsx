import { clsx } from 'clsx';
import styles from './AddOnOption.module.css';

interface AddOnOptionProps {
  title: string;
  description: string;
  price: string;
  selected?: boolean;
}
const AddOnOption = ({
  title,
  description,
  price,
  selected = false,
}: AddOnOptionProps) => {
  return (
    <div className={clsx(styles.root, selected && styles.selected)}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={selected}
        readOnly
      />
      <div className={styles.text}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
      </div>
      <span className={styles.price}>{price}</span>
    </div>
  );
};

export default AddOnOption;
