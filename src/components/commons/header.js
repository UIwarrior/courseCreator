import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GoogleAuth from '../googleAuth';
import './header.css';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand><Link to="/">Enhance your course</Link></Navbar.Brand>
        <Nav>
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          <Nav.Link><Link to="/enroll">Enroll</Link></Nav.Link>
          <Nav.Link><Link to="/admin">Admin</Link></Nav.Link>
          <Nav.Link><Link to="/dashboard">Profile Dashboard</Link></Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <GoogleAuth />
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;