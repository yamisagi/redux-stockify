import { Typography, Button, Grid, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useStockOperations from '../hooks/useStockOperations';
import { getStaticProps } from '../constants/stockTypes';
import ProductModal from '../components/modals/ProductModal';
import ProductCard from '../components/cards/ProductCard';

const Products = () => {
  const [open, setOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [info, setInfo] = useState({
    name: '',
    id: '',
    category: '',
    category_id: '',
    brand: '',
    brand_id: '',
    stock: 0,
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      name: '',
      id: '',
      category: '',
      category_id: '',
      brand: '',
      brand_id: '',
      stock: 0,
      // Stock should be an integer
    });
  };

  const { products, loading } = useSelector((state) => state.stock);

  const { getInfo } = useStockOperations();
  const { PRODUCTS } = getStaticProps;
  useEffect(() => {
    getInfo(PRODUCTS);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <>
          <Typography
            variant='h5'
            sx={{
              mb: 2,
            }}
          >
            Products
          </Typography>
          <Button
            variant='contained'
            onClick={() => {
              handleOpen();
              setIsUpdate(false);
            }}
          >
            Add Product
          </Button>
          <ProductModal
            open={open}
            handleClose={handleClose}
            id={info.id}
            isUpdate={isUpdate}
            info={info}
            setInfo={setInfo}
          />
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <ProductCard
                  product={product}
                  handleOpen={handleOpen}
                  setIsUpdate={setIsUpdate}
                  setInfo={setInfo}
                  info={info}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </>
  );
};

export default Products;
