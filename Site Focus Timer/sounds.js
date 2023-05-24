export default function () {

    const buttonPressAudio = new Audio("./sounds/button-press.wav")
    const kitchenTimer = new Audio("./sounds/kichen-timer.mp3")
    const bgAudio = new Audio("./sounds/bg-audio.mp3")

    bgAudio.loop = true


    function pressButton (){
        buttonPressAudio.play()
    }

    function timeEnd(){
        kitchenTimer.play()
    }





    return {
        pressButton,
        timeEnd,
        bgAudio,
    }
}
