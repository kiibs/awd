// Select all gallery images
const galleryImages = document.querySelectorAll('.gallery img');

// Select the modal elements
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.querySelector('.modal .close');

// Arrows for navigation
const prev = document.getElementById('prev');
const next = document.getElementById('next');

// Track the current image index
let currentIndex = 0;

// Open modal when an image is clicked
galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index; // Set the current index
    openModal(img.src);
  });
});

// Function to open modal
function openModal(src) {
  modal.style.display = 'flex';
  modalImage.src = src;
}

// Close modal when clicking the "x" button
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Navigate to the previous image
prev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length; // Loop back to last image
  modalImage.src = galleryImages[currentIndex].src;
});

// Navigate to the next image
next.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryImages.length; // Loop back to the first image
  modalImage.src = galleryImages[currentIndex].src;
});


function goBack() {
    window.history.back();
  }