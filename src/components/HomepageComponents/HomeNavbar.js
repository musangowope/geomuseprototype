import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import Auth from "../../Auth/Auth";

const auth = new Auth();
const { isAuthenticated } = auth

class HomeNavbar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    goTo(route) {
        this.props.history.replace(`/${route}`)
    }

    login() {
        auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    render() {
        // const { isAuthenticated } = this.props.auth;
        return (
            <div>
                <Navbar expand="md" className="on-top home-navbar">
                    <NavbarBrand href="/" className="text-white">Geomuse</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/" className="text-white">About Us</NavLink>
                            </NavItem>
                            {
                                !isAuthenticated() && (
                                    <NavItem>
                                        <NavLink href="#" className="text-white">
                                            Login
                                        </NavLink>
                                    </NavItem>
                                )
                            }
                            {
                                isAuthenticated() && (
                                    <NavItem>
                                        <NavLink href="#" className="text-white" onClick={this.logout.bind(this)}>
                                            Logout
                                        </NavLink>
                                    </NavItem>
                                )
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default HomeNavbar;
