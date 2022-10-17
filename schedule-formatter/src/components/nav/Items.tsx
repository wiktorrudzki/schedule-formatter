import { useState, useEffect } from "react";
import { Actions, CurrentGroups } from "./module";

type Props = {
  groups: string[];
  currentGroups: CurrentGroups;
  currentGroupsDispatch: React.Dispatch<Actions>;
  type: "WEEK" | "K" | "GL" | "GK" | "GP";
};

const Items: React.FC<Props> = ({ groups, currentGroups, currentGroupsDispatch, type }) => {
  const myGroups = ["N", "12K2", "L04", "P02", "K02"];

  const [isHide, setIsHide] = useState(true);
  const [currentChoice, setCurrentChoice] = useState(groups[0]);

  useEffect(() => {
    groups.forEach(group => {
      myGroups.forEach(myGroup => {
        if (myGroup === group) {
          setCurrentChoice(myGroup);
          return;
        }
      })
    })
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    currentGroupsDispatch({ type: type, newGroup: currentChoice })
  
    //eslint-disable-next-line
  }, [currentChoice])

  return (
    <ul>
        <div
          className={isHide ? "group-input" : "group-input group-input-show"}
        >
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
