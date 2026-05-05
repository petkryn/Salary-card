import { Component } from "react";
import "./EmployeesAddForm.css";

export class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }
  render() {
    const { name, salary } = this.state;
    return (
      <>
        <div className="add_form">
          <h2>Додайте нового співробітника</h2>

          <form
            className="input_style"
            onSubmit={(e) => {
              e.preventDefault();
              this.props.onAdd(name, salary);
              this.setState({ name: "", salary: "" });
            }}
          >
            <input
              value={name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
              type="text"
              placeholder="Ім'я"
              name="name"
            />

            <input
              value={salary}
              onChange={(e) => {
                this.setState({ salary: e.target.value });
              }}
              type="text"
              placeholder="З/П в $"
              name="salary"
            />

            <button type="submit" className="btn">
              Додати
            </button>
          </form>
        </div>
      </>
    );
  }
}

