'use client';

import styles from '../styles/Sidebar.module.scss';

interface SidebarProps {
  currentStep: number;
}

export default function Sidebar({ currentStep }: SidebarProps) {
  return (
    <div className={styles.sidebar}>
      <div
        className={`${styles.step} ${currentStep === 1 ? styles.active : ''}`}
      >
        Step 1
      </div>
      <div
        className={`${styles.step} ${currentStep === 2 ? styles.active : ''}`}
      >
        Step 2
      </div>
      <div
        className={`${styles.step} ${currentStep === 3 ? styles.active : ''}`}
      >
        Step 3
      </div>
      <div
        className={`${styles.step} ${currentStep === 4 ? styles.active : ''}`}
      >
        Step 4
      </div>
    </div>
  );
}
