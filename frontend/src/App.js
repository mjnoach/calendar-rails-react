import React from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      appointments: []
    }
  }

  componentDidMount () {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/appointments'
    })
      .done((data) => {
        console.log(data);
        this.setState({
          appointments: data
        });
      })
  }  

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.appointments.map(appointment => {
              return (
                <p key={appointment.id}>{appointment.title}</p>
              )
            })}
          </a>
        </header>
      </div>
    )    
  }
}