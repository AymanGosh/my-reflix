import React, { Component } from "react";
import { Link } from "react-router-dom";

class User extends Component {
  render() {
    let name = this.props.user.name;
    let img = this.props.user.img;
    return (
      <li>
        <Link to="/Catalog">
          <div style={{ backgroundImage: `url(${img})` }}></div>
          <span>{name}</span>
        </Link>
      </li>
    );
  }
}

export default User;
