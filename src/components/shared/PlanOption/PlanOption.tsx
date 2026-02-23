import styles from './PlanOption.module.css';

interface PlanOptionProps {
  iconImageSrc: string;
  title: string;
  price: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
}

const PlanOption = ({
  iconImageSrc,
  title,
  price,
  name,
  value,
  checked = false,
  onChange,
}: PlanOptionProps) => {
  return (
    <label className={styles.root}>
      <span className={styles.visuallyHidden}>
        {title}, {price}
      </span>
      <input
        className={styles.input}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange?.(value)}
      />
      <img className={styles.icon} src={iconImageSrc} alt="" />
      <div className={styles.text} aria-hidden="true">
        <span className={styles.title}>{title}</span>
        <span className={styles.price}>{price}</span>
      </div>
    </label>
  );
};

export default PlanOption;
