import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Typist from 'react-typist';
import styled from 'styled-components'

const ItemWrapper = styled.div`
  
  
  button{
    display:none
    background-color:white
  }
  &:hover{
    .noteButtons{
      display:flex
      justify-content:center
      align-items:center
      
      button{
        display:block
      }
    }  
  }
  .true{
    color:black
    .Typist{
      color:#fd7e14
    }
  }
  
`


export default class TodosListItem extends React.Component {

  state={
    active:`${false}`
  }
  toggleClass = () => {
    if(this.state.active=='false'){
      this.setState({
        active:`${true}`
      })
    } else {
      this.setState({
        active:`${false}`
      })
    }
  }

  render(){
    let note;
    if((typeof this.props.name)=="object"){
      note = this.props.name
    }else {
      note = this.props.name
    }
    console.log(note)
    return(
            <ItemWrapper>
              <div className={this.state.active}>
                <span className="MyTypist notes">
                  <Typist>{note}</Typist>
                  <div className="noteButtons">
                    <button onClick={this.toggleClass}>Mark as completed</button>
                    <button onClick={()=>this.props.onDelete(note)}>Exterminate</button>
                  </div>
                </span>
              </div>
            </ItemWrapper>
    );
  }

};
