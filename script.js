// Функция обратный-таймер принимает параметр time в формате "2019-07-12" и парметр id который является оберткой для таймера

function timer(id, time) {
    let deadline = time;

    function getTimeRemaining(a) {
        let t = Date.parse(a) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    function setClock(id, endtime) {
        let timer = document.getElementById('timer'),
            hours = timer.querySelector('.timer__hours'),
            minutes = timer.querySelector('.timer__minutes'),
            seconds = timer.querySelector('.timer__seconds'),
            interval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(interval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }
    setClock(id, deadline);
}

timer('timer', '2019-07-04');