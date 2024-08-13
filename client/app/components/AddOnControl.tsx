import { Checkbox, FormControlLabel } from '@mui/material';
import styles from '../styles/Step3.module.scss';

interface AddOnControlProps {
  label: string;
  description: string;
  price: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

export function AddOnControl({
  label,
  description,
  price,
  checked,
  onChange,
  name,
}: AddOnControlProps) {
  return (
    <div
      className={`${styles['addon-control']} ${checked ? styles.selected : ''}`}
    >
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={onChange} name={name} />}
        label={
          <div className={styles['addon-info']}>
            <span className={styles['addon-label']}>{label}</span>
            <span className={styles['addon-description']}>{description}</span>
          </div>
        }
      />
      <span className={styles['addon-price']}>{price}</span>
    </div>
  );
}
