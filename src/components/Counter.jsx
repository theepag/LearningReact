import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  renderTags() {
    if (this.state.tags === 0) return <p> There are no tags !!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}> {tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = product => {
    this.setState({ value: this.state.value + product });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.state.value} </span>

        <button
          onClick={() => {
            this.handleIncrement(1);
          }}
          className="btn btn-primary"
        >
          Increament
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let clases = "badge m-2 badge-";
    clases += this.state.value === 0 ? "warning" : "primary";
    return clases;
  }

  formateCount() {
    const { count } = this.state;

    return this.state.count === 0 ? "ZERO" : this.state.count;
  }
}

export default Counter;
