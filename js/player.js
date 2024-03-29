const playBtn = document.querySelector('#play-pause')
const nextBtn = document.querySelector('#next-btn')
const prevBtn = document.querySelector('#prev-btn')
const musicContainer = document.querySelector('#music-container')
const audio = document.querySelector('#audio')
const progress = document.querySelector('#progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover');



//song titles
const songs = ['Derelict', 'Darkroom', 'Disembodied', 'Heartsick', 'Ruputred World', 'Broken', 'Capture This', 'Aether', 'Paper Moon', 'Purple Cat', 'Winter Restlessness', 'Environment', 'Ethernal']

//Keep track of songs
let songIndex = 1

// initially load song into DOM
loadSong(songs[songIndex])

//update song details
function loadSong(song){
    title.innerHTML = song;
    audio.src = `songs/${song}.mp3`;
    cover.src = `image/${song}.jpg`;
    console.log("123");
}

//play song
function playSong(){
musicContainer.classList.add('play')
playBtn.querySelector('i.fas').classList.remove('fa-play')
playBtn.querySelector('i.fas').classList.add('fa-pause')

audio.play()

}

function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

audio.pause()
}

function prevSong(){
    songIndex--

    if (songIndex < 0) {
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex])

    playSong()
}

function nextSong(){
    songIndex++

    if (songIndex > songs.length - 1) {
        songIndex = 0
    }

    loadSong(songs[songIndex])

    playSong()
}

function updateProgress(e){
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
}

function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}

// Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')
if (isPlaying) {
    pauseSong()
} else {
    playSong()
}
});

//change song event
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)

//song ends
audio.addEventListener('ended', nextSong);