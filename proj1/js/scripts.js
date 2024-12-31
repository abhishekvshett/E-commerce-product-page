const cartItems = [];
const cartList = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');
const addToCartButton = document.getElementById('add-to-cart');

addToCartButton.addEventListener('click', () => {
  const productName = 'Product Name';
  const productPrice = 49.99;

  // Add item to the cart
  cartItems.push({ name: productName, price: productPrice });

  // Update cart UI
  updateCart();
});

function updateCart() {
  cartList.innerHTML = '';
  let total = 0;

  cartItems.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(li);

    total += item.price;
  });

  totalPrice.textContent = `Total: $${total.toFixed(2)}`;
}
