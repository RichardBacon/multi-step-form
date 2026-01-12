import styles from './PersonalInfoForm.module.css';

const PersonalInfoForm = () => {
  return (
    <form className={styles.root}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <input
          className={styles.input}
          type="text"
          id="name"
          name="name"
          placeholder="Name"
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">
          Email Address
        </label>
        <input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
        />
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="phone">
          Phone Number
        </label>
        <input
          className={styles.input}
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone Number"
        />
      </div>
    </form>
  );
};

export default PersonalInfoForm;
