const passenger = document.querySelector('#passenger');
const passengerBox = document.querySelector('.passenger-box');
const passangerText = document.querySelector('#passanger-text');
const driver = document.querySelector('#driver');
const driverBox = document.querySelector('.driver-box');
const driverText = document.querySelector('#driver-text');

const switchToDriver = () => {
  driver.classList.add('switched-driver');
  passenger.classList.remove('switch-on', 'switched-passenger');
  driverText.classList.add('bold-text');
  passangerText.classList.remove('bold-text');
};

const switchToPassenger = () => {
  passenger.classList.add('switched-passenger');
  driver.classList.remove('switch-on', 'switched-driver');
  passangerText.classList.add('bold-text');
  driverText.classList.remove('bold-text');
};

passengerBox.addEventListener('click', switchToPassenger);
driverBox.addEventListener('click', switchToDriver);
