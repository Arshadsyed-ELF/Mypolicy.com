import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.css"
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Unav() {
    const [showDropdown, setShowDropdown] = useState(false);
  const get=localStorage.getItem('user')

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
    const navigate=useNavigate()
    const logout=()=>{
      navigate('/ucar')
    }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">My Insurance  </Navbar.Brand>
        <h1>({JSON.parse(get).name} )</h1>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
           <div className='nav1'>
           <Nav.Link ><Link to='/uhome' style={{textDecoration:"none",color:"#5277A6"}}>Home</Link></Nav.Link>
           <NavDropdown
        title="Insurances"
        id="basic-nav-dropdown"
        show={showDropdown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <NavDropdown.Item><Link to="/ulife">life</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to="/uhealth">health</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/ucar">Car</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to="/ubike">Bike</Link></NavDropdown.Item>
      </NavDropdown>

      <NavDropdown
        title="My Insurances"
        id="basic-nav-dropdown"
        show={showDropdow}
        onMouseEnter={handleMouseEnte}
        onMouseLeave={handleMouseLeav}
      >
        <NavDropdown.Item><Link to="/lifeinsurance">life</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to="/healthinsurance">health</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/carinsurance">Car</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to="/bikeinsurance">Bike</Link></NavDropdown.Item>
      </NavDropdown>
    
      <Link to='/'><Button style={{background:"none",color:"#5277A6",height:"30px", marginTop:"6px",paddingTop:"1px"}} >Signout</Button></Link>
   
      
           </div>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Unav;