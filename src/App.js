import React from 'react';
import Bar from './Component/bar/bar'
import './App.css';
import Main from './Component/Main/main'
class App extends React.Component {
state={
  login:false
}
Login=()=>{
  this.setState({login:!this.state.login})
}
  render(){
  
  return (
    <div className="App">
     <Bar Login={this.Login}/>
     <Main login={this.state.login} Login={this.Login}/>
    </div>
  )
}
}

export default App;
