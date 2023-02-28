import Cookies from "universal-cookie";
import { useState, useEffect } from "react";
import { Groups } from "../../../types";
import useGroups from "../../../hooks/useGroups";
import NavMenuList from "./NavMenuList";
import NavMenuTitle from "./NavMenuTitle";

type Props = {
  type: keyof Groups;
  groups: string[];
};

function NavMenu(props: Props) {
  const [isHide, setIsHide] = useState(true);
  const [currentGroups] = useGroups();

  useEffect(() => {
    const cookies = new Cookies();
    const date = new Date();

    date.setFullYear(date.getFullYear() + 1);

    cookies.set(props.type, currentGroups[props.type], {
      path: "/",
      expires: date,
    });

    //eslint-disable-next-line
  }, [currentGroups[props.type]]);

  return (
    <ul>
      <NavMenuTitle setIsHide={setIsHide} isHide={isHide} {...props} />
      <NavMenuList isHide={isHide} setIsHide={setIsHide} {...props} />
    </ul>
  );
}

export default NavMenu;
