import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Form } from 'formik';

const RegisterForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) => {
  return (
    <>
      <Form>
        <Box
          component='form'
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <TextField
            label='Kullanıcı Adı'
            name='username'
            id='userName'
            type='text'
            variant='outlined'
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.username && Boolean(errors.username)}
            helperText={touched.username && errors.username}
          />
          <TextField
            label='İsim'
            name='first_name'
            id='firstName'
            type='text'
            variant='outlined'
            value={values.first_name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.first_name && Boolean(errors.first_name)}
            helperText={touched.first_name && errors.first_name}
          />
          <TextField
            label='Soyisim'
            name='last_name'
            id='last_name'
            type='text'
            variant='outlined'
            value={values.last_name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.last_name && Boolean(errors.last_name)}
            helperText={touched.last_name && errors.last_name}
          />
          <TextField
            label='Email'
            name='email'
            id='email'
            type='email'
            variant='outlined'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            label='Şifre'
            name='password'
            id='password'
            type='password'
            variant='outlined'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
          />
          <Button type='submit' variant='contained' size='large'>
            Kayıt Ol
          </Button>
        </Box>
      </Form>
    </>
  );
};

export default RegisterForm;
