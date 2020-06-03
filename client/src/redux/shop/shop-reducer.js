import { modifyShopData } from "./shop.utils";

const SET_SHOP_DATA = 'shop/SET_SHOP_DATA';

const INITIAL_STATE = {
  collections: {}
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SHOP_DATA:
      return {
        ...state,
        collections: modifyShopData(action.payload)
      }
    default:
      return state;
  }
};

export const setShopData = (collection) => ({type: SET_SHOP_DATA, payload: collection});