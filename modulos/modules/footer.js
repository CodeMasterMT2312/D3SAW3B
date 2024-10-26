// Footer Component
export function createFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
        <footer>
            <p>© 2024 Amazon</p>
            <a href="/terms" style="color: white;">Términos y condiciones</a>
            <a href="/privacy" style="color: white;">Política de privacidad</a>
        </footer>
    `;
}
