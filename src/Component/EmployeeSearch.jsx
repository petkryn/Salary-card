import { Component } from "react";

export class EmployeeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  onUpdateSearch = (e) => {
    const value = e.target.value;

    this.setState({
      inputValue: value,
    });

  };

  render() {
    const { inputValue } = this.state;

    return (
      <div>
        <input
          type="text"
          placeholder="Пошук співробітника"
          value={inputValue}
          onChange={this.onUpdateSearch}
        />

        <div>
          <button>Усі</button>
          <button>на підвищення</button>
          <button>дохід більше 1000$</button>
        </div>
      </div>
    );
  }
}
