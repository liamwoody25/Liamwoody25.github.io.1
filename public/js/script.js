const burgerSwitch = document.querySelector('.ham-burger')
const offScreen = document.querySelector('.left-screen-menu')

function hamBurgerMenu(){
  if (burgerSwitch.classList.toggle('active')){
     offScreen.classList.toggle('active')
  } else {
    offScreen.classList.toggle('active')
  }
   
}

burgerSwitch.addEventListener('click', function(){
  hamBurgerMenu()
})