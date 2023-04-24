import react, { Component } from "react";
import "../styles/Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <h1 className="app-Title">r/Resume Builder</h1>
      </div>
    );
  }
}

export default Header;
