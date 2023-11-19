/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import KPICards from '../components/cards/KPICards';
import Charts from '../components/Charts';
import useStockOperations from '../hooks/useStockOperations';
import { getStaticProps } from '../constants/stockTypes';

const Home = () => {
  const { getInfo } = useStockOperations();
  const { loading, sales, purchases } = useSelector((state) => state.stock);
  const { SALES, PURCHASES } = getStaticProps;
  useEffect(() => {
    getInfo(SALES);
    getInfo(PURCHASES);
  }, []);

  const totalSales = sales?.reduce(
    (total, sale) => total + Number(sale.price_total),
    0
  );
  const totalPurchases = purchases?.reduce(
    (total, purchase) => total + Number(purchase.price_total),
    0
  );
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
        <div>
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
          <KPICards totalSales={totalSales} totalPurchases={totalPurchases} />
          <Charts />
        </div>
      )}
    </>
  );
};

export default Home;
