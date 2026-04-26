import { Component } from "react";
import { SalaryCard } from "./SalaryCard";

export class SalaryList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const mapData = this.props.data.map((item) => {
      const { name, salary, increase, id } = item;
      return (
        <SalaryCard key={id} name={name} salary={salary} increase={increase} />
      );
    });

    return <ol className="salary_card">{...mapData}</ol>;
  }
}
