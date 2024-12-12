// JavaScript source code
const galleryItems = document.querySelectorAll('.gallery-item');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        modalImage.src = item.src; // Tıklanan resmin yolunu modal'a aktar
        modalTitle.textContent = item.alt; // Alt metni modal açıklaması olarak kullan
        modalBody.innerHTML = item.nextElementSibling.textContent;
    });
});