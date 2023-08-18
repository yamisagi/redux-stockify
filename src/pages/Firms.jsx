import { Typography, Button, Grid } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useStockOperations from '../hooks/useStockOperations';
import { getStaticProps } from '../constants/stockTypes';
import FirmCard from '../components/FirmCard';

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
      <Grid container spacing={2}>
        {firms.map((firm) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={firm.id}>
            <FirmCard
              image={firm.image}
              title={firm.name}
              address={firm.address}
              tel={firm.phone}
              alt={firm.name}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Firms;
