import { Component } from "react";
import "./EmployeeSearch.css";

export class EmployeeSearch extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { onSearch } = this.props;
    return (
      <div className="search_card">
        <input
          className="input_search"
          type="text"
          placeholder="Пошук співробітника"
          onChange={(e) => onSearch(e)}
        />

        <div className="buttons">
          <button className="input_btn-color">Усі</button>
          <button className="input_btn">на підвищення</button>
          <button className="input_btn">дохід більше 1000$</button>
        </div>
      </div>
    );
  }
}
