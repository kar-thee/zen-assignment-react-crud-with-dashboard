import React from "react";
import DataFetch from "../config/DataFetch";

export const userData = React.createContext(null);

export default function UserContext({ children }) {
  const [state, setState] = React.useState(null);

  React.useEffect(() => {
    DataFetch()
      .then((val) => setState(val))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <userData.Provider value={state}>{children}</userData.Provider>
    </>
  );
}
