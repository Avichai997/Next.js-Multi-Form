import { Checkbox, FormControlLabel } from '@mui/material';

interface AddOnControlProps {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

export function AddOnControl({
  label,
  checked,
  onChange,
  name,
}: AddOnControlProps) {
  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={onChange} name={name} />}
      label={label}
    />
  );
}
