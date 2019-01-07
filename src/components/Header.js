import React from 'react';
import logo from '../logo.svg';

import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

import {
  Tabs, Tab, TabList, TabPanel
} from 'react-tabs';

const Header = () => (
  <header>
    <Navbar fixed="top" color="light" light expand="xs" className="border-bottom border-gray bg-white" style={{ height: 80 }}>
      <Container>
        <Row noGutters className="position-relative w-100 align-items-center">

          <Col className="d-none d-lg-flex justify-content-start">
            <Nav className="mrx-auto" navbar>

              <NavItem className="d-flex align-items-center">
  
              </NavItem>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">Train</NavLink>
              </NavItem>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">Battle</NavLink>
              </NavItem>

              <NavItem className="d-flex align-items-center">
                <NavLink className="font-weight-bold" href="/">Leaderboard</NavLink>
              </NavItem>

            </Nav>
          </Col>

          <Col className="d-flex justify-content-xs-start justify-content-lg-center">

          </Col>

        </Row>
      </Container>
    </Navbar>
  </header>
);

export default Header;
