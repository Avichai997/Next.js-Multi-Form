'use client';

import { useAtom } from 'jotai';
import { planAtom, addOnsAtom } from '../atoms/formAtoms';
import styles from '../styles/Step4.module.scss';
import Link from 'next/link';

export default function Step4() {
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

  const planPrice = {
    arcade: plan.billing === 'yearly' ? '$90/yr' : '$9/mo',
    advanced: plan.billing === 'yearly' ? '$120/yr' : '$12/mo',
    pro: plan.billing === 'yearly' ? '$150/yr' : '$15/mo',
  };

  const addOnPrices = {
    onlineService: plan.billing === 'yearly' ? '$10/yr' : '$1/mo',
    largerStorage: plan.billing === 'yearly' ? '$20/yr' : '$2/mo',
    customizableProfile: plan.billing === 'yearly' ? '$20/yr' : '$2/mo',
  };

  return (
    <div className={styles.step}>
      <div className={styles.summary}>
        <div className={styles.planDetails}>
          <div>
            <span className={styles.planName}>
              {plan.plan.charAt(0).toUpperCase() + plan.plan.slice(1)} (
              {plan.billing.charAt(0).toUpperCase() + plan.billing.slice(1)})
            </span>
            <Link href='/step2' className={styles.changeLink}>
              Change
            </Link>
          </div>
          <span className={styles.planPrice}>{planPrice[plan.plan]}</span>
        </div>
        <hr />
        <div className={styles.addOns}>
          {addOns.onlineService && (
            <div className={styles.addOnItem}>
              <span>Online Service</span>
              <span>{addOnPrices.onlineService}</span>
            </div>
          )}
          {addOns.largerStorage && (
            <div className={styles.addOnItem}>
              <span>Larger Storage</span>
              <span>{addOnPrices.largerStorage}</span>
            </div>
          )}
          {addOns.customizableProfile && (
            <div className={styles.addOnItem}>
              <span>Customizable Profile</span>
              <span>{addOnPrices.customizableProfile}</span>
            </div>
          )}
        </div>
      </div>

      <div className={styles.total}>
        <span>Total (per {plan.billing === 'yearly' ? 'year' : 'month'})</span>
        <span className={styles.totalPrice}>
          +${calculateTotal()}/{plan.billing === 'yearly' ? 'yr' : 'mo'}
        </span>
      </div>
    </div>
  );
}
