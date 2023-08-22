import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { modalStyle } from '../../styles/globalStyles';
import { TextField } from '@mui/material';
import useStockOperations from '../../hooks/useStockOperations';
import { getStaticProps } from '../../constants/stockTypes';

export default function ProductModal({
  open,
  handleClose,
  id,
  isUpdate,
  info,
  setInfo,
}) {
  const { postStockInfo, updateStockInfo } = useStockOperations();
  const { PRODUCTS } = getStaticProps;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);

    // Post or Update the info to the backend
    if (isUpdate) {
      updateStockInfo(PRODUCTS, id, info);
    } else postStockInfo(PRODUCTS, info);

    // Clear the form
    setInfo({
      name: '',
      id: '',
      category: '',
      category_id: '',
      brand: '',
      brand_id: '',
      stock: 0,
    });
    handleClose();
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        sx={{
          backdropFilter: 'blur(5px)',
        }}
      >
        <Box
          sx={{
            ...modalStyle,
            '@media (max-width: 600px)': {
              width: '350px',
            },
            gap: 2,
          }}
          component='form'
          display={'flex'}
          flexDirection={'column'}
          onSubmit={handleSubmit}
        >
          <TextField
            required
            id='product-name'
            label='Product Name'
            name='name'
            variant='outlined'
            value={info?.name}
            onChange={handleChange}
          />
          <Button variant='contained' type='submit'>
            Submit
          </Button>
        </Box>
      </Modal>
    </>
  );
}
