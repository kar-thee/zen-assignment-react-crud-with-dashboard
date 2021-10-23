import React, { useState, useEffect } from "react";
import Dashboard from "../Dashboard";
import DataFetch from "../config/DataFetch";
import { Link } from "react-router-dom";

const GetUsers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    DataFetch().then((val) => setData(val));
  }, []);
  //componentdidmount

  if (data) {
    console.log("state", data);
  }
  return (
    <Dashboard>
      <div className="container-fluid p-0 p-md-auto m-0 m-md-auto">
        <div className="container-sm row w-auto m-md-auto mx-1 p-1 p-md-auto justify-content-center">
          {/* {data ? data.map((d, i) => <li key={i}>{d.name}</li>) : "loading..."} */}
          {data
            ? data.map((d) => (
                <div className="col m-md-2 p-md-2 py-sm-2 py-2" key={d.id}>
                  <Link to={`/dashboard/view-profile/${d.id}`}>
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        src={d.avatar}
                        alt={d.name}
                        className="card-img-top  img-thumbnail"
                        width="40px"
                        height="75px"
                      />

                      <div className=" card-body">
                        <div className="card-title">{d.name}</div>
                        <div className="card-subtitle">{d.email}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            : "loading..."}
        </div>
      </div>
    </Dashboard>
  );
};

export default GetUsers;
