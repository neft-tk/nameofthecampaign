import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
      <div className="navbar-main">
        <Link to="/">
            <h2>Home</h2>
        </Link>
        <Link to="/admin">
            <h2>Admin</h2>
        </Link>
      </div>
  );
}
