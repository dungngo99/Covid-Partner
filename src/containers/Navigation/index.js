import React from 'react'
// import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as routes from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../redux/actions/auth.action'
import { 
  Navbar,
  Nav,
  NavItem,
  NavLink
} from 'shards-react';

const Navigation = () => {
  const dispatch = useDispatch()

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const loading = useSelector(state => state.auth.loading)

  const handleLogout = (event) => {
    dispatch(authActions.logout())
  }

  const authLinks = (
    <Navbar sticky type="light">
      <Nav navbar pills>
        <NavItem><NavLink href={routes.DASHBOARD}>
            Home
        </NavLink></NavItem>
        <NavItem><NavLink href={routes.DISCUSSION}>
          Discussions
        </NavLink></NavItem>
        <NavItem><NavLink href={routes.DONATION}>
          Donate
        </NavLink></NavItem>
        <NavItem><NavLink href={routes.TIPS}>
          COVID Tips
        </NavLink></NavItem>
      </Nav>
      <Nav navbar>
        Sign out
      </Nav>
          {/* <Nav.Link as={Link} to={`${routes.HOME}`}>
            <i className='fas fa-chart-line'></i> Homepage
          </Nav.Link>
          <Nav.Link as={Link} to={`${routes.ACCOUNT}`}>
            <i className="fas fa-sign-out-alt" /> Account
          </Nav.Link>
          <Nav.Link as={Link} to='/' onClick={(event) => handleLogout(event)}>
            <i className="fas fa-sign-out-alt" /> Logout
          </Nav.Link> */}
    </Navbar>
  );

  const publicLinks = (
    <Nav>
      {/* <Nav.Link as={Link} to={`${routes.SIGN_UP}`}>
        <i className="fas fa-registered" /> Register
      </Nav.Link>
      <Nav.Link as={Link} to={`${routes.SIGN_IN}`}>
        <i className="fas fa-sign-in-alt" /> Login
      </Nav.Link> */}
    </Nav>
  )

  // if (!loading) {
  //   if (isAuthenticated) {
  //     return authLinks;
  //   }
  //   return publicLinks;
  // }
  return authLinks;
  // return (
  //   <div>
  //     {/* <Navbar fixed="top" className="Navbar-style" >
  //       <Navbar.Brand as={Link} to="/" className="mr-auto d-flex align-items-center"></Navbar.Brand>
  //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //       <Navbar.Collapse id="basic-navbar-nav">
  //         <Nav className="mr-auto"></Nav> */}
  //         {!loading && <>{isAuthenticated ? authLinks : publicLinks}</>}
  //       {/* </Navbar.Collapse>
  //     </Navbar> */}
  //   </div>
  // )
}

export default Navigation;
