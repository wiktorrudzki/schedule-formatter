import { addHours, addMinutes, addRemaining } from "./createCells";
import "./template.css";

type Props = {
  rows: number;
  columns: number;
  daysOfWeek: string[];
};

const Template: React.FC<Props> = ({ rows, columns, daysOfWeek }) => {
  const grid = rows * columns;

  const date = new Date("December 14, 2026 06:45:00");
  const endDate = new Date("December 14, 2026 07:30:00");
  let hoursAndMinutes = date.getHours() + ":" + date.getMinutes();
  let endHoursAndMinutes = endDate.getHours() + ":" + endDate.getMinutes();

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

        if ((i % columns) * 2 === 0) {
          hoursAndMinutes = addMinutes(date);
          hoursAndMinutes = addRemaining(hoursAndMinutes);
          endHoursAndMinutes = addMinutes(endDate);
          endHoursAndMinutes = addRemaining(endHoursAndMinutes);
        } else if (i % columns === 0) {
          hoursAndMinutes = addHours(date);
          hoursAndMinutes = addRemaining(hoursAndMinutes);
          endHoursAndMinutes = addMinutes(endDate);
          endHoursAndMinutes = addRemaining(endHoursAndMinutes);
        }

        return i % columns === 0 ? (
          <div key={i} className="cell">
            {hoursAndMinutes} - {endHoursAndMinutes}
          </div>
        ) : (
          <div key={i} className="cell"></div>
        );
      })}
    </div>
  );
};

export default Template;
