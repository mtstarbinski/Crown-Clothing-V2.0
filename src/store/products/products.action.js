import { PRODUCTS_ACTION_TYPES } from './products.types';
import { createAction } from '../../utils/reducer/reducer.utils';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

export const fetchProductsSuccess = (productsArray) =>
    createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, productsArray);

export const fetchProductsStart = () =>
    createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START);

export const fetchProductsFailed = (error) =>
    createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED, error);