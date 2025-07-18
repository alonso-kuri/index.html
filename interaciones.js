document.addEventListener('DOMContentLoaded', () => {
  const pdfButton = document.querySelector('.pdf-button');
  if (pdfButton) {
    pdfButton.addEventListener('click', () => {
      alert('¡Estás a punto de abrir el menú PDF!');
    });
  }
});
