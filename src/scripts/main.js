const images = [
    { src: "%BASE_URL%dragster_scooter.png", caption: "ItalJet Dragster"},
    { src: "%BASE_URL%orange_scooter.png", caption: "Oranžový skútr"},
    { src: "%BASE_URL%blue_scooter.jpg", caption: "Modrý skútr"},
    { src: "%BASE_URL%purple_scooter.png", caption: "Fialový skútr"},
    { src: "%BASE_URL%red_scooter.png", caption: "Červený skútr"},
    { src: "%BASE_URL%yellow_scooter.png", caption: "Žlutý skútr"},
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