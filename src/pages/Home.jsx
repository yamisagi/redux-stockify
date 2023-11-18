import React from 'react';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import KPICards from '../components/cards/KPICards';
import Charts from '../components/Charts';

const Home = ({ loading }) => {
  return (
    <>
      {loading ? (
        <CircularProgress
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ) : (
        <div
        // style={{
        //   display: 'flex',
        //   flexDirection: 'column',
        //   alignItems: 'center',
        //   justifyContent: 'center',
        // }}
        >
          <Typography
            variant='h5'
            sx={{
              mb: 2,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Dashboard
          </Typography>
          <KPICards />
          <Charts />
        </div>
      )}
    </>
  );
};

export default Home;
