import NavItem from "./NavItem";

type NavItemProps = Omit<React.ComponentProps<typeof NavItem>, "group">;

type Props = NavItemProps & { groups: string[] };

const NavMenuList = ({ groups, isHide, setIsHide, type }: Props) => (
  <div className={isHide ? "groups" : "groups groups-show"}>
    {groups.map((group) => {
      return (
        <NavItem
          isHide={isHide}
          setIsHide={setIsHide}
          group={group}
          type={type}
        />
      );
    })}
  </div>
);

export default NavMenuList;
