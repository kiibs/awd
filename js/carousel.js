// js/carousel.js
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector(".slides");
    const images = slides.querySelectorAll("img");
    const totalImages = images.length;
  
    // Clonar las imágenes para el scroll infinito
    images.forEach(img => {
      const clone = img.cloneNode(true);
      slides.appendChild(clone);
    });
  
    let index = 0;
    const slideWidth = images[0].clientWidth;
  
    function moveSlides() {
      index++;
      slides.style.transition = "transform 0.5s linear";
      slides.style.transform = `translateX(${-slideWidth * index}px)`;
  
      // Cuando llega al final de la primera copia, resetea sin transición
      if (index >= totalImages) {
        setTimeout(() => {
          slides.style.transition = "none";
          slides.style.transform = "translateX(0)";
          index = 0;
        }, 500); // Debe coincidir con la duración de la transición
      }
    }
  
    // Mueve el carrusel cada 3 segundos (ajusta a tu gusto)
    setInterval(moveSlides, 2000);
  });
  