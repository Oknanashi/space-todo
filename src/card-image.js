import React, { Component } from 'react';
import './App.css';

export default class CardImage extends React.Component{

  constructor(props){
    super(props);

  }


  render(){
    if((this.props.image).includes('youtube')){
      return (
        <iframe
        height={600}
        src={this.props.image}
        width={800}>

      </iframe>
      )
    }else{
      return(
        <img width={800}
             height={600}
             src={this.props.image} />
      )
    }


  }

}
