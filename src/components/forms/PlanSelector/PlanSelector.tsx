import styles from './PlanSelector.module.css';
import PlanOption from '../PlanOption/PlanOption';

const PlanSelector = () => {
  return (
    <div className={styles.root}>
      <PlanOption
        iconImageSrc="/assets/images/icon-arcade.svg"
        title="Arcade"
        price="$9/mo"
        selected
      />
      <PlanOption
        iconImageSrc="/assets/images/icon-advanced.svg"
        title="Advanced"
        price="$12/mo"
      />
      <PlanOption
        iconImageSrc="/assets/images/icon-pro.svg"
        title="Pro"
        price="$15/mo"
      />
    </div>
  );
};

export default PlanSelector;
