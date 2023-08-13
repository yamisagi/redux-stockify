import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Form } from 'formik';

const LoginForm = ({
  handleChange,
  handleBlur,
  values,
  touched,
  errors, //
}) => {
  return (
    <Form>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label='Email'
          name='email'
          id='email'
          type='email'
          variant='outlined'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          error={touched.email && Boolean(errors.email)}
          helperText={errors.email}
        />
        <TextField
          label='Password'
          name='password'
          id='password'
          type='password'
          variant='outlined'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          error={touched.password && Boolean(errors.password)}
          helperText={errors.password}
        />
        <Button
          variant='contained'
          type='submit'
          sx={{
            backgroundColor: 'primary.button',
            color: 'primary.text',
            '&:hover': { backgroundColor: 'primary.buttonHover' },
          }}
        >
          Login
        </Button>
      </Box>
    </Form>
  );
};

export default LoginForm;
