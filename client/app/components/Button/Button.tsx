import React from 'react';
import { Button as MuiButton } from '@mui/material';
import styles from './Button.module.scss';

const Button = () => {
  return (
    <MuiButton
      className={styles.btn}
      type='submit'
      variant='contained'
      color='primary'
    >
      Next Step
    </MuiButton>
  );
};

export default Button;
