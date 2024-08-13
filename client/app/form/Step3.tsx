'use client';

import { useAtom } from 'jotai';
import { addOnsAtom, planAtom } from '../atoms/formAtoms';
import styles from '../styles/Step3.module.scss';
import { Button } from '@mui/material';
import { AddOnControl } from '../components/AddOnControl';

export default function Step3() {
  const [addOns, setAddOns] = useAtom(addOnsAtom);
  const [plan] = useAtom(planAtom);

  const handleAddOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddOns((prev) => ({
      ...prev,
      [event.target.name]: event.target.checked,
    }));
  };

  const isYearly = plan.billing === 'yearly';

  return (
    <div className={styles.step}>
      <form>
        <AddOnControl
          label='Online Service'
          description='Access to multiplayer games'
          price={isYearly ? '$10/yr' : '$1/mo'}
          checked={addOns.onlineService}
          onChange={handleAddOnChange}
          name='onlineService'
        />
        <AddOnControl
          label='Larger Storage'
          description='Extra 1TB of cloud save'
          price={isYearly ? '$20/yr' : '$2/mo'}
          checked={addOns.largerStorage}
          onChange={handleAddOnChange}
          name='largerStorage'
        />
        <AddOnControl
          label='Customizable Profile'
          description='Custom theme on your profile'
          price={isYearly ? '$20/yr' : '$2/mo'}
          checked={addOns.customizableProfile}
          onChange={handleAddOnChange}
          name='customizableProfile'
        />
      </form>
    </div>
  );
}
