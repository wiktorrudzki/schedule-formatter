import Cookies from "universal-cookie";
import { useState, useEffect } from "react";
import { Actions } from "./module";

type Props = {
  groups: string[];
  currentGroupsDispatch: React.Dispatch<Actions>;
  type: "WEEK" | "K" | "GL" | "GK" | "GP";
  currentGroup: string;
};

const Items: React.FC<Props> = ({
  groups,
  currentGroupsDispatch,
  type,
  currentGroup,
}) => {
  const [isHide, setIsHide] = useState(true);
  const [currentChoice, setCurrentChoice] = useState(currentGroup);

  useEffect(() => {
    const cookies = new Cookies();
    const date = new Date();

    date.setFullYear(date.getFullYear() + 1);

    cookies.set(type, currentChoice, {
      path: "/",
      expires: date,
    });

    currentGroupsDispatch({ type: type, newGroup: currentChoice });

    //eslint-disable-next-line
  }, [currentChoice]);

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
              key={group}
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
