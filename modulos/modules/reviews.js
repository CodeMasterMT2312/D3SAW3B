// Reviews Component
export function createReviews(reviews) {
    const reviewsContainer = document.getElementById('reviews');
    reviewsContainer.innerHTML = `
        <div class="reviews">
            <h2>Reseñas</h2>
            ${reviews.map(review => `
            <div class="review">
                <p><strong>${review.user}</strong></p>
                <p>${review.comment}</p>
            </div>
            `).join('')}
        </div>
    `;
}


