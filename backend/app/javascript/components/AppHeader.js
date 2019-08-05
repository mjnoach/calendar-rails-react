import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Nav} from 'react-bootstrap';

export default class AppHeader extends React.Component { 
	componentDidMount() {
		$.ajax({
			type: 'GET',
			url: 'http://localhost:3000/auth/validate_token',
			dataType: 'JSON',
			headers: JSON.parse(sessionStorage.getItem('user'))
		})
			.fail((data) => {
				this.props.history.push('/login');
			});
	}

	handleSignOut = (e) => {
		e.preventDefault();
		$.ajax({
			type: 'DELETE',
			url: 'http://localhost:3000/auth/sign_out',
			data: JSON.parse(sessionStorage.getItem('user'))
		})
			.done(() => {
				sessionStorage.removeItem('user');
				this.props.history.push('/login');
			});
	}

	render() {
		if (sessionStorage.getItem('user'))
			return(

        <div>
          <Navbar fixed="top" bg="light" expand="sm">
            <Navbar.Brand>
              <Link to='/'>React Calendar</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <Nav>
                <Navbar.Text>
                  <Nav.Item>{JSON.parse(sessionStorage.getItem('user')).uid}</Nav.Item>
                </Navbar.Text>
                <Nav.Item>
                  <Nav.Link eventKey={2} href='#' onClick={this.handleSignOut}>Sign out</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>      
			)
		else
			return(
				<Redirect to='/login' />
			)
	}
}