import { Typography, Button } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useStockOperations from '../hooks/useStockOperations';

const Firms = () => {
  const { firms } = useSelector((state) => state.stock);
  const { getInfo } = useStockOperations();
  useEffect(() => {
    getInfo('firms');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
