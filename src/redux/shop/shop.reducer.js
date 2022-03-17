import SHOP_DATA from "../../data/shop.data.js";

const INITIAL_STATE = {
  shopData: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
