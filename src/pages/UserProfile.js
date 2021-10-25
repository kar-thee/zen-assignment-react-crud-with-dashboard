import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import Dashboard from "../Dashboard";
import { userData } from "../context/UserContext";

const UserProfile = () => {
  const params = useParams();
  console.log(params);
  const [state, setState] = useState([]);

  const value = useContext(userData);
  const indexPos = params.id - 1;

  useEffect(() => {
    setState(new Array(value[indexPos]));
  }, [indexPos, value]);

  return (
    <Dashboard>
      <h2> UserProfileID {params ? params.id : "none"}</h2>
      <hr />
      <h2>
        View UserProfileData{" "}
        {state
          ? state.map((user) => (
              <div key={user.id}>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
                <p>{user.gender}</p>
              </div>
            ))
          : null}
      </h2>
      <div className="container-fluid">
        <div className="container-sm">
          {/* things to do : introduce context api UserContext file to make userdata 
          accessible to all components so we can get value wherever needed,
           then implement it in profile and create edit and delete buttons 
           also continue with create users */}
        </div>
      </div>
    </Dashboard>
  );
};

export default UserProfile;
