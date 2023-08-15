import { Typography, Button } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Firms = () => {
  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    const getFirms = async () => {
      try {
        const { data } = await axios(
          `${import.meta.env.VITE_BASE_URL}/stock/firms/`,
          {
            headers: {
              Authorization: `Token ${token}`,
              // This is the Standard Authorization header for JWT.
              // The token is the one we get when we login the user.
              
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    };
    // TODO: Certificates is not working rn
    // getFirms();
  }, [token]);
  return (
    <>
      <Typography
        variant='h5'
        sx={{
          mb: 2,
        }}
      >
        Firms
      </Typography>
      <Button variant='contained'>Add Firm</Button>
    </>
  );
};

export default Firms;
