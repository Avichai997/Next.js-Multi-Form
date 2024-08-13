import styles from '../styles/Step4.module.scss';

export default function Step4() {
  return (
    <div className={styles.step}>
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>
      <div className={styles.summary}>
        <div className={styles.planSummary}>
          <h4>Arcade (Monthly)</h4>
          <p>$9/mo</p>
        </div>
        <hr />
        <div className={styles.addonSummary}>
          <p>Online service</p>
          <p>+$1/mo</p>
        </div>
        <div className={styles.addonSummary}>
          <p>Larger storage</p>
          <p>+$2/mo</p>
        </div>
        <div className={styles.addonSummary}>
          <p>Customizable Profile</p>
          <p>+$2/mo</p>
        </div>
      </div>
      <div className={styles.total}>
        <p>Total (per month)</p>
        <p>$14/mo</p>
      </div>
    </div>
  );
}
