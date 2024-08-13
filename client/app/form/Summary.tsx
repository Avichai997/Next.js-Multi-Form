import styles from '../styles/Summary.module.scss';

export default function Summary() {
  return (
    <div className={styles.summary}>
      <h2>Thank You!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
