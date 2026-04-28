import { Component } from "react";
import "./SalaryCard.css";

export class SalaryCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, salary, increase, id, onDelete } = this.props;
    return (
      <li className="info_card">
        <div className="employees">
          <p>{name}</p>
          <p>{salary}</p>
          <p>{increase}</p>
        </div>

        <div className="buttons">
          <button
            type="button"
            className="delete_btn"
            onClick={() => onDelete(id)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="5"
                y1="5"
                x2="19"
                y2="19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="19"
                y1="5"
                x2="5"
                y2="19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <button type="button" className="bonus_btn">
            <svg
              viewBox="0 0 100 100"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="45" fill="#e0a96d" />

              <circle cx="35" cy="35" r="5" fill="#4b2e2e" />
              <circle cx="60" cy="30" r="4" fill="#4b2e2e" />
              <circle cx="65" cy="60" r="5" fill="#4b2e2e" />
              <circle cx="40" cy="65" r="4" fill="#4b2e2e" />

              <circle cx="30" cy="30" r="2" fill="#fff" opacity="0.6" />
            </svg>
          </button>
        </div>
      </li>
    );
  }
}
