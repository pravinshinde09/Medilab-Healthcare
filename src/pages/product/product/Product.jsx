import React from 'react';
import StickyForm from '../../../components/common/StickyForm';
import Pramotor from './Pramotor';
import ProductList from './ProductList';
import TableList from './TableList';

const Product = () => {
  return (
    <>
      <ProductList />
      <Pramotor/>
      <TableList/>
      <StickyForm/>
    </>
  )
}

export default Product