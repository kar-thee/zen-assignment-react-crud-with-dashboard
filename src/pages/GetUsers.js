import React, { useState, useEffect } from "react";
import Dashboard from "../Dashboard";
import DataFetch from "../config/DataFetch";

const GetUsers = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    DataFetch().then((val) => setState(val));
  }, []);
  if (state) {
    console.log("state", state);
  }
  return (
    <Dashboard>
      <div className="container-fluid">
        <div className="container-sm">Hello</div>
        {state ? state.map((d, i) => <li key={i}>{d.name}</li>) : "loading..."}
      </div>
    </Dashboard>
  );
};

export default GetUsers;
