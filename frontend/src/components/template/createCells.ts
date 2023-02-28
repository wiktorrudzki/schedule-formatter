export const addMinutes = (date: Date, minutes = 45) =>
  new Date(date.setMinutes(date.getMinutes() + minutes)).getHours() +
  ":" +
  date.getMinutes();

export const addRemaining = (hoursAndMinutes: string) =>
  hoursAndMinutes
    .split(":")
    .map((element, index) =>
      element.length === 1 && index === 0
        ? "0" + element
        : element.length === 1 && index === 1
        ? element + "0"
        : element
    )
    .join(":");
