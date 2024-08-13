'use client';

import { useAtom } from 'jotai';
import { planAtom } from '../atoms/formAtoms';
import styles from '../styles/Step2.module.scss';
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Switch,
  Button,
} from '@mui/material';

export default function Step2() {
  const [plan, setPlan] = useAtom(planAtom);

  const handlePlanChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlan((prev) => ({ ...prev, plan: event.target.value }));
  };

  const handleBillingChange = () => {
    setPlan((prev) => ({
      ...prev,
      billing: prev.billing === 'monthly' ? 'yearly' : 'monthly',
    }));
  };

  return (
    <div className={styles.step}>
      <h2>Select Your Plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <form>
        <RadioGroup name='plan' value={plan.plan} onChange={handlePlanChange}>
          <FormControlLabel
            value='arcade'
            control={<Radio />}
            label='Arcade - $9/mo'
          />
          <FormControlLabel
            value='advanced'
            control={<Radio />}
            label='Advanced - $12/mo'
          />
          <FormControlLabel
            value='pro'
            control={<Radio />}
            label='Pro - $15/mo'
          />
        </RadioGroup>

        <div className={styles.billingToggle}>
          <span>Monthly</span>
          <Switch
            checked={plan.billing === 'yearly'}
            onChange={handleBillingChange}
          />
          <span>Yearly</span>
        </div>

        <Button type='submit' variant='contained' color='primary'>
          Next Step
        </Button>
      </form>
    </div>
  );
}
