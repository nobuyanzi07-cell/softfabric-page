import { NavLink } from "react-router";

function Navigation1() {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
        })}
      >
        About
      </NavLink>
      <NavLink
        to="/crazy/route/223311"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
        })}
      >
        Crazy route
      </NavLink>
    </div>
  );
}

export default Navigation1;
