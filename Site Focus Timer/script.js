import Sounds from "./sounds.js"

const sounds = Sounds()


// Variables

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

buttonPlay.addEventListener('click', function(){
    
    if (minutesDisplay.textContent <=0 && secondsDisplay.textContent <=0){
        resetTimer()
    }

    buttonPlay.classList.add('hide');
    buttonPause.classList.remove('hide');

    buttonSet.classList.add('hide');
    buttonStop.classList.remove('hide');

    sounds.pressButton()

    countdown()

})

function countdown(){

   timerTimeOut = setTimeout(function(){
        
        let seconds = Number(secondsDisplay.textContent);
        let minutes = Number(minutesDisplay.textContent);
        
        if (seconds <= 0) {
            seconds = 60;

          // minutesDisplay.textContent = String(minutes -1).padStart(2, "0");
           updateTimerDisplay(String(minutes-1),seconds)
        }

        // quando acaba o timer

        if (minutes <= 0 && seconds <=1) {
            
            // secondsDisplay.textContent = String(seconds -1).padStart(2, "0");

            sounds.bgAudio.pause()
            buttonSoundOn.classList.add('hide')
            buttonSoundOff.classList.remove('hide')
            

            sounds.timeEnd()

            updateTimerDisplay(minutes,String(seconds-1))
            
            resetControls();

            return;
        }
        
        secondsDisplay.textContent = String(seconds -1).padStart(2, "0");

        countdown()
    }, 1000)
    
}

function resetTimer(){
    updateTimerDisplay(minutes,0)
    clearTimeout(timerTimeOut)
}

function resetControls(){
    buttonStop.classList.add('hide')
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    buttonSet.classList.remove('hide')
}

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

buttonPause.addEventListener('click', function(){

    sounds.pressButton()

    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')

    clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click',function(){

    sounds.pressButton()
    resetTimer()
    resetControls()
})

buttonSoundOn.addEventListener('click', function(){

    sounds.bgAudio.pause()
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
})

buttonSoundOff.addEventListener('click', function(){
    
    sounds.bgAudio.play()
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
})





// funcao updateTimerDisplay
buttonSet.addEventListener('click', function(){

    minutes = Number(prompt('Quantos minutos?')) || 40
    updateTimerDisplay(minutes,0)

})