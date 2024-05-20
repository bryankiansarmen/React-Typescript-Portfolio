import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/project" end>
              Project
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" end>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" end>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
