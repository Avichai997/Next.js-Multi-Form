'use client';

import { useAtom } from 'jotai';
import { planAtom, PlanInfo } from '../atoms/formAtoms';
import styles from '../styles/Step2.module.scss';
import { RadioGroup, FormControlLabel, Radio, Switch } from '@mui/material';
import Image from 'next/image';
import advancedIcon from '../../public/images/icon-advanced.svg';
import arcadeIcon from '../../public/images/icon-arcade.svg';
import proIcon from '../../public/images/icon-pro.svg';

export default function Step2() {
  const [plan, setPlan] = useAtom(planAtom);

  const handlePlanChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlan((prev) => ({
      ...prev,
      plan: event.target.value as PlanInfo['plan'],
    }));
  };

  const handleBillingChange = () => {
    setPlan((prev) => ({
      ...prev,
      billing: prev.billing === 'monthly' ? 'yearly' : 'monthly',
    }));
  };

  const planOptions = [
    {
      value: 'arcade',
      label: 'Arcade',
      priceMonthly: '$9/mo',
      priceYearly: '$90/yr',
      icon: advancedIcon,
    },
    {
      value: 'advanced',
      label: 'Advanced',
      priceMonthly: '$12/mo',
      priceYearly: '$120/yr',
      icon: arcadeIcon,
    },
    {
      value: 'pro',
      label: 'Pro',
      priceMonthly: '$15/mo',
      priceYearly: '$150/yr',
      icon: proIcon,
    },
  ];

  return (
    <div className={styles.step}>
      <h2 className={styles.title}>Select Your Plan</h2>
      <p className={styles.subtitle}>
        You have the option of monthly or yearly billing.
      </p>
      <form>
        <RadioGroup
          name='plan'
          value={plan.plan}
          onChange={handlePlanChange}
          className={styles.planOptions}
        >
          {planOptions.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio className={styles.radioButton} />}
              label={
                <div className={styles.planOption}>
                  <Image
                    src={option.icon}
                    alt={option.label}
                    width={40}
                    height={40}
                  />
                  <div className={styles.info}>
                    <span className={styles.planLabel}>{option.label}</span>
                    <span className={styles.planPrice}>
                      {plan.billing === 'monthly'
                        ? option.priceMonthly
                        : option.priceYearly}
                    </span>

                    {plan.billing === 'yearly' ? (
                      <span className={styles.planLabel}>2 months free</span>
                    ) : null}
                  </div>
                </div>
              }
              className={plan.plan === option.value ? styles.selected : ''}
            />
          ))}
        </RadioGroup>

        <div className={styles.billingToggle}>
          <span>Monthly</span>
          <Switch
            checked={plan.billing === 'yearly'}
            onChange={handleBillingChange}
            color='primary'
          />
          <span>Yearly</span>
        </div>
      </form>
    </div>
  );
}
