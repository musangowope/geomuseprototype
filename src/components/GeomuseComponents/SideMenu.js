import React, { Component } from 'react'
import './geomuse-styles/geomuse-side-bar.css'
import { Nav, NavItem, NavLink } from 'reactstrap';



export default class SideMenu extends Component {
    constructor(props) {
        super(props);
    }

    logout() {
        this.props.auth.logout();
    }

    render() {
        console.log(this.props.userDetails)
        return (
            <div className="side-menu-component">
                <Nav vertical className="geomenu-profile-header" style={{backgroundImage: 'url('+ this.props.userDetails.picture +')'}}>
                </Nav>
                <Nav vertical className="geomenu-items">
                    <NavItem>
                        <NavLink className="text-white" href="#">Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" href="#">Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" href="#">Another Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" href="#">Another Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" href="#">Another Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" onClick={this.logout.bind(this)}>Logout</NavLink>
                    </NavItem>
                </Nav>
            </div>
        )
    }
}