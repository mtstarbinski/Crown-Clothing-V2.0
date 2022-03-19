import { PRODUCTS_ACTION_TYPES } from './products.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setProducts = (productsArray) =>
  createAction(PRODUCTS_ACTION_TYPES.SET_PRODUCTS, productsArray);