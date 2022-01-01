import React, { Component } from "react";
import User from "./User";

class Landing extends Component {
  render() {
    let users = this.props.users;
    return (
      <div>
        <div>Who's watching?</div>
        <ul>
          {users.map((u) => (
            <User user={u} key={u.name} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Landing;
