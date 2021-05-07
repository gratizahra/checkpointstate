import React from 'react';
import ReactDOM from 'react-dom';
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
          count:0,
    };
  }
  
  componentDidMount() {
    Person.show = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    Person.hide = `You clicked ${this.state.count} times`;
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
        <img src="/images.png"/>
        </div>
        )
  }
      <div className='btn'>
        <button className="btn" onClick={this.showPerson}>Click here</button>
        <p>You clicked {this.state.count} times</p>
        <button className="btn" onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
        </div>
    </div>
  );
}
}
 export default Person;
   
  
