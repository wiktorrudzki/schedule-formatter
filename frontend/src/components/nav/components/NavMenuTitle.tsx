import useGroups from "../../../hooks/useGroups";
import NavItem from "./NavItem";

type Props = Omit<React.ComponentProps<typeof NavItem>, "group">;

const NavMenuTitle = ({ isHide, setIsHide, type }: Props) => {
  const [currentGroups] = useGroups();

  return (
    <div className={isHide ? "group-input" : "group-input group-input-show"}>
      <span className="group-input-span">{currentGroups[type]}</span>
      <button
        className="group-input-btn"
        onClick={() => setIsHide((prev: boolean) => !prev)}
      >
        &#9776;
      </button>
    </div>
  );
};

export default NavMenuTitle;
