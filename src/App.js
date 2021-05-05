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

  };
  }
  showPerson = () => {
    this.setState({ ...this.state, show: !this.state.show });
  };
  render() {
    return (
      <div>
      <h1>{this.state.FullName}</h1>
      <h2>{this.state.Profession}</h2>
        <p>{this.state.Bio}</p>
        <img src="/images.png"/>
        <button type="button" className="btn" onClick={this.showPerson}>Click here</button>
    </div>
  );
}
}
   export default Person;
  