import React, {Component} from "react";
import {Navbar, Nav} from "react-bootstrap";


class NavBar extends Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark"  expand="lg">
                <Navbar.Brand href="#home">
                 {this.props.title}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Best Seller</Nav.Link>
                    <Nav.Link href="#link">latested Release</Nav.Link>
                   
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
            
            
        )
    }
    
    
    
}
export default NavBar