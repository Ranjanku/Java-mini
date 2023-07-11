
var image = document.querySelector('.lightOffJs');
var isLightOn = false;

image.addEventListener('click', function() {
  if (isLightOn) {
    // If light is currently on, turn it off
    image.src = 'images/lightoff.png';
    isLightOn = false;
  } else {
    // If light is currently off, turn it on
    image.src = 'images/lighton.png';
    isLightOn = true;
  }
});