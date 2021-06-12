function countdownTimer() {
    let countDown;
    const timerDisplay = document.querySelector(".display__time-left");
    const endTime = document.querySelector(".display__end-time");
    const buttons = document.querySelectorAll("[data-time]");

    function timer(seconds) {
        clearInterval(countDown);
        const nowTime = Date.now();
        const thenTime = nowTime + seconds * 1000;
        displayTimeLeft(seconds);
        displayEndTime(thenTime);

        countDown = setInterval(() => {
            const secondLeft = Math.round((thenTime - Date.now()) / 1000);
            if (secondLeft < 0) {
                clearInterval(countDown);
                return;
            }
            displayTimeLeft(secondLeft);
        }, 1000);
    }

    function displayTimeLeft(seconds) {
        const minute = Math.floor(seconds / 60);
        const hours = Math.floor(minute / 60);
        const minutes = minute % 60;
        const second = seconds % 60;
        const display = `${hours < 10 ? "0" : ""}${hours}:${
            minutes < 10 ? "0" : ""
        }${minutes}:${second < 10 ? "0" : ""}${second}`;
        document.title = display;
        timerDisplay.textContent = display;
    }

    function displayEndTime(timestamp) {
        const end = new Date(timestamp);
        const hours = end.getHours() % 12;
        const minutes = end.getMinutes();
        endTime.textContent = `Be Right Back At ${hours}:${
            minutes < 10 ? "0" : ""
        }${minutes}`;
    }

    function startTimer() {
        const seconds = this.dataset.time;
        timer(seconds);
    }

    buttons.forEach((button) => button.addEventListener("click", startTimer));
    document.customForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const mins = this.minutes.value;
        if (mins >= 0) {
            timer(mins * 60);
            this.reset();
        }
    });
}
window.addEventListener("DOMContentLoaded", countdownTimer);
