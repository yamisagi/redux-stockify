import React from 'react';
import { Card, LineChart, Title } from '@tremor/react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';

const valueFormatter = (number) => {
  // If value is Quantity, return the number as is

  return `$ ${new Intl.NumberFormat('us').format(number).toString()}`;
};

const Charts = () => {
  const { sales, purchases } = useSelector((state) => state.stock);
  const salesData = sales?.map((sale) => ({
    Date: sale.createds,
    Quantity: sale.quantity,
    'Total Price': Number(sale.price_total),
    'Item Price': Number(sale.price),
  }));
  const purchasesData = purchases?.map((purchase) => ({
    Date: purchase.createds,
    Quantity: purchase.quantity,
    'Total Price': Number(purchase.price_total),
  }));

  

  return (
    <Grid container className='p-10 mx-auto' spacing={2}>
      <Grid item xs={12} md={6}>
        <Card className='mt-10 flex flex-col mx-auto'>
          <Title>Total Sales</Title>
          <LineChart
            className='mt-1 px-1'
            data={salesData}
            index='Date'
            categories={['Quantity', 'Total Price', 'Item Price']}
            colors={['red', 'blue', 'green']}
            valueFormatter={valueFormatter}
            onValueChange={(value) => {
              console.log(value);
            }}
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className='mt-10 mx-auto'>
          <Title>Total Purchases</Title>
          <LineChart
            className='mt-1 px-1'
            data={purchasesData}
            index='Date'
            categories={['Quantity', 'Total Price']}
            colors={['purple', 'orange']}
            valueFormatter={valueFormatter}
            onValueChange={(value) => {
              console.log(value);
            }}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default Charts;
