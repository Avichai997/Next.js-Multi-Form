'use client';

import { useAtom } from 'jotai';
import { useFormik } from 'formik';
import { userInfoAtom } from '../atoms/formAtoms';
import styles from '../styles/Step1.module.scss';
import { TextField, Button } from '@mui/material';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

const validationSchema = z.object({
  name: z.string().nonempty('Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().nonempty('Phone number is required'),
});

export default function Step1() {
  const [userInfo, setUserInfo] = useAtom(userInfoAtom);

  const formik = useFormik({
    initialValues: userInfo,
    validationSchema: toFormikValidationSchema(validationSchema),
    onSubmit: (values) => {
      setUserInfo(values);
      // Move to next step
    },
  });

  return (
    <div className={styles.step}>
      <h2>Your Info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          label='Name'
          id='name'
          name='name'
          placeholder='e.g. Stephen King'
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          fullWidth
        />
        <TextField
          label='Email Address'
          id='email'
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          fullWidth
        />
        <TextField
          label='Phone Number'
          id='phone'
          name='phone'
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
          fullWidth
        />
        <Button type='submit' variant='contained' color='primary'>
          Next Step
        </Button>
      </form>
    </div>
  );
}
