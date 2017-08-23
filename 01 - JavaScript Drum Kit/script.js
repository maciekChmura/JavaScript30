function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //select audio element from html
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //select key div
    //console.log(key);
    if (!audio) return; //stop funcion from executing
    audio.currentTime = 0; //rewind to start of the audio file >> neede if audio is playing from prewious event
    audio.play();
    key.classList.add('playing') //add class .playing to key div
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip if event is not a transform
    //console.log(e.propertyName);
    this.classList.remove('playing'); //remove class .playing
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //run removeTransition after transform time

window.addEventListener('keydown', playSound);
