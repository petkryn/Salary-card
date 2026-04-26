import { Header } from "./Component/Header";
import { EmployeeSearch } from "./Component/EmployeeSearch";
import { SalaryList } from "./Component/SalaryList";
import { EmployeesAddForm } from "./Component/EmployeesAddForm";
import { Component } from "react";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Alex C.", salary: 800, increase: false, id: 1 },
        { name: "John D.", salary: 1200, increase: true, id: 2 },
        { name: "Sara M.", salary: 950, increase: false, id: 3 },
        { name: "Michael B.", salary: 1500, increase: true, id: 4 },
        { name: "Emma W.", salary: 1100, increase: false, id: 5 },
        { name: "David K.", salary: 2000, increase: true, id: 6 },
        { name: "Olivia P.", salary: 1300, increase: false, id: 7 },
        { name: "Daniel R.", salary: 1700, increase: true, id: 8 },
        { name: "Sophia L.", salary: 900, increase: false, id: 9 },
        { name: "James T.", salary: 1600, increase: true, id: 10 },
      ],
    };
  }

  onAdd = (name, salary) => {
    const newUser = {
      name: name,
      salary: salary,
      increase: false,
      id: this.state.data.length + 1,
    };
    this.setState(({ data }) => {
      return { data: [...data, newUser] };
    });
  };

  render() {
    const { data } = this.state;
    const total = data.length;
    const increased = data.filter((item) => item.increase).length;

    return (
      <div className="container">
        <Header total={total} increased={increased} />
        {/* <EmployeeSearch /> */}
        <SalaryList data={data} />
        <EmployeesAddForm onAdd={this.onAdd} />
      </div>
    );
  }
}
