const getTime = dateTo => {
    let now = new Date(),
        time = (new Date(dateTo) - now + 1000) / 1000,
        seconds = ('0' + Math.floor(time % 60)).slice(-2),
        minutes = ('0' + Math.floor(time / 60 % 60)).slice(-2),
        hours = ('0' + Math.floor(time / 3600 % 24)).slice(-2),
        days = Math.floor(time / (3600 * 24));
    return {
        seconds,
        minutes,
        hours,
        days,
        time
    }
};
export default function countdown(dateTo, element) {
    const item = document.getElementById(element);
    const timerUpdate = setInterval( () => {
        let currenTime = getTime(dateTo);
        item.innerHTML = `  Year End in 
                            Days: ${currenTime.days}
                            H:${currenTime.hours}
                            : ${currenTime.minutes}
                            : ${currenTime.seconds}`;
        if (currenTime.time <= 1) {
            clearInterval(timerUpdate);
            alert('Fin de la cuenta '+ element);
        }
    }, 1000);
};