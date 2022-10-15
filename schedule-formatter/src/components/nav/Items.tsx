import { useState } from "react";

type Props = {
  groups: string[];
};

const Items: React.FC<Props> = ({ groups }) => {
  const [isHide, setIsHide] = useState(true);
  const [currentChoice, setCurrentChoice] = useState(groups[0]);

  return (
    <ul>
      <div className={isHide ? "group-input" : "group-input group-input-show"}>
        <span className="group-input-span">{currentChoice}</span>
        <button
          className="group-input-btn"
          onClick={() => setIsHide((prev) => !prev)}
        >
          &#9776;
        </button>
      </div>
      <div className={isHide ? "groups" : "groups groups-show"}>
        {groups.map((group) => {
          return (
            <li
              onClick={() => {
                setCurrentChoice(group);
                setIsHide(true);
              }}
              className={isHide ? "li" : "li liShow"}
            >
              {group}
            </li>
          );
        })}
      </div>
    </ul>
  );
};

export default Items;
