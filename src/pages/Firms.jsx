import { Typography, Button, Grid, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useStockOperations from '../hooks/useStockOperations';
import { getStaticProps } from '../constants/stockTypes';
import FirmCard from '../components/cards/FirmCard';
import FirmModal from '../components/modals/FirmModal';

const Firms = () => {
  const [open, setOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [info, setInfo] = useState({
    name: '',
    address: '',
    phone: '',
    image: '',
    id: '',
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      name: '',
      address: '',
      phone: '',
      image: '',
      id: '',
    });
  };

  const { firms, loading } = useSelector((state) => state.stock);

  const { getInfo } = useStockOperations();
  const { FIRMS } = getStaticProps;
  useEffect(() => {
    getInfo(FIRMS);
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
              fontWeight: 'bold',
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
          <FirmModal
            open={open}
            handleClose={handleClose}
            id={info.id}
            isUpdate={isUpdate}
            info={info}
            setInfo={setInfo}
          />
          <Grid container spacing={2}>
            {firms.map((firm) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={firm.id}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <FirmCard
                  firm={firm}
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

export default Firms;
