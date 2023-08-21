import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { modalStyle } from '../styles/globalStyles';
import { TextField } from '@mui/material';
import useStockOperations from '../hooks/useStockOperations';
import { getStaticProps } from '../constants/stockTypes';

export default function FirmModal({
  open,
  handleClose,
  id,
  isUpdate,
  info,
  setInfo,
}) {
  const { postStockInfo, updateStockInfo } = useStockOperations();
  const { FIRMS } = getStaticProps;

  {
    //! This is the code that was another way to fill
    //! the form with the info of the firm to be updated
    //! but there is easier way to do it without the useEffect
    //********************************************************* */
    // const { firms } = useSelector((state) => state.stock);
    // useEffect(() => {
    //   if (isUpdate && id) {
    //     const firm = firms.find((firm) => firm.id === id);
    //     setInfo(firm);
    //   } else {
    //     setInfo({
    //       name: '',
    //       address: '',
    //       phone: '',
    //       image: '',
    //     });
    //   }
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [id, isUpdate]);
  }

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
      updateStockInfo(FIRMS, id, info);
    } else postStockInfo(FIRMS, info);

    // Clear the form
    setInfo({
      name: '',
      address: '',
      phone: '',
      image: '',
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
            id='firm-name'
            label='Firm Name'
            name='name'
            variant='outlined'
            value={info?.name}
            onChange={handleChange}
          />
          <TextField
            required
            id='firm-address'
            name='address'
            label='Firm Address'
            variant='outlined'
            value={info?.address}
            onChange={handleChange}
          />
          <TextField
            required
            id='firm-phone'
            label='Firm Phone'
            name='phone'
            variant='outlined'
            value={info?.phone}
            onChange={handleChange}
            type='tel'
          />
          <TextField
            required
            id='firm-image'
            label='Firm Image'
            name='image'
            variant='outlined'
            value={info?.image}
            onChange={handleChange}
            type='url'
          />
          <Button variant='contained' type='submit'>
            Submit
          </Button>
        </Box>
      </Modal>
    </>
  );
}
