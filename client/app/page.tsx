'use client';

import { useAtom } from 'jotai';
import { stepAtom } from './atoms/formAtoms';
import styles from './styles/page.module.scss';
import Sidebar from './components/Sidebar';
import Step1 from './form/Step1';
import Step2 from './form/Step2';
import Step3 from './form/Step3';
import Step4 from './form/Step4';
import Summary from './form/Summary';
import { Button } from '@mui/material';

export default function Home() {
  const [step, setStep] = useAtom(stepAtom);

  const renderStep = {
    1: <Step1 />,
    2: <Step2 />,
    3: <Step3 />,
    4: <Step4 />,
    5: <Summary />,
  };

  return (
    <div className={styles.container}>
      <Sidebar currentStep={step} />
      
      <div className={styles.content}>
        {renderStep[step as keyof typeof renderStep]}

        <div className={styles.navigation}>
          {step > 1 && (
            <Button variant='contained' onClick={() => setStep(step - 1)}>
              Go Back
            </Button>
          )}
          {/* {step < 5 && (
            <Button
              variant='contained'
              color='primary'
              onClick={() => setStep(step + 1)}
            >
              Next Step
            </Button>
          )} */}
        </div>
      </div>
    </div>
  );
}
