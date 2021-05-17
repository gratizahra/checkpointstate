import React from 'react';
import './App.css';
class Person extends React.Component { 
  constructor() {
    super();
    this.state = {
          FullName: "Zahra Grati",
          Profession: "Im a full stack Js developer",
          Bio: "Im still learning coding",
          imgSrc:"/images.png",
          show:false,
          time:0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1,
      }));
    }, 1000);
  }
  showPerson = () => {
    this.setState({ ...this.state, show: !this.state.show });
  }
  render(){
    return (
      <div className='Intro'>
        <div class="Introduction">
          <h2>Hello, welcom to my page please click on the button to check my profile</h2>
        </div>
        {this.state.show && (
          
        <div class="Show profile">
      <h1>{this.state.FullName}</h1>
      <h2>{this.state.Profession}</h2>
        <p>{this.state.Bio}</p>
        <img src='images.png' alt="image"/>
        </div>
        )
  }
      <div className='btn'>
        <button className="btn" onClick={this.showPerson}>Click here</button>
        <div className="counter">
          The last component was mounted since: {this.state.time} seconds
        </div>
  
        </div>
    </div>
  );
}
}
 export default Person;
   
