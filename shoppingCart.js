//exporting module
//all top level variables are scoped to the specific module.

console.log("exporting module");

const shippingCost = 10;
const cart = [];

export function addToCart(product, quantity) {
  cart.push({ product, quantity });
  console.log(`${product} added to the cart!`);
}

const totalPrice = 237;
const totalQuantity = 23;
export { totalPrice, totalQuantity };
export default cart;

//---COMMON JS - would not work in the browser. would in Node.

// export. function addToCart(product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${product} added to the cart!`);
// }
