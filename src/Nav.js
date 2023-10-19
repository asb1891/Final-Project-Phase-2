import { NavLink } from "react-router-dom";

export default function Nav() {
  const navStyle = {
    fontSize: "22pt",
    textAlign: "center",
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // This will vertically center the items if the height is fixed
    backgroundColor: "#F8DFC1", // Giving it a background color for contrast
    color: "#fff",
  };

  const linkSpacing = {
    marginRight: "20px", // or any other value you prefer
    marginLeft: "20px", // or any other value you prefer
  };

  return (
    <nav className="flex justify-between" style={navStyle}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-2xl hover:italic ${isActive && "font-semibold"}`
        }
        style={linkSpacing}
      >
        Home
      </NavLink>
      <NavLink
        to="/About"
        className={({ isActive }) =>
          `text-2xl hover:italic ${isActive && "font-semibold"}`
        }
        style={linkSpacing}
      >
        About Finnegan
      </NavLink>
      <div className="flex items-center">
        <NavLink
          to="/AdoptionResources"
          className={({ isActive }) =>
            `px-1.5 hover:underline ${isActive && "font-semibold"}`
          }
          style={linkSpacing}
        >
          Adopt A Pet!
        </NavLink>
      </div>
    </nav>
  );
}
