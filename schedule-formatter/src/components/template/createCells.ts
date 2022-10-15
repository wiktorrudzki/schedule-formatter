export function addHours(date: Date, hours = 1) {
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);
  return date.getHours() + ":" + date.getMinutes();
}

export function addMinutes(date: Date, minutes = 45) {
  date.setMinutes(date.getMinutes() + minutes);

  return date.getHours() + ":" + date.getMinutes();
}

export function addRemaining(hoursAndMinutes: string) {
  let hoursAndMinutesList = hoursAndMinutes.split(":");
  hoursAndMinutesList = hoursAndMinutesList.map((element, index) => {
    if (element.length === 1 && index === 0) {
      return "0" + element;
    } else if (element.length === 1 && index === 1) {
      return element + "0";
    } else return element;
  });
  return hoursAndMinutesList.join(":");
}
