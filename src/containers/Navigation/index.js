import React, { useState } from 'react'
// import { Nav, Navbar } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import * as routes from '../constants'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../redux/actions/auth.action'
import { 
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from 'shards-react';

const Navigation = () => {
  const dispatch = useDispatch()

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const loading = useSelector(state => state.auth.loading)

  const location = useLocation().pathname;

  const [navDropdown, setNavDropdown] = useState(false);

  const handleLogout = (event) => {
    dispatch(authActions.logout())
  }

  const authLinks = (
    <Navbar sticky={"sticky"} expand={true} type="light">
      <Nav navbar>
        <NavItem><NavLink active={location === routes.DASHBOARD} href={routes.DASHBOARD}>
          Home
        </NavLink></NavItem>
        <NavItem><NavLink active={location === routes.DISCUSSION} href={routes.DISCUSSION}>
          Discussions
        </NavLink></NavItem>
        <NavItem><NavLink active={location === routes.DONATION} href={routes.DONATION}>
          Donate
        </NavLink></NavItem>
        <NavItem><NavLink active={location === routes.TIPS} href={routes.TIPS}>
          COVID Tips
        </NavLink></NavItem>
      </Nav>
      <Nav navbar className="ml-auto">
        <NavItem><NavLink href={routes.CHAT}>
          DMs
        </NavLink></NavItem>
        <NavItem className="nav-dropdown">
          <Dropdown
            open={navDropdown}
            toggle={() => setNavDropdown(!navDropdown)}
          >
            <DropdownToggle nav caret>
              FirstName
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem><NavLink href={routes.ACCOUNT}>
                My Profile
              </NavLink></DropdownItem>
              <DropdownItem><NavLink href={"/"} onClick={(event) => handleLogout(event)}>
                Sign out
              </NavLink></DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavItem>
      </Nav>
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
