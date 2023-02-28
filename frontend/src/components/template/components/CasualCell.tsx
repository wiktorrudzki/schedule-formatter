type Props = {
  dataToDisplay: string[];
  incrementer: number;
  i: number;
};

const CasualCell = ({ dataToDisplay, incrementer, i }: Props) => (
  <div
    key={i}
    className="cell"
    style={
      dataToDisplay[incrementer] && dataToDisplay[incrementer].includes(" W ")
        ? { backgroundColor: "#FFCCCB" }
        : {}
    }
  >
    {dataToDisplay[incrementer] === " okienko "
      ? ""
      : dataToDisplay[incrementer]}
  </div>
);

export default CasualCell;
