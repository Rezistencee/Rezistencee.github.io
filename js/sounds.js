var rain = new Audio('prosto_shum_dozhdja_-_shum_dozhdja_(z2.fm).mp3'),
rainbutton = document.getElementById('rain-btn'),

fire = new Audio('zvuki_prirodi_-_shum_kostra_(z2.fm).mp3'),
firebutton = document.getElementById('fireplace-btn'),

snow = new Audio('wind__artic__cold-6195.mp3'),
snowbutton = document.getElementById('snow-btn'),

wind = new Audio('a-gentle-breeze-wind-4-14681.mp3'),
 windbutton = document.getElementById('wind-btn');


function playsoundrain(){
    if(rainbutton.classList.toggle('pressed')) {
        rain.play();
  } else {
     rain.pause();
  }
}

function playsoundfire(){
    if (firebutton.classList.toggle('pressed')) {
        fire.play();
    } else {
        fire.pause();
    }
}

function playsoundsnow(){
    if (snowbutton.classList.toggle('pressed')) {
        snow.play();
    } else {
        snow.pause();
    }
}

function playsoundwind(){
    if (windbutton.classList.toggle('pressed')) {
        wind.play();
    } else {
        wind.pause();
    }
}

