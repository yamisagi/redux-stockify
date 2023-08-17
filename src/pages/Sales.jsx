import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useStockOperations from '../hooks/useStockOperations';
import { getStaticProps } from '../constants/stockTypes';

const Sales = () => {
  const { sales } = useSelector((state) => state.stock);
  const { getInfo } = useStockOperations();
  const { SALES } = getStaticProps;
  console.log(sales);
  useEffect(() => {
    getInfo(SALES);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>Sales</div>;
};

export default Sales;
