'use client';

import { useAtom, useSetAtom } from 'jotai';
import { useFormik } from 'formik';
import { stepAtom, userInfoAtom } from '../atoms/formAtoms';
import styles from '../styles/Step1.module.scss';
import { TextField, SxProps } from '@mui/material';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { Theme } from '@emotion/react';

const validationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
});

const inputStyle: SxProps<Theme> = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    maxWidth: 550,
  },
  '& .MuiInputBase-input::placeholder': {
    fontWeight: 'bold',
  },
  '& .Mui-error': {
    fontSize: 12,
  },
};

export default function Step1() {
  const [userInfo, setUserInfo] = useAtom(userInfoAtom);
  const setStep = useSetAtom(stepAtom);

  const formik = useFormik({
    initialValues: userInfo,
    validationSchema: toFormikValidationSchema(validationSchema),
    onSubmit: (values) => {
      setUserInfo(values);
    },
  });

  return (
    <div className={styles.step}>
      <p className={styles.mainTitle}>Personal info</p>
      <p>Please provide your name, email address, and phone number.</p>

      <form onSubmit={formik.handleSubmit}>
        <div className={styles.label}>Name</div>
        <TextField
          id='name'
          name='name'
          placeholder='e.g. Stephen King'
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          fullWidth
          sx={inputStyle}
        />

        <div className={styles.label}>Email Address</div>
        <TextField
          id='email'
          name='email'
          placeholder='e.g. stephenking@lorem.com'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          fullWidth
          sx={inputStyle}
        />

        <div className={styles.label}>Phone Number</div>
        <TextField
          id='phone'
          name='phone'
          placeholder='e.g. +1 234 567 890'
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
          fullWidth
          sx={inputStyle}
        />
      </form>
    </div>
  );
}
