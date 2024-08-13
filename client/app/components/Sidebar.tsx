'use client';

import styles from '../styles/Sidebar.module.scss';

interface SidebarProps {
  currentStep: number;
}

const steps = [
  { number: '1', label: 'YOUR INFO' },
  { number: '2', label: 'SELECT PLAN' },
  { number: '3', label: 'ADD-ONS' },
  { number: '4', label: 'SUMMARY' },
];

export default function Sidebar({ currentStep }: SidebarProps) {
  return (
    <div className={styles.sidebar}>
      {steps.map((step, index) => (
        <div key={index} className={`${styles.step} ${currentStep === index + 1 ? styles.active : ''}`}>
          <div className={`${styles.number} ${currentStep === index + 1 ? styles.active : ''}`}>
            {step.number}
          </div>
          <div className={styles.label}>
            <span>STEP {step.number}</span>
            <span>{step.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
