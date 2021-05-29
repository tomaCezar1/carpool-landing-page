const passenger = document.getElementById('passenger');
const passengerBox = document.querySelector('.passenger-box');
const passangerText = document.getElementById('passanger-text');
const driver = document.getElementById('driver');
const driverBox = document.querySelector('.driver-box');
const driverText = document.getElementById('driver-text');
const howToText = document.querySelector('.how-to-text');
const routeImg = document.querySelector('.route-container');
const carsImg = document.querySelector('.how-to-img');

const logo = document.querySelector('.nav-brand');

const switchToDriver = () => {
  driver.classList.add('switched-driver');
  passenger.classList.remove('switch-on', 'switched-passenger');
  driverText.classList.add('bold-text');
  passangerText.classList.remove('bold-text');
  howToText.innerHTML = 'Set your route, time, and available seats';
  routeImg.style.display = 'block';
  carsImg.style.display = 'none';
};

const switchToPassenger = () => {
  passenger.classList.add('switched-passenger');
  driver.classList.remove('switch-on', 'switched-driver');
  passangerText.classList.add('bold-text');
  driverText.classList.remove('bold-text');
  howToText.innerHTML = "See who's driving and ask to join";
  routeImg.style.display = 'none';
  carsImg.style.display = 'block';
};

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

// Event listeners
passengerBox.addEventListener('click', switchToPassenger);
driverBox.addEventListener('click', switchToDriver);
logo.addEventListener('click', scrollToTop);
