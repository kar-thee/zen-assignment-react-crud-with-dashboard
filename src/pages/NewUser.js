import React, { useState, useContext } from "react";
import { useHistory } from "react-router";

import Dashboard from "../Dashboard";
import PostData from "../config/PostData";
import { userDataUpdater } from "../context/UserContext";
import UserForm from "./UserForm";

const NewUser = () => {
  const initialValue = {
    name: "",
    email: "",
    country: "",
    job: "",
    phone: "",
  };

  const history = useHistory();
  const [state, setState] = useState(initialValue);
  const contextFun = useContext(userDataUpdater);

  const submitForm = async (ev, stateValue) => {
    ev.preventDefault();
    const result = await PostData(stateValue);
    console.log(result);
    if (result.status === 201) {
      setState(initialValue);
      await contextFun();
      history.replace("/dashboard/all-users");
    } else {
      alert("error");
    }
  };
  return (
    <Dashboard>
      <UserForm data={state} submitForm={submitForm} />
    </Dashboard>
  );
};

export default NewUser;
