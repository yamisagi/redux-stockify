import React, { useEffect } from 'react';
import useStockOperations from '../hooks/useStockOperations';

const Brands = () => {
  const { getInfo } = useStockOperations();
  useEffect(() => {
    getInfo('brands');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>Brands</div>;
};

export default Brands;
