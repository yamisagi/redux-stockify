import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { modalStyle } from '../../styles/globalStyles';
import { Select, TextField } from '@mui/material';
import useStockOperations from '../../hooks/useStockOperations';
import { getStaticProps } from '../../constants/stockTypes';
import { FormControl, InputLabel } from '@mui/material';
import { MenuItem } from '@mui/material';
import { useSelector } from 'react-redux';

export default function ProductModal({ open, handleClose }) {
  const { postStockInfo } = useStockOperations();
  const { categories, brands } = useSelector((state) => state.stock);
  const { PRODUCTS } = getStaticProps;
  const [info, setInfo] = useState({
    name: '',
    category_id: 0,
    brand_id: 0,
  });
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
    postStockInfo(PRODUCTS, info);
    setInfo({
      name: '',
      category_id: 0,
      brand_id: 0,
    });
    handleClose();
  };

  return (
    <>
      <Modal
        open={open}
        onClose={() => {
          handleClose();
          setInfo({
            name: '',
            category_id: 0,
            brand_id: 0,
          });
        }}
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
          <Box>
            <FormControl fullWidth>
              <InputLabel id='categories'>Category</InputLabel>
              <Select
                labelId='categories'
                id='categories'
                label='Category'
                onChange={handleChange}
                name='category_id'
                value={info?.category_id}
              >
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl
              fullWidth
              sx={{
                mt: 2,
              }}
            >
              <InputLabel id='brands'>Brand</InputLabel>
              <Select
                labelId='brands'
                id='brands'
                label='Brand'
                onChange={handleChange}
                name='brand_id'
                value={info?.brand_id}
              >
                {brands.map((brand) => (
                  <MenuItem key={brand.id} value={brand.id}>
                    {brand.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <TextField
            required
            id='product-name'
            label='Product Name'
            name='name'
            variant='outlined'
            value={info?.name}
            onChange={handleChange}
            type='text'
          />
          <Button variant='contained' type='submit'>
            Add new Product
          </Button>
        </Box>
      </Modal>
    </>
  );
}
