import React from 'react';
import { useLocation } from 'react-router-dom';
import { ProductsList } from '../../components/ProductsList';

export const PhonesPage: React.FC = () => {
  const location = useLocation();

  const category = location.pathname.split('/')[1];

  return <ProductsList category={category} title="Mobile phones" />;
};
