const HOURS_IN_SECONDS = 3600;
const DAYS_IN_SECONDS = 24 * HOURS_IN_SECONDS;
const WEEKS_IN_SECONDS = 7 * DAYS_IN_SECONDS;
const YEARS_IN_SECONDS = 365 * DAYS_IN_SECONDS;

function time(seconds) {
  if (seconds === 0) return "0s"

  let tiempo = ''

  if (seconds >= YEARS_IN_SECONDS) {
    const years = Math.floor(seconds / YEARS_IN_SECONDS);
    seconds %= YEARS_IN_SECONDS;
    tiempo += years + "y ";
  }
  if (seconds >= WEEKS_IN_SECONDS) {
    const weeks = Math.floor(seconds / WEEKS_IN_SECONDS);
    seconds %= WEEKS_IN_SECONDS;
    tiempo += weeks + "w ";
  }

  if (seconds >= DAYS_IN_SECONDS) {
    const days = Math.floor(seconds / DAYS_IN_SECONDS);
    seconds %= DAYS_IN_SECONDS;
    tiempo += days + "d ";
  }
  if (seconds >= HOURS_IN_SECONDS) {
    const hours = Math.floor(seconds / HOURS_IN_SECONDS);
    seconds %= HOURS_IN_SECONDS;
    tiempo += hours + "h ";
  }
  if (seconds >= 60) {
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;
    tiempo += minutes + "m ";
  }
  if (seconds > 0) {
    
    tiempo += seconds + "s ";
  }

  return tiempo.trim()
}

module.exports = time;







