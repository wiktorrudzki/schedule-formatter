import useGroups from "../../../hooks/useGroups";
import { Groups } from "../../../types";

type Props = {
  type: keyof Groups;
  group: string;
  isHide: boolean;
  setIsHide: (arg: any) => void;
};

const NavItem = ({ group, type, isHide, setIsHide }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, changeCurrentGroup] = useGroups();

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
};

export default NavItem;
