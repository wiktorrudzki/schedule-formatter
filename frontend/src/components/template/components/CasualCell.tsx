type Props = {
  dataToDisplay: string[];
  incrementer: number;
  i: number;
};

const CasualCell = ({ dataToDisplay, incrementer, i }: Props) => (
  <div key={i} className="cell">
    {dataToDisplay[incrementer] === " okienko "
      ? ""
      : dataToDisplay[incrementer]}
  </div>
);

export default CasualCell;
