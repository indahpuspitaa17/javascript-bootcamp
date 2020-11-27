const isAuthenticated = false;
let cartItemCount = 0;

if (isAuthenticated) {
  // add item to cart
  cartItemCount = 1;
} else {
  // tell user to login
  console.log("Please log in!");
}