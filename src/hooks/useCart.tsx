import { useContext } from 'react';
import { CartContext } from '../contexts/cardContext'

export const useCart = () => {
  return useContext(CartContext);
};