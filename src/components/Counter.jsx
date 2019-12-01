import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 5,
    imgUrl: "https://picsum.photos/400",
    tags: []
  };
  style = {
    fontSize: 40,
    fontWeight: "bold"
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
    this.setState({ count: this.state.count + product });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.state.count} </span>

        <button
          onClick={() => {
            this.handleIncrement(5);
          }}
          className="btn btn-primary"
        >
          Increament
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let clases = "badge m-2 badge-";
    clases += this.state.count === 0 ? "warning" : "primary";
    return clases;
  }

  formateCount() {
    const { count } = this.state;

    return this.state.count === 0 ? "ZERO" : this.state.count;
  }
}

export default Counter;
