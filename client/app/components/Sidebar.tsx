import React from 'react';
import styles from '../styles/Sidebar.module.scss';
import Image from 'next/image';

interface SidebarProps {
  currentStep: number;
}

const Sidebar: React.FC<SidebarProps> = ({ currentStep }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.step} data-active={currentStep === 1}>
        <span>1</span> Your Info
      </div>
      <div className={styles.step} data-active={currentStep === 2}>
        <span>2</span> Select Plan
      </div>
      <div className={styles.step} data-active={currentStep === 3}>
        <span>3</span> Add-ons
      </div>
      <div className={styles.step} data-active={currentStep === 4}>
        <span>4</span> Summary
      </div>
    </div>
  );
};

export default Sidebar;
