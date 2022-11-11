let seconds = 0;
let minutes = 0;
let hours = 0;
let docSeconds = document.querySelector(".Seconds")
let docMinutes = document.querySelector(".Minutes")
let docHours = document.querySelector(".Hours")
let border = document.querySelector(".Timer")
let pauseBtn = document.querySelector(".Pause")
let restartBtn = document.querySelector(".Restart")
let textarea = document.querySelector(".textSeconds");
let textareaMin = document.querySelector(".textMinutes");
let textareaHours = document.querySelector(".textHours");
let CurrentHours = document.querySelector(".CurrentHours")
let CurrentMinutes = document.querySelector(".CurrentMinutes")
let CurrentSeconds = document.querySelector(".CurrentSeconds")
let MuteButton = document.querySelector(".mute")
let setHours = document.querySelector(".setHours");
let setMinutes = document.querySelector(".setMinutes");
let setSeconds = document.querySelector(".setSeconds");



let currentVol = 0.1;









let pause = true;
let restart = false;
let clicked = 0;

const audio = new Audio("audio/clock.wav")
const alarm = new Audio("audio/alarm.wav")

function setup() {

    audio.volume = currentVol;

}


function timer() {
    setInterval(function () {
        if (pause === false) {
            seconds += 1;
        }
        if (seconds >= 60) {
            border.classList.toggle("minutes")
            setTimeout(function () {
                border.classList.remove("minutes")
            }, 1000)
            minutes += 1
            seconds = 0;
        }
        if (minutes >= 60) {
            border.classList.add(".hours");
            setTimeout(function () {
                border.classList.remove("hours")
            }, 1000)
            hours += 1
            minutes = 0;
        }
        docSeconds.textContent = seconds
        docMinutes.textContent = minutes;
        docHours.textContent = hours;
        textarea.textContent = seconds
        textareaMin.textContent = minutes;
        textareaHours.textContent = hours;





    }, 1000)
}

function CurrentTime() {
    let today = new Date();
    CurrentHours.textContent = today.getHours();
    CurrentMinutes.textContent = today.getMinutes();
    CurrentSeconds.textContent = today.getSeconds();


}


function buttonPressed() {


    if (pause == false) {
        audio.play();
        pauseBtn.addEventListener("click", function () {
            pause = true;
            pauseBtn.textContent = "Play"

        })
    }

    if (pause == true) {
        audio.pause()
        pauseBtn.addEventListener("click", function () {
            pause = false
            pauseBtn.textContent = "Pause"
        })
    }

    restartBtn.addEventListener("click", function () {
        alarm.pause();
        setHours.textContent = "";
        setMinutes.textContent = "";
        setSeconds.textContent = ""
        border.classList.add("restart")
        setTimeout(function () {
            border.classList.remove("restart")
        }, 1000)
        seconds = 0;
        minutes = 0;
        hours = 0;
    })

    // document.addEventListener("keydown", function (e) {
    //     if (e.key == "ArrowUp") {
    //         currentVol += 0.1;
    //     } else if (e.key == "ArrowDown") {
    //         currentVol -= 0.1;
    //     }
    // })


    // MuteButton.addEventListener("click", function () {


    // })







}



function setTimers() {
    let HoursSet = parseInt(setHours.textContent);
    let MinutesSet = parseInt(setMinutes.textContent)
    let SecondsSet = parseInt(setSeconds.textContent)
    if (HoursSet == hours && MinutesSet == minutes && seconds == SecondsSet) {
        pause = true;
        alarm.play();
        setSeconds.classList.add("restart")
        setMinutes.classList.add("restart")
        setHours.classList.add("restart")

    }


}





setInterval(function () {

    buttonPressed();
    setup();
    CurrentTime();
    setTimers();


}, 1000)

timer();