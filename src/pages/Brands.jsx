import React, { useEffect } from 'react';
import useStockOperations from '../hooks/useStockOperations';
import { getStaticProps } from '../constants/stockTypes';

const Brands = () => {
  const { getInfo } = useStockOperations();
  const { BRANDS } = getStaticProps;
  useEffect(() => {
    getInfo(BRANDS);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>Brands</div>;
};

export default Brands;
