const collage = document.getElementById('collage');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.getElementById('close');
const imageMessage = document.getElementById('image-message');

// Array de mensajes para cada imagen
const mensajes = [
  "Me encanta de tu sonrisa",
  "Me encanta de tu humor",
  "Me encanta de tu cintura",
  "Me encantan tus labios",
  "Me encanta abrazarte",
  "Me encanta mimarte cada noche",
  // Agrega más mensajes si tienes más imágenes
];

collage.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    modal.style.display = 'block';
    modalImg.src = e.target.src;
    
    // Obtener el índice de la imagen seleccionada
    const index = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode);
    
    // Mostrar el mensaje correspondiente a la imagen
    imageMessage.textContent = mensajes[index];
  }
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});