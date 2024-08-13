'use client';

import { useAtom } from 'jotai';
import { addOnsAtom } from '../atoms/formAtoms';
import styles from '../styles/Step3.module.scss';
import { FormControlLabel, Checkbox, Button } from '@mui/material';

export default function Step3() {
  const [addOns, setAddOns] = useAtom(addOnsAtom);

  const handleAddOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddOns((prev) => ({
      ...prev,
      [event.target.name]: event.target.checked,
    }));
  };

  return (
    <div className={styles.step}>
      <h2>Pick Add-Ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      <form>
        <FormControlLabel
          control={
            <Checkbox
              checked={addOns.onlineService}
              onChange={handleAddOnChange}
              name='onlineService'
            />
          }
          label='Online Service - Access to multiplayer games (+$1/mo)'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={addOns.largerStorage}
              onChange={handleAddOnChange}
              name='largerStorage'
            />
          }
          label='Larger Storage - Extra 1TB of cloud save (+$2/mo)'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={addOns.customizableProfile}
              onChange={handleAddOnChange}
              name='customizableProfile'
            />
          }
          label='Customizable Profile - Custom theme on your profile (+$2/mo)'
        />

        <Button type='submit' variant='contained' color='primary'>
          Next Step
        </Button>
      </form>
    </div>
  );
}
