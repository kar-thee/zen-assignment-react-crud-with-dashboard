import React from "react";
import { useParams } from "react-router";

import Dashboard from "../Dashboard";
import UserForm from "./UserForm";

import "../context/UserContext";
const EditUserProfile = () => {
  const params = useParams();
  console.log(params);

  return (
    <Dashboard>
      <h2>Edit UserProfile {params.id}</h2>
      {/* <UserForm data={} submitForm={}/> */}
    </Dashboard>
  );
};

export default EditUserProfile;
