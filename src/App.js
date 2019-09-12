import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {Nav, Navbar, NavItem, Container, Row, Col} from 'react-bootstrap';

class App extends Component {
    render() {
      return (
        <div width="100%">
          <Container className="container-full">
            <Row>
              <Col>
                <h2>Testing 1/1</h2>
              </Col>
              <Col>
                <h2>Test 1/2</h2>
              </Col>
            </Row>

            <Row>
                <Col>
                  <Header />
                </Col>
            </Row>

            <Row>
              <Col>
                Test
              </Col>
              <Col>
                Footer
              </Col>
            </Row>
            </Container>
        </div>
      );
    }
}

export default App;

class Header extends Component {
    render() {
      return (
        <BrowserRouter>
          <div>
            <span className="navigator">
            <Navbar bg="dark" width=".25">
              <Nav  className="flex-column">
                <NavItem><Link to="/home">Home</Link></NavItem>
                <NavItem><Link to="/about">About</Link></NavItem>
                <NavItem><Link to="/values">Values</Link></NavItem>
                <NavItem><Link to="/programming">Programming</Link></NavItem>
                <NavItem><Link to="/projects">Project Management</Link></NavItem>
              </Nav>
            </Navbar>
            </span>
            <span className="textfield">
            <Switch>
              <Route exact path="/home" component={Home}/>
              <Route exact path="/projects" component={Projects}/>
              <Route exact path="/programming" component={Programming}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/values" component={Values}/>
            </Switch>
          </span>
          </div>
        </BrowserRouter>
      );
    }
}

class Home extends Component {
    render() {
      return (
        <div>
          <h2>Home</h2>
        </div>
      )
    }
}

class Projects extends Component {
    render() {
      return (
        <div>
          <h2>PM Description</h2>
        </div>
      )
    }
}

class Programming extends Component {
    render() {
      return (
        <div>
          <h2>Programming Description</h2>
        </div>
      )
    }
}

class About extends Component {
    render() {
      return (
        <div>
          <h2>About</h2>
        </div>
      )
    }
}

class Values extends Component {
    render() {
      return (
        <div>
          <h2>values</h2>
        </div>
      )
    }
}
