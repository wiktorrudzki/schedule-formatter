import Cookies from "universal-cookie";
import { useState, useEffect } from "react";
import { Groups } from "../../types";
import useGroups from "../../hooks/useGroups";

type Props = {
  type: keyof Groups;
  groups: string[];
};

function Items({ groups, type }: Props) {
  const [isHide, setIsHide] = useState(true);
  const [currentGroups, changeCurrentGroup] = useGroups();

  useEffect(() => {
    const cookies = new Cookies();
    const date = new Date();

    date.setFullYear(date.getFullYear() + 1);

    cookies.set(type, currentGroups[type], {
      path: "/",
      expires: date,
    });

    //eslint-disable-next-line
  }, [currentGroups[type]]);

  return (
    <ul>
      <div className={isHide ? "group-input" : "group-input group-input-show"}>
        <span className="group-input-span">{currentGroups[type]}</span>
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
                changeCurrentGroup(type, group);
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
}

export default Items;
