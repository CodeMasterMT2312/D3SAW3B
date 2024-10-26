// index.js
import { createReviews } from "./modules/reviews.js";
import { createProductDetails } from "./modules/productDetails.js";
import { createHeader } from "./modules/header.js";
import { createFooter } from "./modules/footer.js";
import { addToCart, displayCart } from "./modules/cart.js"; 

document.addEventListener("DOMContentLoaded", () => {
    // Datos del producto y reseñas
    const products = [
        {
            id: 1,
            name: 'Echo Dot',
            description: 'Altavoz inteligente con Alexa',
            price: 49.99
        },
        {
            id: 2,
            name: 'Echo Show',
            description: 'Display con Alexa',
            price: 129.99
        },
        {
            id: 3,
            name: 'Foco Inteligente LED',
            description: 'Foco LED controlado por voz con Alexa',
            price: 29.99
        }
    ];

    const reviews = [
        { user: 'Juan', comment: 'Excelente producto!' },
        { user: 'Ana', comment: 'Muy útil y fácil de usar.' }
    ];

    createHeader();
    createProductDetails(products); // Pasar el array de productos
    createReviews(reviews);
    createFooter();
    displayCart(); // Mostrar el carrito al cargar la página
});
