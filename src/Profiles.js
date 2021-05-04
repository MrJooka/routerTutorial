import React from "react";
import { NavLink, Route } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  const activeStyle = {
    background: "black",
    color: "white",
  };
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <NavLink activeClassName="Actived" activeStyle={activeStyle} to="/profiles/jooka">
            jooka
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/oc">
            oc
          </NavLink>
        </li>
      </ul>
      <Route path="/profiles" exact render={() => <div>사용자를 선택해주세요.</div>} />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
