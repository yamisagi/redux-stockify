import React, { useState, useEffect } from 'react';
import ProductTable from '../components/tables/ProductTable';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import ProductModal from '../components/modals/ProductModal';
import useStockOperations from '../hooks/useStockOperations';

const Products = () => {
  const { products, loading } = useSelector((state) => state.stock);
  const { getProductCategoriesBrands } = useStockOperations();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getProductCategoriesBrands();
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
        Products
      </Typography>
      <ProductModal open={open} handleClose={handleClose} />
      <Button variant='contained' onClick={handleOpen}>
        New Product
      </Button>
      <ProductTable loading={loading} products={products} />
    </>
  );
};
export default Products;
