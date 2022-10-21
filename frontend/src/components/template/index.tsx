import { useEffect, useState } from "react";
import { addMinutes, addRemaining } from "./createCells";
import "./template.css";
import { dataFormatter } from "./dataFormatter";
import { Actions, CurrentGroups } from "../nav/module";
import axios from "axios";

type Props = {
  rows: number;
  columns: number;
  daysOfWeek: string[];
  currentGroups: CurrentGroups;
  currentGroupsDispatch: React.Dispatch<Actions>;
};

const Template: React.FC<Props> = ({
  rows,
  columns,
  daysOfWeek,
  currentGroups,
}) => {
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
    if (currentGroups.k === "12K1") {
      axios.get("https://schedule-formatter.wiktorrudzki.pl/api/12k1").then(({ data }) => {
        setData(
          data
            .join()
            .split(",")
            .map((element: string) => element.trim())
        );
      });
    } else {
      axios.get("https://schedule-formatter.wiktorrudzki.pl/api/12k2").then(({ data }) => {
        setData(
          data
            .join()
            .split(",")
            .map((element: string) => element.trim())
        );
      });
    }
  }, [currentGroups.k]);

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

        if (dataToDisplay[incrementer] !== " zajecia dodatkowe ") {
          if (dataToDisplay[incrementer]) {
            dataToDisplay[incrementer] = dataToDisplay[incrementer]
              .split("---")
              .filter((element) => {
                return (
                  element.includes(`(${currentGroups.week})`) ||
                  element.includes(`-${currentGroups.week}1`) ||
                  element.includes(`-${currentGroups.week.toLowerCase()}1`) ||
                  element.includes(`-${currentGroups.week}2`) ||
                  element.includes(`-${currentGroups.week.toLowerCase()}2`)
                );
              })
              .toString();
          }

          if (dataToDisplay[incrementer]) {
            dataToDisplay[incrementer] = dataToDisplay[incrementer]
              .split(",")
              .filter((element) => {
                if (element.includes(currentGroups.gl)) {
                  return true;
                } else if (element.includes("L0")) {
                  return false;
                } else {
                  return true;
                }
              })
              .toString();
          }

          if (dataToDisplay[incrementer]) {
            dataToDisplay[incrementer] = dataToDisplay[incrementer]
              .split(",")
              .filter((element) => {
                if (element.includes(currentGroups.gk)) {
                  return true;
                } else if (element.includes("K0")) {
                  return false;
                } else {
                  return true;
                }
              })
              .toString();
          }

          if (dataToDisplay[incrementer]) {
            dataToDisplay[incrementer] = dataToDisplay[incrementer]
              .split(",")
              .filter((element) => {
                if (element.includes(currentGroups.gp)) {
                  return true;
                } else if (element.includes("P0")) {
                  return false;
                } else {
                  return true;
                }
              })
              .toString();
          }
        }

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
