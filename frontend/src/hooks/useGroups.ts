import { useContext } from "react";
import { GroupsContext } from "./GroupsContext";

const useGroups = () => {
  const context = useContext(GroupsContext);

  if (context === undefined)
    throw new Error("Context cannot be used without provider");

  return context;
};

export default useGroups;
