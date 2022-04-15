/* global carData */
/* exported carData */

var $car = document.querySelector('#car');

window.addEventListener('keydown', turnCar);

var i = 0;
var car = carData.position;

function turnCar(event) {
  var key = event.keyCode;
  if (key === 39) {
    i++;
    $car.className = car[i];
  } else if (key === 37) {
    i--;
    $car.className = car[i];
  }
}
