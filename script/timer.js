let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;

function updateTimer() {
    document.getElementById('timer').textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

document.getElementById('incrementHour').addEventListener('click', incrementHours);
document.getElementById('decrementHour').addEventListener('click', decrementHours);
document.getElementById('incrementMinute').addEventListener('click', incrementMinutes);
document.getElementById('decrementMinute').addEventListener('click', decrementMinutes);
document.getElementById('startTimer').addEventListener('click', startTimer);
document.getElementById('stopTimer').addEventListener('click', stopTimer);
document.getElementById('resetTimer').addEventListener('click', resetTimer);

function incrementHours() {
    hours++;
    updateTimer();
}

function decrementHours() {
    if (hours > 0) {
        hours--;
        updateTimer();
    }
}

function incrementMinutes() {
    minutes++;
    if (minutes === 60) {
        minutes = 0;
        incrementHours();
    }
    updateTimer();
}

function decrementMinutes() {
    if (minutes > 0) {
        minutes--;
    } else if (hours > 0) {
        hours--;
        minutes = 59;
    }
    updateTimer();
}

function startTimer() {
    if (!interval) {
        interval = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    if (hours === 0) {
                        clearInterval(interval);
                        interval = undefined;
                        alert('Timer ended!');
                    } else {
                        hours--;
                        minutes = 59;
                        seconds = 59;
                    }
                } else {
                    minutes--;
                    seconds = 59;
                }
            } else {
                seconds--;
            }
            updateTimer();
        }, 1000);
    }
}

function stopTimer() {
    if (interval) {
        clearInterval(interval);
        interval = undefined;
    }
}

function resetTimer() {
    stopTimer();
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateTimer();
}

updateTimer();
