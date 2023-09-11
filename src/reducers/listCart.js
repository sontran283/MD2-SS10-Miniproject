import {
  ACT_ADD_CART,
  ACT_DECREASE_CART,
  ACT_DELETE_CART,
  ACT_INCREASE_CART,
} from "../constrains/actionTypes";

const initialState = JSON.parse(localStorage.getItem("carts")) || [];

/**
 * ham lay ra vi tri cua product trong listProduct
 * @param {*} id        id can kiem tra
 * @param {*} array     mang dung de kiem tra
 * @returns             neu tim thay ban ghi thi tra ra index, neu ko thi tra ra -1
 * Author : SONTRAN(8/9/2023)
 */
const findIndexProduct = (id, array) => {
  const productIndex = array.findIndex((pro) => pro.product_id === id);
  return productIndex;
};

//  ham luu du lieu len local
const saveDataLocal = (array) => {
  localStorage.setItem("carts", JSON.stringify(array));
};

export const listCart = (state = initialState, action) => {
  switch (action.type) {
    case ACT_ADD_CART:
      // vi tri can lay
      const indexProduct = findIndexProduct(action.payload.product_id, state);

      // kiem tra san pham da ton tai trong gio hang chua
      if (indexProduct !== -1) {
        // clone lai mang cu
        const newCarts = [...state];

        // neu ton tai tang so luong
        newCarts[indexProduct].quantity += 1;

        // luu len local
        localStorage.setItem("carts", JSON.stringify(newCarts));
        return newCarts;
      } else {
        //neu chua thi them vao gio hang
        // clone lai mang cu
        const newAddCarts = [...state, { ...action.payload, quantity: 1 }];
        // luu len local
        localStorage.setItem("carts", JSON.stringify(newAddCarts));
        return newAddCarts;
      }

    case ACT_DECREASE_CART:
      const indexDecrease = findIndexProduct(action.payload, state);
      // clone lai mang cu
      const newDecreaseCarts = [...state];
      // neu ton tai giam so luong
      newDecreaseCarts[indexDecrease].quantity -= 1;
      // neu giam so luong den 0, thi xoa luon
      if (newDecreaseCarts[indexDecrease].quantity < 1) {
        newDecreaseCarts.splice(indexDecrease, 1);
      }
      // luu len local
      saveDataLocal(newDecreaseCarts);
      // return ra mang moi
      return newDecreaseCarts;

    case ACT_INCREASE_CART:
      const indexIncrease = findIndexProduct(action.payload, state);
      // clone lai mang cu
      const newIncreaseCarts = [...state];
      // neu ton tai tang so luong
      newIncreaseCarts[indexIncrease].quantity += 1;
      // luu len local
      saveDataLocal(newIncreaseCarts);
      // return ra mang moi
      return newIncreaseCarts;

    case ACT_DELETE_CART:
      const indexDelete = findIndexProduct(action.payload, state);
      // clone lai mang cu
      const newDeleteCarts = [...state];
      // neu ton tai xoa luon
      newDeleteCarts.splice(indexDelete, 1);
      // luu len local
      saveDataLocal(newDeleteCarts);
      // return ra mang moi
      return newDeleteCarts;

    default:
      return state;
  }
};
