import React, {Component} from 'react';

class Todaytime extends Component{
  constructor(){
    super();
    this.state = {
      time: new Date()
    }
  }
componentDidMount(){
  setInterval(()=>this.tick(),1000);
}
tick(){
this.setState ({
  time: new Date()
})
}
  render(){
    return(
      <h2>Present time: {this.state.time.toLocaleTimeString()}</h2>
    )
  }
}
export default Todaytime;
