const checkFreeTime = (element: string) =>
  ["zajecia dodatkowe", "okienko"].some((e) => e === element);

export const dataFormatter = (data: string[], dataToDisplay: string[]) => {
  data.forEach((element, index) => {
    if (element === "<br>") return;
    dataToDisplay.push(element);
    if (
      ["-p", "-n", "-L"].some((e) => e === element.slice(-2)) ||
      checkFreeTime(element)
    ) {
      data[index + 1] !== "<br>" || checkFreeTime(element)
        ? dataToDisplay.push("break")
        : dataToDisplay.push("---");
    }
  });

  return dataToDisplay.join(" ").split("break");
};
