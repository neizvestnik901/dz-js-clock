const secondArrow = document.querySelector('.s'),
    minuteArrow = document.querySelector('.m'),
    hourArrow = document.querySelector('.h'),
    hourBox = document.querySelector('.hours'),
    minuteBox = document.querySelector('.minutes');

function times() {

    let time = new Date(),
        seconds = time.getSeconds(),
        minutes = time.getMinutes(),
        hours = time.getHours();

    hourArrow.style = `transform: rotate(${hours * 30}deg)`
    minuteArrow.style = `transform: rotate(${minutes * 6}deg)`
    secondArrow.style = `transform: rotate(${seconds * 6}deg)`

    hourBox.innerHTML = hours < 10 ? '0' + hours : hours
    minuteBox.innerHTML = minutes < 10 ? '0' + minutes : minutes

    setTimeout(() => times(), 1000)
}
times()

const links = document.querySelectorAll('.tabsItem')
const tabs = document.querySelectorAll('.tabsContentItem')

console.log(links);

links.forEach((item, i) => {
    item.addEventListener('click', () => {
        removeActive()
        item.classList.add('active')
        tabs[i].classList.add('active')
    })
})

function removeActive() {
    links.forEach((item, i) => {
        item.classList.remove('active')
        tabs[i].classList.remove('active')
    })
}

let stopWatch;
let elapsedSeconds = 0;
const startBlock = document.querySelector('.stopwatch__btn');
const hoursBlock = document.querySelector('.stopwatch__hours');
const minutesBlock = document.querySelector('.stopwatch__minutes');
const secondsBlock = document.querySelector('.stopwatch__seconds');

startBlock.addEventListener('click', () => {
    if (startBlock.textContent === 'start') {
        startBlock.textContent = 'stop';

        stopWatch = setInterval(() => {
            elapsedSeconds++;

            const hours = Math.floor(elapsedSeconds / 3600);
            const minutes = Math.floor((elapsedSeconds % 3600) / 60);
            const seconds = elapsedSeconds % 60;

            hoursBlock.textContent = hours;
            minutesBlock.textContent = minutes;
            secondsBlock.textContent = seconds;
        }, 1000);

    } else if (startBlock.textContent === 'stop') {
        clearInterval(stopWatch);
        startBlock.textContent = 'clear';
    } else if (startBlock.textContent === 'clear') {
        elapsedSeconds = 0;
        hoursBlock.textContent = 0;
        minutesBlock.textContent = 0;
        secondsBlock.textContent = 0;
        startBlock.textContent = 'start';
    }
});