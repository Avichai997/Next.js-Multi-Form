'use client';

import { stepAtom } from './atoms/formAtoms';
import styles from './styles/page.module.scss';
import Sidebar from './components/Sidebar';
import StepTitle from './components/StepTitle/StepTitle';
import Step1 from './form/Step1';
import Step2 from './form/Step2';
import Step3 from './form/Step3';
import Step4 from './form/Step4';
import Summary from './form/Summary';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { useAtomValue } from 'jotai';

const renderStep = {
  1: {
    title: 'Personal info',
    subtitle: 'Please provide your name, email address, and phone number.',
    element: <Step1 />,
  },
  2: {
    title: 'Select Your Plan',
    subtitle: 'You have the option of monthly or yearly billing.',
    element: <Step2 />,
  },
  3: {
    title: 'Pick Add-Ons',
    subtitle: 'Add-ons help enhance your gaming experience.',
    element: <Step3 />,
  },
  4: {
    title: 'Finishing Up',
    subtitle: 'Double-check everything looks OK before confirming.',
    element: <Step4 />,
  },
  5: {
    title: 'Summary',
    subtitle: 'Double-check everything looks OK before confirming.',
    element: <Summary />,
  },
};

export default function Home() {
  const step = useAtomValue(stepAtom);

  const { element, title, subtitle } =
    renderStep[step as keyof typeof renderStep];

  return (
    <div className={styles.container}>
      <Sidebar currentStep={step} />

      <div className={styles.content}>
        <StepTitle title={title} subtitle={subtitle} />
        {element}
        <NavigationBar />
      </div>
    </div>
  );
}
