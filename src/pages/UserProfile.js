import React from "react";
import { useParams } from "react-router";

const UserProfile = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h2>View UserProfile {params ? params : "none"}</h2>
    </>
  );
};

export default UserProfile;
