import { useEffect, useState } from "react";
import { addMinutes, addRemaining } from "./createCells";
import "./template.css";
import { dataFormatter } from "./dataFormatter";
import axios from "axios";
import useGroups from "../../hooks/useGroups";
import { daysOfWeek } from "../../data/days";
import { HourCell, CasualCell } from "./components";

type Props = {
  rows: number;
  columns: number;
};

const Template: React.FC<Props> = ({ rows, columns }) => {
  const [currentGroups] = useGroups();

  const [data, setData] = useState<string[]>([]);
  let dataToDisplay: string[] = [];
  let incrementer = -1;
  let breakTime = 1;

  const date = new Date("December 14, 2026 06:45:00");
  const endDate = new Date("December 14, 2026 07:30:00");
  let hoursAndMinutes = date.getHours() + ":" + date.getMinutes();
  let endHoursAndMinutes = endDate.getHours() + ":" + endDate.getMinutes();

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + currentGroups.k)
      .then(({ data }) => {
        setData(
          data
            .join()
            .split(",")
            .map((element: string) => element.trim())
        );
      });
  }, [currentGroups.k]);

  dataToDisplay = dataFormatter(data, dataToDisplay);

  return (
    <div className="template">
      {[...Array(rows * columns)].map((e, i) => {
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
              .filter(
                (element) =>
                  element.includes(`(${currentGroups.week})`) ||
                  element.includes(`(${currentGroups.week.toLowerCase()})`) ||
                  element.includes(`-${currentGroups.week}`) ||
                  element.includes(`-${currentGroups.week.toLowerCase()}`) ||
                  element.includes(`-${currentGroups.week}1`) ||
                  element.includes(`-${currentGroups.week.toLowerCase()}1`) ||
                  element.includes(`-${currentGroups.week}2`) ||
                  element.includes(`-${currentGroups.week.toLowerCase()}2`)
              )
              .toString();
          }

          if (dataToDisplay[incrementer]) {
            dataToDisplay[incrementer] = dataToDisplay[incrementer]
              .split(",")
              .filter(
                (element) =>
                  element.includes(currentGroups.gl) ||
                  element.includes(currentGroups.gk) ||
                  element.includes(currentGroups.gp) ||
                  !(
                    element.includes("L0") ||
                    element.includes("K0") ||
                    element.includes("P0")
                  )
              )
              .toString();
          }
        }

        return i % columns === 0 ? (
          <HourCell
            hoursAndMinutes={hoursAndMinutes}
            endHoursAndMinutes={endHoursAndMinutes}
            i={i}
          />
        ) : (
          <CasualCell
            incrementer={incrementer}
            i={i}
            dataToDisplay={dataToDisplay}
          />
        );
      })}
    </div>
  );
};

export default Template;
