import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <ul className="mb-2">
      <li>
        <Link to="/">Users</Link>
      </li>
      <li>
        <Link to="/addUser">Add User</Link>
      </li>
    </ul>
  );
};

export default Header;
