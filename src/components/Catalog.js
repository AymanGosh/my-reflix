import React, { Component } from "react";

import Movie from "./Movie";

class Catalog extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>Catalog</div>
        <div>
          <Movie />
        </div>
      </div>
    );
  }
}

export default Catalog;
