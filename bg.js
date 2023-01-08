const images = ["cat.jpg", "venis.jpg"];

const randomImage = images[Math.floor(Math.random() * images.length)];

function background() {
    document.body.style.backgroundImage = `url(./img/${randomImage})`;
  }
  
  background();