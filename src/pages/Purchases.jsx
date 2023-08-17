import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useStockOperations from '../hooks/useStockOperations';
import { getStaticProps } from '../constants/stockTypes';

const Purchases = () => {
  const { purchases } = useSelector((state) => state.stock);
  const { getInfo } = useStockOperations();
  const { PURCHASES } = getStaticProps;
  useEffect(() => {
    getInfo(PURCHASES);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>Purchases</div>;
};

export default Purchases;
