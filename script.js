function countdown() {
  /*Data*/
  const christmas = 'December 25, 2021'
  const currentDate = new Date()
  const ChristmasDate = new Date(christmas)
  const diffCount = (ChristmasDate - currentDate) / 1000

  /*Elements*/

  const dayEl = document.getElementById('days')
  const hoursEl = document.getElementById('hours')
  const minutesEl = document.getElementById('minutes')
  const secondsEl = document.getElementById('seconds')

  const days = Math.floor(diffCount / 3600 / 24)
  const hours = Math.floor(diffCount / 3600 % 24)
  const minutes = Math.floor(diffCount / 60) % 60
  const seconds = Math.floor(diffCount) % 60

  dayEl.innerHTML = formatTime(days)
  hoursEl.innerHTML = formatTime(hours)
  minutesEl.innerHTML = formatTime(minutes)
  secondsEl.innerHTML = formatTime(seconds)

}

function formatTime(time) {
  return time < 10 ? (`0${time}`) : time
}

window.countdown()
setInterval(countdown, 1000)
