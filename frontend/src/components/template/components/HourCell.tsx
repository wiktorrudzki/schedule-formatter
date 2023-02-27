import { addMinutes, addRemaining } from "../createCells";

type Props = {
  hoursAndMinutes: string;
  endHoursAndMinutes: string;
  i: number;
};

const HourCell = ({ hoursAndMinutes, endHoursAndMinutes, i }: Props) => {
  //   if (i % columns === 0) {
  //     hoursAndMinutes = addMinutes(date);
  //     hoursAndMinutes = addRemaining(hoursAndMinutes);
  //     endHoursAndMinutes = addMinutes(endDate);
  //     endHoursAndMinutes = addRemaining(endHoursAndMinutes);
  //     breakTime++;
  //   }
  return (
    <div key={i} className="cell">
      {hoursAndMinutes} - {endHoursAndMinutes}
    </div>
  );
};

export default HourCell;
