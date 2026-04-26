import { Component } from "react";
import "./Header.css";

export class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { total, increased } = this.props;

    return (
      <div className="header">
        <h2>Облік співробітників компанії</h2>
        <p>Загальна кількість співробітників: {total}</p>
        <p>Премію отримають: {increased}</p>
      </div>
    );
  }
}
