import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useStockOperations from '../hooks/useStockOperations';
import { getStaticProps } from '../constants/stockTypes';
import SalesTable from '../components/tables/SalesTable';
import { Button, Typography } from '@mui/material';
import SalesModal from '../components/modals/SalesModal';

const Sales = () => {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    brand_id: '',
    product_id: '',
    quantity: '',
    price: '',
  });
  const { sales, loading } = useSelector((state) => state.stock);
  const { getInfo, getProductCategoriesBrands } = useStockOperations();
  const { SALES } = getStaticProps;
  console.log(sales);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setInfo({ brand_id: '', product_id: '', quantity: '', price: '' });
  };

  useEffect(() => {
    getProductCategoriesBrands();
    getInfo(SALES);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Typography
        variant='h5'
        sx={{
          mb: 2,
          fontWeight: 'bold',
        }}
      >
        Sales
      </Typography>
      <SalesModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <Button variant='contained' onClick={handleOpen}>
        New Sale
      </Button>
      <SalesTable
        loading={loading}
        sales={sales}
        handleOpen={handleOpen}
        setInfo={setInfo}
      />
    </>
  );
};

export default Sales;
