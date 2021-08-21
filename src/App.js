import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Hannachi Mouadh",
      bio: "Lorum Ipsum",
      profession: "Web Developper",
      imgSrc: "./mouadh.jpg",
      date: new Date(),
      show: true,
    };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  
  render() {
    var handleChange = e => {
      this.setState({show:!this.state.show});
    }
    const x = this.state.show;
  return (
    <div>
      <br/><br/>
        <button onClick={ handleChange }>{x?'Hide':'Show'}</button>
        <br/><br/><br/>
        {x && (
          <div>
          <h1>My name is: {this.state.fullName}</h1>
          <h2>Bio: {this.state.bio}</h2>
          <h2>My profession: {this.state.profession}</h2>
          <h2>It's : {this.state.date.toLocaleTimeString()}</h2>
        <img src={this.state.imgSrc} alt="person"></img>
        </div>
        )}
      </div>
  );
}
}

export default App;
