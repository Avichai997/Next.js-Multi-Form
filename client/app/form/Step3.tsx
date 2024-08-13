import styles from '../styles/Step3.module.scss';

export default function Step3() {
  return (
    <div className={styles.step}>
      <h2>Pick Add-Ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      <form>
        <label>
          <input type='checkbox' name='addon' value='onlineService' />
          <span>Online service - Access to multiplayer games +$1/mo</span>
        </label>
        <label>
          <input type='checkbox' name='addon' value='largerStorage' />
          <span>Larger storage - Extra 1TB of cloud save +$2/mo</span>
        </label>
        <label>
          <input type='checkbox' name='addon' value='customProfile' />
          <span>
            Customizable Profile - Custom theme on your profile +$2/mo
          </span>
        </label>
      </form>
    </div>
  );
}
