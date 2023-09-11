import {
  ACT_ADD_CART,
  ACT_INCREASE_CART,
  ACT_DECREASE_CART,
  ACT_DELETE_CART,
} from "../constrains/actionTypes";

export const act_add = (product) => {
  return {
    type: ACT_ADD_CART,
    payload: product,
  };
};

export const act_decrease = (product_id) => {
  return {
    type: ACT_DECREASE_CART,
    payload: product_id,
  };
};

export const act_increase = (product_id) => {
  return {
    type: ACT_INCREASE_CART,
    payload: product_id,
  };
};

export const act_delete = (product_id) => {
  return {
    type: ACT_DELETE_CART,
    payload: product_id,
  };
};
