const gallery = document.getElementById('gallery');
  const scrollLeftButton = document.getElementById('scrollLeft');
  const scrollRightButton = document.getElementById('scrollRight');

  // Scroll left when the left button is clicked
  scrollLeftButton.addEventListener('click', () => {
    gallery.scrollLeft -= 200; // Adjust the value (200px) for scroll distance
  });

  // Scroll right when the right button is clicked
  scrollRightButton.addEventListener('click', () => {
    gallery.scrollLeft += 200; // Adjust the value (200px) for scroll distance
  });