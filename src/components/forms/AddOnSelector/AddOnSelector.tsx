import AddOnOption from '../AddOnOption/AddOnOption';
import styles from './AddOnSelector.module.css';

const AddOnSelector = () => {
  return (
    <div className={styles.root}>
      <AddOnOption
        title="Online service"
        description="Access to multiplayer games"
        price="+$1/mo"
        selected
      />
      <AddOnOption
        title="Larger storage"
        description="Extra 1TB of cloud save"
        price="+$2/mo"
        selected
      />
      <AddOnOption
        title="Customizable profile"
        description="Custom theme on your profile"
        price="+$2/mo"
      />
    </div>
  );
};

export default AddOnSelector;
