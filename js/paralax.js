let initial = 1;
let ticking = false;
let currentSection = 0;

const sections = document.getElementsByClassName('background')
const length = sections.length
const scrollDown = () => {
  if(currentSection < length - 1 ){
    ticking = true
    currentSection += 1
    sections[currentSection-1].classList.add('scroll-down')
    console.log(sections[0].classList)
    pause() 
  }
}

const scrollUp = () => {
  if(currentSection !== 0 ) {
    ticking = true
    currentSection -= 1
    sections[currentSection].classList.remove('scroll-down')
    pause() 
  }
}

const handleScroll = (event) => {
  if(!ticking){
    if(event.deltaY > 30) {
      scrollDown()
    } else if (event.deltaY < -30) {
      scrollUp()
    }
  }
}

const pause = () => {
  setTimeout( () => {
    ticking = false
  }, 500)
}

window.addEventListener('wheel', handleScroll)
