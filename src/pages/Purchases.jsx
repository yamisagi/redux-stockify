import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useStockOperations from '../hooks/useStockOperations';
import { getStaticProps } from '../constants/stockTypes';
import PurchasesTable from '../components/tables/PurchasesTable';
import { Button, Typography } from '@mui/material';
import PurchasesModal from '../components/modals/PurchasesModal';

const Purchases = () => {
  const { purchases, loading } = useSelector((state) => state.stock);
  const { getInfo, getProductCategoriesBrands } = useStockOperations();
  const { PURCHASES, FIRMS } = getStaticProps;
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    brand_id: '',
    product_id: '',
    quantity: '',
    price: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    getProductCategoriesBrands();
    getInfo(PURCHASES);
    getInfo(FIRMS);
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
        Purchases
      </Typography>
      <PurchasesModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <Button variant='contained' onClick={handleOpen}>
        New Purchase
      </Button>
      <PurchasesTable
        loading={loading}
        purchases={purchases}
        handleOpen={handleOpen}
        setInfo={setInfo}
      />
    </>
  );
};

export default Purchases;
