import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../User/navbar.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
function Anav() {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => {
      setShowDropdown(true);
    };
  
    const handleMouseLeave = () => {
      setShowDropdown(false);
    };
    const [showDropdow, setShowDropdow] = useState(false);

    const handleMouseEnte = () => {
      setShowDropdow(true);
    };
  
    const handleMouseLeav = () => {
      setShowDropdow(false);
    };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">My Insurance</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
           <div className='nav1'>
           <Nav.Link ><Link to='/ahome' style={{textDecoration:"none",color:"#5277A6"}}>Home</Link></Nav.Link>
           <Nav.Link ><Link to='/users' style={{textDecoration:"none",color:"#5277A6"}}>Users</Link></Nav.Link>
           <NavDropdown
        title="Insurances"
        id="basic-nav-dropdown"
        show={showDropdown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
         <NavDropdown.Item><Link to="/life">life</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to="/health">health</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/car">Car</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to="/bike">Bike</Link></NavDropdown.Item>
      </NavDropdown>

      {/* <NavDropdown
        title="User Insurances"
        id="basic-nav-dropdown"
        show={showDropdow}
        onMouseEnter={handleMouseEnte}
        onMouseLeave={handleMouseLeav}
      >
         <NavDropdown.Item><Link to="/alife">life</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to="/ahealth">health</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/acar">Car</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to="/abike">Bike</Link></NavDropdown.Item>
      </NavDropdown> */}
      {/* <Nav.Link><Link to="/admininsu" style={{textDecoration:"none",color:"black"}}>My Insurances</Link></Nav.Link> */}
      <Link to='/'><Button style={{background:"none",color:"#5277A6",height:"30px", marginTop:"6px",paddingTop:"1px"}} >Signout</Button></Link>
      
           </div>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Anav;