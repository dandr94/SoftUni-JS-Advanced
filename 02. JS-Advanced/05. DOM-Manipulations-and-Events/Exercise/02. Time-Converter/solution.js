function attachEventsListeners() {
  let ratios = {
    days: 1,
    hours: 24,
    minutes: 1440,
    seconds: 86400,
  };

  function eFactory(tag, type, handler) {
    if (type) {
      return document.getElementById(tag).addEventListener(type, handler);
    }
    return document.getElementById(tag);
  }

  function convert(value, unit) {
    let inDays = value / ratios[unit];
    let data = {
      days: inDays,
      hours: inDays * ratios.hours,
      minutes: inDays * ratios.minutes,
      seconds: inDays * ratios.seconds,
    };

    return data;
  }

  let days = eFactory("days");
  let hours = eFactory("hours");
  let minutes = eFactory("minutes");
  let seconds = eFactory("seconds");

  eFactory("daysBtn", "click", convertHandler);
  eFactory("hoursBtn", "click", convertHandler);
  eFactory("minutesBtn", "click", convertHandler);
  eFactory("secondsBtn", "click", convertHandler);

  function convertHandler(event) {
    let input = event.target.parentElement.querySelector('input[type="text"]');
    let time = convert(Number(input.value), input.id);
    
    days.value = time.days;
    hours.value = time.hours;
    minutes.value = time.minutes;
    seconds.value = time.seconds;
  }
}
