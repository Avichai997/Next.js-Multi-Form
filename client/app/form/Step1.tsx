import React from 'react';
import { useFormik } from 'formik';
import { z } from 'zod';
import styles from '../styles/Step1.module.scss';

const schema = z.object({
  name: z.string().min(1, 'Name number is required'),
  email: z.string().email('Invalid email').min(1, 'Email is required'),
  phone: z.string().min(1, 'Phone number is required'),
});

const Step1: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className={styles.step}>
      <h2>Your Info</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          name='name'
          type='text'
          placeholder='e.g. Stephen King'
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name && <p>{formik.errors.name}</p>}

        <label htmlFor='email'>Email Address</label>
        <input
          id='email'
          name='email'
          type='email'
          placeholder='e.g. stephenking@lorem.com'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && <p>{formik.errors.email}</p>}

        <label htmlFor='phone'>Phone Number</label>
        <input
          id='phone'
          name='phone'
          type='tel'
          placeholder='e.g. +1 234 567 890'
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        {formik.errors.phone && <p>{formik.errors.phone}</p>}

        <button type='submit'>Next Step</button>
      </form>
    </div>
  );
};

export default Step1;
