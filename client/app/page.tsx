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

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      case 5:
        return <Summary />;
      default:
        return <Step1 />;
    }
  };

  return (
    <div className={styles.container}>
      <Sidebar currentStep={step} />
      <div className={styles.content}>
        {renderStep()}
        <div className={styles.navigation}>
          {step > 1 && (
            <Button variant='contained' onClick={() => setStep(step - 1)}>
              Go Back
            </Button>
          )}
          {step < 5 && (
            <Button
              variant='contained'
              color='primary'
              onClick={() => setStep(step + 1)}
            >
              Next Step
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
