/* global carData */
/* exported carData */

var $car = document.querySelector('#car');

window.addEventListener('keydown', turnCar);

function turnCar(event) {
  var key = event.keyCode;
  if (key === 37 && carData.position === 'east') {
    $car.className = 'transform-north';
    carData.position = 'north';
    return;
  }
  if (key === 39 && carData.position === 'east') {
    $car.className = 'transform-south';
    carData.position = 'south';
    return;
  }
  if (key === 37 && carData.position === 'south') {
    $car.className = '';
    carData.position = 'east';
    return;
  }
  if (key === 39 && carData.position === 'south') {
    $car.className = 'transform-west';
    carData.position = 'west';
    return;

  }
  if (key === 37 && carData.position === 'west') {
    $car.className = 'transform-south';
    carData.position = 'south';
    return;
  }
  if (key === 39 && carData.position === 'west') {
    $car.className = 'transform-north';
    carData.position = 'north';
    return;
  }
  if (key === 37 && carData.position === 'north') {
    $car.className = 'transform-west';
    carData.position = 'west';
  }
  if (key === 39 && carData.position === 'north') {
    $car.className = '';
    carData.position = 'east';

  }
}
