import "./template.css";

type Props = {
  rows: number;
  columns: number;
  daysOfWeek: string[];
};

const Template: React.FC<Props> = ({ rows, columns, daysOfWeek }) => {
  const grid = rows * columns;

  const date = new Date("December 14, 2026 06:30:00");
  let hoursAndMinutes = date.getHours() + ":" + date.getMinutes();

  function addHours(hours = 1) {
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);
    return date.getHours() + ":" + date.getMinutes();
  }

  function addMinutes(minutes = 45) {
    date.setMinutes(date.getMinutes() + minutes);

    return date.getHours() + ":" + date.getMinutes();
  }

  function addRemaining() {
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

  return (
    <div className="template">
      {[...Array(grid)].map((e, i) => {
        if (i === 0) {
          return <div key={i} className="cell"></div>;
        }

        if (i < 6) {
          return (
            <div key={i} className="cell">
              {daysOfWeek[i - 1]}
            </div>
          );
        }

        if (i % 12 === 0) {
          hoursAndMinutes = addMinutes();
          hoursAndMinutes = addRemaining();
        } else if (i % 6 === 0) {
          hoursAndMinutes = addHours();
          hoursAndMinutes = addRemaining();
        }

        return i % columns === 0 ? (
          <div key={i} className="cell">
            {hoursAndMinutes}
          </div>
        ) : (
          <div key={i} className="cell"></div>
        );
      })}
    </div>
  );
};

export default Template;
