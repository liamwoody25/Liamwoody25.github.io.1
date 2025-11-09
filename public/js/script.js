const burgerSwitch = document.querySelector('.ham-burger')
const offScreen = document.querySelector('.left-screen-menu')

function hamBurgerMenu(){
  burgerSwitch.classList.toggle('active');
  offScreen.classList.toggle('active')
}

burgerSwitch.addEventListener('click', function(){
  hamBurgerMenu()
})