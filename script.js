const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

// cart js

function addToCart(itemId) {
  const newItem = {
    id: itemId,
    name: 'Sample Item',
    price: 19.99,
    quantity: 1 // Assuming initial quantity is 1
  };

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existingItem = cart.find(item => item.id === newItem.id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push(newItem);
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  updateCartUI(); // Update the cart UI
  alert('Item added to cart!');
}

// Function to update the cart UI
function updateCartUI() {
  const cartContainer = document.getElementById('cart-container');
}

document.getElementById('checkout-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const itemId = 'item-123'; // Replace this with your item ID
  addToCart(itemId);
});

window.addEventListener('load', function() {
  updateCartUI(); // Update the cart UI initially
});
