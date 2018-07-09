import React,{Component} from 'react';

class Presentdate extends Component
{
constructor (props){
  super(props);
  this.state ={
    date_now : new Date()
  }
}

render(){
  return(
    <div>
  <h2>  Today date is:  {this.state.date_now.toLocaleDateString()}</h2>
    </div>
  )
}

}
export default Presentdate;
