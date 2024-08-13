import styles from '../styles/Step2.module.scss';

export default function Step2() {
  return (
    <div className={styles.step}>
      <h2>Select Your Plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <form>
        <label>
          <input type='radio' name='plan' value='arcade' />
          <span>Arcade - $9/mo</span>
        </label>
        <label>
          <input type='radio' name='plan' value='advanced' />
          <span>Advanced - $12/mo</span>
        </label>
        <label>
          <input type='radio' name='plan' value='pro' />
          <span>Pro - $15/mo</span>
        </label>

        <div className={styles.billingToggle}>
          <span>Monthly</span>
          <input type='checkbox' name='billing' />
          <span>Yearly</span>
        </div>
      </form>
    </div>
  );
}
