// cart.js
const CART_KEY = 'shoppingCart';

export function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity += 1; // Incrementar la cantidad si ya existe
    } else {
        product.quantity = 1; // Inicializar la cantidad
        cart.push(product); // Agregar nuevo producto
    }

    localStorage.setItem(CART_KEY, JSON.stringify(cart)); // Guardar en Local Storage
}

export function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

export function displayCart() {
    const cartContainer = document.getElementById('cart-list'); // Asegúrate de tener un elemento con este ID en tu HTML
    const cart = getCart();
    cartContainer.innerHTML = ''; // Limpiar el contenedor del carrito

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>El carrito está vacío.</p>';
        return;
    }

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <h4>${item.name}</h4>
            <p>Precio: $${item.price.toFixed(2)} x ${item.quantity}</p>
        `;
        cartContainer.appendChild(cartItem);
    });
}
