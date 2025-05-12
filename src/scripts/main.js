const images = [
    { src: "/public/dragster_scooter.png", caption: "ItalJet Dragster"},
    { src: "/public/orange_scooter.png", caption: "Oranžový skútr"},
    { src: "/public/blue_scooter.jpg", caption: "Modrý skútr"},
    { src: "/public/purple_scooter.png", caption: "Fialový skútr"},
    { src: "/public/red_scooter.png", caption: "Červený skútr"},
    { src: "/public/yellow_scooter.png", caption: "Žlutý skútr"},
  ];

  let currentIndex = 0;

  function updateGallery() {
    document.getElementById('photo-img').src = images[currentIndex].src;
    document.getElementById('caption').textContent = images[currentIndex].caption;
  }   


  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
  }