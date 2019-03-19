import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';
import TodoForm from './todo'
import TodoList from "./create-from";
import EverydayImage from './everyday-image.js';
import EverydayMovie from './everyday-movie.js';


export default class App extends Component {


  id = uuid();
  constructor(props){
    super(props);

  }
  state = {
    items:[],
    setOfIds:[],
    lastId:localStorage.length+1
  };
  onDelete = (name) => {
    console.log('In development')
    // for(let i =0;i<=localStorage.length;i++){
    //   if(name==localStorage.getItem(localStorage.key(i))){
    //     console.log(name,localStorage.key(i),localStorage.getItem(localStorage.key(i)))
    //     localStorage.removeItem(localStorage.key(i))
    //   }
    // }
    // this.setState({
    //   lastId:localStorage.length
    // })
  }
  componentDidMount(){
    for (let i = 0; i <=localStorage.length ; i++){
      console.log(localStorage.key(i))
      this.setState({
        setOfIds:this.state.setOfIds.push(localStorage.key(i))
      })
    }
    this.setState({

    })
  }
  onItemAdded = (label) => {

    let id = this.state.lastId+1

    this.setState((state) => {

      const item = this.createItem(label);
      return { items: [...state.items, item],lastId:id };
    });

    const array = localStorage.setItem(`${id}`,JSON.stringify(label));
    this.state.items.push(array);

  };

  createItem(label) {
    return {
      id: this.maxId++,
      label
    };
  }



  render() {


    const {items} = this.state;
    console.log(localStorage.getItem(localStorage.key(1)))
    let array = [];
    let arrayLength = localStorage.length;
    for (let i = 1; i <=arrayLength ; i++){
      array.push(localStorage.getItem(i+1))
      console.log(localStorage.getItem(`${this.state.setOfIds[i]}`))
    }
    console.log(array)
    return (
      <div className="container main-div">
        <h1>Space TODOs</h1>
        <TodoForm
          onItemAdded={this.onItemAdded}
        />
        <TodoList
          onDelete={this.onDelete}

          items = {array}
          />
        <EverydayImage />
      </div>
    );
  };


};

