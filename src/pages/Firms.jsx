import { Typography, Button } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useStockOperations from '../hooks/useStockOperations';
import { getStaticProps } from '../constants/stockTypes';

const Firms = () => {
  const { firms } = useSelector((state) => state.stock);
  const { getInfo, deleteStockInfo } = useStockOperations();
  const { FIRMS } = getStaticProps;
  useEffect(() => {
    getInfo(FIRMS);
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
