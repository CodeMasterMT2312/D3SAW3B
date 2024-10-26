// Header Component
export function createHeader() {
    const header = document.getElementById('header');
    header.innerHTML = `
        <div class="logo">Amazon</div>
        <input type="text" placeholder="Buscar productos..." />
    `;
}
