import React from "react";
import TodosListItem from "./list";
import Typist from 'react-typist';

export default class TodoList extends React.Component{


  constructor(props){
    super(props);
  }

  render() {
    console.log(this.props.items)
    const elements = (this.props.items || []).map((comment) => {

      return (
        <li>
          <TodosListItem name={comment} onDelete={this.props.onDelete}/>
        </li>
      )
    });

    return (<ul className="todo-list list-group list-unstyled">{elements}</ul>);
  }
};

