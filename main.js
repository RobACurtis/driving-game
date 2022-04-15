/* global carData */
/* exported carData */

var $car = document.querySelector('#car');

window.addEventListener('keydown', turnCar);

function turnCar(event) {
  var key = event.keyCode;
  if (key === 39) {
    $car.className = 'east';
    carData.property = 'east';

  }
  if (key === 37) {
    $car.className = 'west';
    carData.property = 'west';
  }
  if (key === 38) {
    $car.className = 'north';
    carData.property = 'north';
  }
  if (key === 40) {
    $car.className = 'south';
    carData.property = 'south';
  }
}
