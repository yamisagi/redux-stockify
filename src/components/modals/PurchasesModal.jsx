import React from 'react';
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
import { useNavigate } from 'react-router-dom';

const PurchaseModal = ({ open, handleClose, info, setInfo }) => {
  const navigate = useNavigate();
  const { updateStockInfo, postStockInfo } = useStockOperations();
  const { firms, products, brands } = useSelector((state) => state.stock);
  const { PURCHASES } = getStaticProps;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: Number(value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      updateStockInfo(PURCHASES, info.id, info);
    } else {
      postStockInfo(PURCHASES, info);
    }
    handleClose();
    setInfo({});
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          handleClose();
          setInfo({});
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
          onSubmit={handleSubmit}
        >
          <Box
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <FormControl>
              <InputLabel variant='outlined' id='firm-select-label'>
                Firm
              </InputLabel>
              <Select
                labelId='firm-select-label'
                label='Firm'
                name='firm_id'
                value={info?.firm_id || ''}
                onChange={handleChange}
                required
              >
                <MenuItem onClick={() => navigate('/stock/firms')}>
                  Add New Firm
                </MenuItem>
                <hr />
                {firms?.map((item) => {
                  return (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel variant='outlined' id='brand-select-label'>
                Brand
              </InputLabel>
              <Select
                labelId='brand-select-label'
                label='Brand'
                id='brand-select'
                name='brand_id'
                value={info?.brand_id || ''}
                onChange={handleChange}
                required
              >
                <MenuItem onClick={() => navigate('/stock/brands')}>
                  Add New Brand
                </MenuItem>
                <hr />
                {brands?.map((item) => {
                  return (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel variant='outlined' id='product-select-label'>
                Product
              </InputLabel>
              <Select
                labelId='product-select-label'
                label='Product'
                id='product-select'
                name='product_id'
                value={info?.product_id || ''}
                onChange={handleChange}
                required
              >
                <MenuItem onClick={() => navigate('/stock/products')}>
                  Add New Product
                </MenuItem>
                <hr />
                {products?.map((item) => {
                  return (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <TextField
              label='Quantity'
              id='quantity'
              name='quantity'
              type='number'
              variant='outlined'
              InputProps={{ inputProps: { min: 0 } }}
              value={info?.quantity || ''}
              onChange={handleChange}
              required
            />
            <TextField
              label='Price'
              id='price'
              type='number'
              variant='outlined'
              name='price'
              InputProps={{ inputProps: { min: 0 } }}
              value={info?.price || ''}
              onChange={handleChange}
              required
            />
            <Button type='submit' variant='contained' size='large'>
              {info?.id ? 'Update Purchase' : 'Add New Purchase'}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default PurchaseModal;
