//all modules are implemented in strict mode.
//import statements are hoisted.
// import "./shoppingCart.js";
// console.log("importing module");
// //----
import {
  addToCart,
  totalPrice as price,
  totalQuantity,
} from "./shoppingCart.js";
addToCart("pencils", 10);
console.log(price, totalQuantity);
//----
// // import * as ShoppingCart from "./shoppingCart.js";
// // ShoppingCart.addToCart("wine", 10);
// //----
// import deCart from "./shoppingCart.js";
// console.log(deCart);
//---same usecase using an iife.
//---used before es-6 modules
// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;
//   function addToCart(product, quantity) {
//     cart.push({ product, quantity });
//     console.log(cart);
//   }
//   function orderStock(product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   }
//   return { addToCart, cart, totalPrice, totalQuantity };
// })();
// ShoppingCart2.addToCart("apple", 4);
// ShoppingCart2.addToCart("pizza", 3);

import cloneDeep from "lodash-es";
const state = {
  cart: [
    {
      product: "bread",
      quantity: 5,
    },
    {
      product: "pizza",
      quantity: 2,
    },
  ],
  user: {
    name: "Gauri",
  },
};

const stateClone = Object.assign({}, state);
const stateDeep = cloneDeep(state);
console.log(stateDeep);
state.user.name = "satya";
console.log(stateDeep);
console.log(state);
