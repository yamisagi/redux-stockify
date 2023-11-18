import React from 'react';
import { deepOrange, deepPurple, green } from '@mui/material/colors';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Card, Grid, Avatar, Box, Typography } from '@mui/material';

const KPICards = () => {
  const cardData = [
    {
      id: 0,
      title: 'Sales',
      icon: <TrendingUpIcon />,
      value: '$0',
      bgColor: green[500],
    },
    {
      id: 1,
      title: 'Purchases',
      icon: <AddShoppingCartIcon />,
      value: '$14000',
      bgColor: deepPurple[500],
    },
    {
      id: 2,
      title: 'Profit',
      icon: <PointOfSaleIcon />,
      value: '$0',
      bgColor: deepOrange[500],
    },
  ];
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
        }}
      >
        {cardData.map((card) => (
          <Grid
            item
            key={card.id}
            xs={12}
            sm={8}
            md={4}
            lg={3}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Card
              sx={{
                display: 'flex',
                gap: 3,
                p: 2,
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '380px',
                maxWidth: '100%',
                backgroundColor: 'primary.card',
              }}
              elevation={5}
            >
              <Avatar
                sx={{
                  bgcolor: card.bgColor,
                  color: 'white',
                  width: '70px',
                  height: '70px',
                }}
              >
                {card.icon}
              </Avatar>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                }}
              >
                <Typography
                  variant='button'
                  mb={2}
                  sx={{
                    color: 'primary.active',
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant='h4'
                  mb={2}
                  sx={{
                    color: 'primary.active',
                    fontSize: '1.5rem',
                    overflowWrap: 'anywhere',
                  }}
                >
                  {card.value}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default KPICards;
