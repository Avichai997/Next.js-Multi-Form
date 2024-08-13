import React from 'react';
import styles from './NavigationBar.module.scss';
import { Button } from '@mui/material';
import { useAtom } from 'jotai';
import { stepAtom } from '@/app/atoms/formAtoms';

const NavigationBar = () => {
  const [step, setStep] = useAtom(stepAtom);

  return (
    <div className={styles.navigation}>
      {step > 1 && (
        <Button
          variant='text'
          style={{ color: 'var(--cool-gray)' }}
          onClick={() => setStep(step - 1)}
        >
          Go Back
        </Button>
      )}
      {step < 5 && (
        <Button
          className={styles.btn}
          type='submit'
          variant='contained'
          color='primary'
          style={{
            marginLeft: 'auto',
          }}
          onClick={() => setStep(step + 1)}
        >
          Next Step
        </Button>
      )}
    </div>
  );
};

export default NavigationBar;
