export const dataFormatter = (data: string[], dataToDisplay: string[]) => {
  data.forEach((element, index) => {
    if (element === "<br>") return;
    dataToDisplay.push(element);
    if (
      element.slice(-2) === "-p" ||
      element.slice(-2) === "-n" ||
      element.slice(-2) === "-L" ||
      element === "zajecia dodatkowe" ||
      element === "okienko"
    ) {
      if (
        data[index + 1] !== "<br>" ||
        element === "zajecia dodatkowe" ||
        element === "okienko"
      ) {
        dataToDisplay.push("break");
      }
    }
  });

  return dataToDisplay.join(" ").split("break");
};
