import { useContext } from "react";
import { userDataUpdater } from "./UserContext";

const UseDataUpdater = () => {
  const context = useContext(userDataUpdater);
  context();
};

export default UseDataUpdater;
