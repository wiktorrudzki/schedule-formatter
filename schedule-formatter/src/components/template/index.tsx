import { useEffect, useState } from "react";
import { addMinutes, addRemaining } from "./createCells";
import "./template.css";
import { getData } from "../../data/Scrapper";
import { dataFormatter } from "./dataFormatter";

type Props = {
  rows: number;
  columns: number;
  daysOfWeek: string[];
};

const Template: React.FC<Props> = ({ rows, columns, daysOfWeek }) => {
  const grid = rows * columns;
  const [data, setData] = useState<string[]>([]);
  let dataToDisplay: string[] = [];
  let incrementer = -1;
  let breakTime = 1;

  const date = new Date("December 14, 2026 06:45:00");
  const endDate = new Date("December 14, 2026 07:30:00");
  let hoursAndMinutes = date.getHours() + ":" + date.getMinutes();
  let endHoursAndMinutes = endDate.getHours() + ":" + endDate.getMinutes();

  useEffect(() => {
    getData().then((result) => {
      setData(
        result
          .join()
          .split(",")
          .map((element) => element.trim())
      );
    });
  }, []);

  dataToDisplay = dataFormatter(data, dataToDisplay);

  return (
    <div className="template">
      {[...Array(grid)].map((e, i) => {
        if (i < columns) {
          return (
            <div key={i} className="cell">
              {daysOfWeek[i]}
            </div>
          );
        }

        if (i % columns === 0) {
          hoursAndMinutes = addMinutes(date);
          hoursAndMinutes = addRemaining(hoursAndMinutes);
          endHoursAndMinutes = addMinutes(endDate);
          endHoursAndMinutes = addRemaining(endHoursAndMinutes);
          breakTime++;
        }

        if (
          i % columns === 0 &&
          breakTime % 2 === 0 &&
          hoursAndMinutes !== "07:30"
        ) {
          hoursAndMinutes = addMinutes(date, 15);
          hoursAndMinutes = addRemaining(hoursAndMinutes);
          endHoursAndMinutes = addMinutes(endDate, 15);
          endHoursAndMinutes = addRemaining(endHoursAndMinutes);
        }

        if (i % columns !== 0) incrementer++;

        return i % columns === 0 ? (
          <div key={i} className="cell">
            {hoursAndMinutes} - {endHoursAndMinutes}
          </div>
        ) : (
          <div key={i} className="cell">
            {dataToDisplay[incrementer] === " okienko "
              ? ""
              : dataToDisplay[incrementer]}
          </div>
        );
      })}
    </div>
  );
};

export default Template;
