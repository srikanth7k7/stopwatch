import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PresetDate from './presendate.js'
import TodayTime from './Todaytime.js'
import StartStop from './startandstop.js'

class App extends Component {
  constructor(){
    super();
    this.state = {
      countdown_time: 'November 24, 2018',
      newcountdown:'',
      dakys: '21', hours: '32', minutes: '23', seconds: '34'

    }

    }
  buttonPassingDate(){
    this.setState({
      countdown_time: this.state.newcountdown
    })
  }

// getTime (){
//   var delta = Math.abs( - date_now) / 1000;
// }

render(){
  // {this.getTime()}
  return (
    <div>
      <PresetDate />
      <TodayTime/>
    {/* <h1>Today Date is: {this.state.date}</h1> */}
      count down to {this.state.countdown_time}<br/>
      <h1>days:{this.state.dakys}, hours:{this.state.hours}, minutes:{this.state.minutes}, seconds:{this.state.seconds} </h1>
      <input placeholder="enter date..." onChange={event=>this.setState({newcountdown: event.target.value})}/>
      <button onClick={()=>this.buttonPassingDate()}>Submit</button><br/>
      {/*
      <button>Start</button><br/>
      <button>Stop</button> */}
      <StartStop/>
    </div>
  )
}
}

export default App;
