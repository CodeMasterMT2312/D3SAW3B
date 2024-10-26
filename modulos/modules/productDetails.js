// productDetails.js
import { addToCart, displayCart } from './cart.js'; // Asegúrate de que la ruta sea correcta

export function createProductDetails(products) {
    const productDetails = document.getElementById('product-details');
    productDetails.innerHTML = products.map(product => `
        <div class="product-details">
            <h1>${product.name}</h1>
            <p>${product.description}</p>
            <p>Precio: $${product.price.toFixed(2)}</p>
            <button id="add-to-cart-${product.id}">Agregar al carrito</button>
        </div>
    `).join('');

    // Agregar evento a cada botón
    products.forEach(product => {
        const button = document.getElementById(`add-to-cart-${product.id}`);
        if (button) {
            button.addEventListener('click', () => {
                addToCart(product); // Aquí se llama a addToCart
                displayCart(); // Mostrar el carrito actualizado
                alert(`${product.name} ha sido agregado al carrito!`);
            });
        }
    });
}
