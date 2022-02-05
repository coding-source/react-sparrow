import React, { Component } from 'react'
import {Navbar,Container,Nav}from 'react-bootstrap'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blog from './Blog'
import Contact from './Contact';
import Courses from '../Courses/Card'
import Events from './Events'
import Teams from '../Teams/Teams';
import Home from '../Home/Home'

export default class NavBar extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
  <Container>
  <Navbar.Brand as={Link} to={"/"}>🐦Fortunate Sparrows</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
      <Nav.Link as={Link} to={"/Blog"}>Blog</Nav.Link>
      <Nav.Link as={Link} to={"/Courses"}>Courses</Nav.Link>
      <Nav.Link as={Link} to={"/Events"}>Events</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link as={Link} to={"/Teams"}>Teams</Nav.Link>
      <Nav.Link eventKey={2} as={Link} to={"Contact"}>
       Contact
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
      <div>
      <Switch>
          <Route path="/Blog">
            <Blog />
          </Route>
          <Route path="/Courses">
            <Courses />
          </Route>
          <Route path="/Events">
            <Events />
          </Route>
          <Route path="/Teams">
            <Teams />
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      </Router>
    );
  }
}
