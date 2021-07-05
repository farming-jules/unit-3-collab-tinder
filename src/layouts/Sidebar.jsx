import React from "react";
import { NavLink } from 'react-router-dom'
import { Link } from "react-router-dom";
import { DropdownButton, MenuItem } from "react-bootstrap";

class SideBar extends React.Component {
  state = { active: !this.props.open || true };

  render = () => {
    const { open } = this.props;
    const active = !open;

    return (
      <nav id="sidebar" className={active ? "active" : null}>
        <div class="sidebar-header">
          <h3>Bootstrap Sidebarddd</h3>
        </div>

        <ul class="list-unstyled components">
          <p>Dummy Heading</p>
          <li class="active">
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
            >
              Home
            </a>
            <ul class="collapse list-unstyled" id="homeSubmenu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <DropdownButton
              bsStyle={"Pages".toLowerCase()}
              title={"Pages"}
              key={1}
              id={`dropdown-basic-1`}
            >
              <MenuItem eventKey="1">
                <Link to="/pages/1">Page 1</Link>
              </MenuItem>
              <MenuItem eventKey="2">
                <Link to="/pages/2">Page 2</Link>
              </MenuItem>
              <MenuItem eventKey="3">
                <Link to="/pages/3">Page 3</Link>
              </MenuItem>
            </DropdownButton>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    );
  };
}

export default SideBar;
