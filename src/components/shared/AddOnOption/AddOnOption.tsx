import styles from './AddOnOption.module.css';

interface AddOnOptionProps {
  title: string;
  description: string;
  price: string;
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
}

const AddOnOption = ({
  title,
  description,
  price,
  value,
  checked = false,
  onChange,
}: AddOnOptionProps) => {
  return (
    <label className={styles.root}>
      <input
        type="checkbox"
        className={styles.checkbox}
        value={value}
        checked={checked}
        onChange={() => onChange?.(value)}
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
