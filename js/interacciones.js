document.addEventListener('DOMContentLoaded', () => {
  // PDF button
  const pdfButton = document.querySelector('.pdf-button');
  if (pdfButton) {
    pdfButton.addEventListener('click', () => {
      window.open('menu.pdf', '_blank');
    });
  }

  // Saludo
  console.log("¡Hola! Bienvenido a mi sitio web.");

  // Botón contador
  let contador = 0;
  const boton = document.getElementById("boton");
  const titulo = document.getElementById("contador");

  if (boton && titulo) {
    boton.addEventListener("click", function () {
      contador++;
      titulo.textContent = contador;
    });
  }
});


