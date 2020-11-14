import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numWords: ['', 'one', 'two', 'three', 'four', 'five', 'six'],
    val: 3 //this is just to help the animation at the beginning of loading the page
  }
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.props.handleClick(this.props.idx)
  }
  render() {
    const { locked, val, numWords, disabled, rolling } = this.props
    let classes = `Die fas fa-dice-${numWords[val]} fa-5x`
    if (locked) classes += ' Die-locked'
    if (rolling) classes += ' Die-rolling'
    return (
      // <button
      //   className="Die"
      //   style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
      //   onClick={this.handleClick}
      // >
      //   {this.props.val}
      // </button>
      <i className={classes} onClick={this.handleClick} disabled={disabled} />
    );
  }
}

export default Die;
