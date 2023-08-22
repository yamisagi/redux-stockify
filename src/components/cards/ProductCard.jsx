import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import useStockOperations from '../../hooks/useStockOperations';
import { getStaticProps } from '../../constants/stockTypes';

export default function ProductCard({
  product,
  handleOpen,
  setIsUpdate,
  setInfo,
}) {
  const { id, name, category, category_id, brand, brand_id, stock } = product;
  const { deleteStockInfo } = useStockOperations();
  const { BRANDS } = getStaticProps;
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: '100%',
        mt: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <CardActionArea
        sx={{
          height: '100%',
        }}
      >
        <CardContent
          sx={{
            maxHeight: 240,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            justifyContent: 'inherit',
            alignItems: 'center',
          }}
        >
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            sx={{
              textTransform: 'capitalize',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          margin: 'auto',
        }}
      >
        <Button
          size='small'
          variant='contained'
          onClick={() => {
            handleOpen();
            setIsUpdate(true);
            setInfo(product);
          }}
        >
          Edit
        </Button>
        <Button
          size='small'
          variant='contained'
          sx={{
            bgcolor: 'error.main',
            color: 'white',
          }}
          onClick={() => {
            deleteStockInfo(BRANDS, id);
          }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
