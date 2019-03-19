import React, { Component } from 'react';
import './App.css';

export default class EverydayMovie extends React.Component{

  constructor(){
    super();
    this.state = {
      image:'',
      title:'',
      randomID : this.randomInteger(1050000,4900000)
    };



  }
  randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }


  componentDidMount(){

    let movie = fetch(`https://api.themoviedb.org/3/movie/latest?api_key=d4c86d3d23078bb5e3ea14ae379a2726&language=en-US`)
      .then(response=>{
        return response.json();
      })
      .then(json=>{
        this.setState({
          image:`https://image.tmdb.org/t/p/w500${json.poster_path}`,
          title:json.original_title
        })
      })

}


  render(){
    const {image,title} = this.state;


    return(
      <div className="d-block">
       <h1>Random Movie</h1>
        <h2>{title}</h2>
        <img src={image}/>

      </div>

    );
  };

};
