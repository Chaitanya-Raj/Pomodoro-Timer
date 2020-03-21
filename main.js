let start = document.getElementById('start');
let pause = document.getElementById('pause');
let stop = document.getElementById('stop');
let restart = document.getElementById('restart');
let countDownDate = new Date();
countDownDate.setSeconds(countDownDate.getSeconds() + 10);
countDownDate = countDownDate.getTime();


function timer() {

    var x = setInterval(function () {
        let now = new Date().getTime();

        let distance = countDownDate - now;

        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (minutes.toString().length < 2) minutes = "0" + minutes;
        if (seconds.toString().length < 2) seconds = "0" + seconds;

        document.getElementById("time-left").innerHTML = minutes + " : " + seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("time-left").innerHTML = "Time for a break";
        }
    }, 1000);
}

function reTimer() {
    let countDownDate = new Date();
    countDownDate.setSeconds(countDownDate.getSeconds() + 10);
    countDownDate = countDownDate.getTime();
    timer();
}

function stopTimer() {
    clearInterval(x);
}
start.addEventListener('click', timer);
restart.addEventListener('click', reTimer);
stop.addEventListener('click', stopTimer);
// pause.addEventListener('click', pause);
