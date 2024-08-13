import React from 'react';
import styles from './StepTitle.module.scss';

type StepTitleProps = {
  title: string;
  subtitle: string;
};

const StepTitle = ({ title, subtitle }: StepTitleProps) => {
  return (
    <div className={styles.titles}>
      <p className={styles.mainTitle}>{title}</p>
      <p className={styles.subTitle}>{subtitle}</p>
    </div>
  );
};

export default StepTitle;
