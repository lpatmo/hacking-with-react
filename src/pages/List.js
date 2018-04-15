import React from "react";
import { NavLink, Link } from "react-router-dom";

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>
          You are here:&nbsp;&nbsp;
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </p>
        <p>Please choose a repository from the list below.</p>
        <ul>
          <li>
            <Link to="/detail/react">React</Link>
          </li>
          <li>
            <Link to="/detail/react-native">React Native</Link>
          </li>
          <li>
            <Link to="/detail/jest">Jest</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default List;
