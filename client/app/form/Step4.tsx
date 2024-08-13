'use client';

import { useAtom } from 'jotai';
import { userInfoAtom, planAtom, addOnsAtom } from '../atoms/formAtoms';
import styles from '../styles/Step4.module.scss';
import { Button } from '@mui/material';

export default function Step4() {
  const [userInfo] = useAtom(userInfoAtom);
  const [plan] = useAtom(planAtom);
  const [addOns] = useAtom(addOnsAtom);

  const calculateTotal = () => {
    let total = 0;
    if (plan.plan === 'arcade') total += 9;
    if (plan.plan === 'advanced') total += 12;
    if (plan.plan === 'pro') total += 15;
    if (addOns.onlineService) total += 1;
    if (addOns.largerStorage) total += 2;
    if (addOns.customizableProfile) total += 2;

    if (plan.billing === 'yearly') {
      total *= 12;
    }

    return total;
  };

  return (
    <div className={styles.step}>
      <h2>Finishing Up</h2>
      <p>Double-check everything looks OK before confirming.</p>
      <div className={styles.summary}>
        <p>
          <strong>Name:</strong> {userInfo.name}
        </p>
        <p>
          <strong>Email:</strong> {userInfo.email}
        </p>
        <p>
          <strong>Phone:</strong> {userInfo.phone}
        </p>
        <p>
          <strong>Plan:</strong> {plan.plan} ({plan.billing})
        </p>
        <p>
          <strong>Add-Ons:</strong>
        </p>
        <ul>
          {addOns.onlineService && <li>Online Service (+$1/mo)</li>}
          {addOns.largerStorage && <li>Larger Storage (+$2/mo)</li>}
          {addOns.customizableProfile && <li>Customizable Profile (+$2/mo)</li>}
        </ul>
        <p>
          <strong>Total:</strong> ${calculateTotal()}
        </p>
      </div>
      <Button type='submit' variant='contained' color='primary'>
        Confirm Order
      </Button>
    </div>
  );
}
