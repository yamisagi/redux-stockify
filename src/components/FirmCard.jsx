import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import useStockOperations from '../hooks/useStockOperations';
import { getStaticProps } from '../constants/stockTypes';

export default function FirmCard({
  firm,
  handleOpen,
  setIsUpdate,
  setInfo,
  info,
}) {
  const { image, title, address, phone, alt, id } = firm;
  const { deleteStockInfo, getInfo } = useStockOperations();
  const { FIRMS } = getStaticProps;
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
      <CardMedia
        component='img'
        image={image}
        alt={alt}
        sx={{
          padding: 1,
          mt: 1,
          height: 140,
          maxHeight: 140,
          imageOrientation: 'center',
          objectFit: 'contain',
        }}
      />
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
            {title}
          </Typography>
          <Typography
            variant='body2'
            sx={{
              mb: 0.5,
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'wrap',
              textTransform: 'capitalize',
              fontWeight: '500',
            }}
          >
            {address}
          </Typography>
          <Typography
            variant='body2'
            sx={{
              my: 2,
              textAlign: 'center',
              textTransform: 'capitalize',
              fontWeight: '700',
            }}
          >
            Phone: {phone}
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
            setInfo({
              ...info,
              id,
            });
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
            deleteStockInfo(FIRMS, id);
          }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
