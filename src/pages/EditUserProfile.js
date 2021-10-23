import React from "react";
import { useParams } from "react-router";

import Dashboard from "../Dashboard";

const EditUserProfile = () => {
  const params = useParams();
  console.log(params);
  return (
    <Dashboard>
      <h2>Edit UserProfile</h2>
    </Dashboard>
  );
};

export default EditUserProfile;
