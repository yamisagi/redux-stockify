import { Typography, Button, Grid, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useStockOperations from '../hooks/useStockOperations';
import { getStaticProps } from '../constants/stockTypes';
import BrandCard from '../components/BrandCard';
import BrandModal from '../components/modals/BrandModal';

const Brands = () => {
  const [open, setOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [info, setInfo] = useState({
    name: '',
    image: '',
    id: '',
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      name: '',
      image: '',
      id: '',
    });
  };

  const { brands, loading } = useSelector((state) => state.stock);

  const { getInfo } = useStockOperations();
  const { BRANDS } = getStaticProps;
  useEffect(() => {
    getInfo(BRANDS);
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
            Firms
          </Typography>
          <Button
            variant='contained'
            onClick={() => {
              handleOpen();
              setIsUpdate(false);
            }}
          >
            Add Firm
          </Button>
          <BrandModal
            open={open}
            handleClose={handleClose}
            id={info.id}
            isUpdate={isUpdate}
            info={info}
            setInfo={setInfo}
          />
          <Grid container spacing={2}>
            {brands.map((brand) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={brand.id}>
                <BrandCard
                  brand={brand}
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

export default Brands;
