import React, { Component } from 'react';
import './App.css';

export default class ItemAddForm extends Component {

  maxId=100;
  state = {
    id:100,
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { label } = this.state;
    this.setState({ label: '' });
    const cb = this.props.onItemAdded || (() => {});
    cb(this.state.label);

  };

  render() {
    return (
      <form
        onSubmit={this.onSubmit}>

        <input type="text"
               className="formInput"
               value={this.state.label}
               onChange={this.onLabelChange}
               placeholder="What needs to be done?" />

        <button type="submit"
                >Add</button>
      </form>
    );
  }
}
