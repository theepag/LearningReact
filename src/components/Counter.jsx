import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
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
        {" "}
        {this.state.tags.map(tag => (
          <li key={tag}> {tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
        <button className="btn btn-secondary btn-sm">Increament</button>
        <p> This react developing is awesome. thank you facebook </p>
        <img src={this.state.imgUrl} alt="" />
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
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
