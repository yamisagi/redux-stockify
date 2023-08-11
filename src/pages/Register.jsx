import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import LockIcon from '@mui/icons-material/Lock';
import image from '../assets/result.svg';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import { registerSchema } from '../constants/validationSchemas';
import TextField from '@mui/material/TextField';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth='lg'>
      <Grid
        container
        justifyContent='center'
        direction='row-reverse'
        rowSpacing={{ sm: 3 }}
        sx={{
          height: '100vh',
          p: 2,
        }}
      >
        <Grid item xs={12}>
          <Typography variant='h3' color='primary' align='center'>
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: 'secondary.light',
              m: 'auto',
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size='30' />
          </Avatar>
          <Typography
            variant='h4'
            align='center'
            mb={2}
            color='secondary.light'
          >
            Kayıt Ol
          </Typography>

          <Formik
            initialValues={{
              username: '',
              first_name: '',
              last_name: '',
              email: '',
              password: '',
            }}
            onSubmit={(values, actions) => {
              console.log(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            validationSchema={registerSchema}
            component={(props) => <RegisterForm {...props} />}
          ></Formik>

          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Link
              style={{
                fontFamily: 'Poppins',
                textDecoration: 'none',
                color: 'secondary.light',
                fontWeight: 'bold',
              }}
              to='/'
            >
              Zaten bir hesabın var mı? Giriş yap
            </Link>
          </Box>
        </Grid>

        <Grid item xs={0} sm={7} md={6}>
          <Container>
            <img src={image} alt='' />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
