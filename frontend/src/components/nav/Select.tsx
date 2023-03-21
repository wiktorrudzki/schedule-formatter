import { useEffect } from "react";
import Cookies from "universal-cookie";
import useGroups from "../../hooks/useGroups";
import { Groups } from "../../types";

type Props = {
  type: keyof Groups;
  groups: string[];
};

const Select = ({ groups, type }: Props) => {
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
    <select onChange={(e) => changeCurrentGroup(type, e.target.value)}>
      {groups.map((group) => (
        <option key={group} selected={group === currentGroups[type]}>
          {group}
        </option>
      ))}
    </select>
  );
};

export default Select;
