'use client';

import styles from '../styles/Sidebar.module.scss';
import sidebarBg from '../../public/images/bg-sidebar-desktop.svg';

interface SidebarProps {
  currentStep: number;
}

const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];

export default function Sidebar({ currentStep }: SidebarProps) {
  return (
    <div
      className={styles.sidebar}
      style={{ backgroundImage: `url(${sidebarBg.src})` }}
    >
      {steps.map((step, index) => (
        <div
          key={index}
          className={`${styles.step} ${
            currentStep === index + 1 ? styles.active : ''
          }`}
        >
          {step}
        </div>
      ))}
    </div>
  );
}
