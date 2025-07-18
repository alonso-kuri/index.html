document.addEventListener('DOMContentLoaded', () => {
  const pdfButton = document.querySelector('.pdf-button');
  if (pdfButton) {
    pdfButton.addEventListener('click', () => {
      window.open('ruta/del/menu.pdf', '_blank');
    });
  }
});
