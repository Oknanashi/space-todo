import React, { Component } from 'react';
import './App.css';
import TodoForm from './todo'
import CardImage from './card-image'



export default class EverydayImage extends React.Component{

  constructor(){
    super();
    this.state = {
      title:'',
      url:'',
    }
  }
  componentDidMount(){
    let data = fetch('https://api.nasa.gov/planetary/apod?api_key=2kZhniEdqDZmS8bkcJQmYsxNM5sYg5PZM4SJXn5D')
      .then(response=>{
        if(response.ok){
          return response.json();
        }
        throw Error
      })
      .then(json=>{

        this.setState({
            title:json.title,
            url:json.url,
            explanation:json.explanation,
        })

      })
      .catch(this.setState({
        title:"You've got an error, sorry",
        url:'https://images.pexels.com/photos/2422/sky-earth-galaxy-universe.jpg?cs=srgb&dl=astronomy-discovery-earth-2422.jpg&fm=jpg',
        explanation:"Better luck next time",
      }))

  }
  render(){

    const {title,url,explanation}=this.state;
    const months = ["January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"];
    let currentDate = new Date();
    let todaysMonth = months[currentDate.getMonth()] ;
    let todaysDay = currentDate.getDate();

    return(
        <div className="d-block m-2 iotd">
          <h1>Nasa image of the day</h1>
          <h1>{todaysMonth} {todaysDay}</h1>
          <h2>{title}</h2>
          <CardImage image={url} />
          <p className="">{explanation}</p>
        </div>

    );
  };

};
