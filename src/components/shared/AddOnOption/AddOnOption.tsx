import { type AddOnId } from '../../../types';
import styles from './AddOnOption.module.css';

interface AddOnOptionProps {
  id: AddOnId;
  title: string;
  description: string;
  price: string;
  checked?: boolean;
  onChange?: (id: AddOnId) => void;
}

const AddOnOption = ({
  id,
  title,
  description,
  price,
  checked = false,
  onChange,
}: AddOnOptionProps) => {
  return (
    <label className={styles.root}>
      <input
        type="checkbox"
        className={styles.checkbox}
        value={id}
        checked={checked}
        onChange={() => onChange?.(id)}
      />
      <div className={styles.text}>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
      </div>
      <span className={styles.price}>{price}</span>
    </label>
  );
};

export default AddOnOption;
