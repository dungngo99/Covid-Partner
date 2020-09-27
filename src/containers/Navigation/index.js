import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as routes from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../redux/actions/auth.action'
// import { Navbar, Nav, NavItem, NavLink } from 'shards-react';

const Navigation = () => {
  const dispatch = useDispatch()

  let isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const loading = useSelector(state => state.auth.loading)

  const handleLogout = (event) => {
    dispatch(authActions.logout())
  }

  isAuthenticated = true

  const authLinks = (
    <Nav>
      <Nav.Link as={Link} to={`${routes.DASHBOARD}`}>
        <i className='fas fa-chart-line'></i> Homepage
      </Nav.Link>
      <Nav.Link as={Link} to={`${routes.ACCOUNT}`}>
        <i className="fas fa-sign-out-alt" /> Account
      </Nav.Link>
      <Nav.Link as={Link} to={`${routes.DISCUSSION}`}>
        <i className="fas fa-sign-out-alt" /> Discussion
      </Nav.Link>
      <Nav.Link as={Link} to={`${routes.DONATION}`}>
        <i className="fas fa-sign-out-alt" /> Donation
      </Nav.Link>
      <Nav.Link as={Link} to={`${routes.TIPS}`}>
        <i className="fas fa-sign-out-alt" /> Tips
      </Nav.Link>
      <Nav.Link as={Link} to={`${routes.LOGOUT}`} onClick={(event) => handleLogout(event)}>
        <i className="fas fa-sign-out-alt" /> Logout
      </Nav.Link>
    </Nav>
  )

  const publicLinks = (
    <Nav>
      <Nav.Link as={Link} to={`${routes.SIGN_UP}`}>
        <i className="fas fa-registered" /> Register
      </Nav.Link>
      <Nav.Link as={Link} to={`${routes.SIGN_IN}`}>
        <i className="fas fa-sign-in-alt" /> Login
      </Nav.Link>
    </Nav>
  )

  return (
    <Navbar fixed="top" className="Navbar-style" >
      <Navbar.Brand as={Link} to="/" className="mr-auto d-flex align-items-center"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        {!loading && <div>{isAuthenticated ? authLinks : publicLinks}</div>}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;
