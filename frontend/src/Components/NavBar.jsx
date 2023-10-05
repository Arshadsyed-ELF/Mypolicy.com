// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import './Navbar.css'


// function NavBar() {
//   return (
//     <>
//       <Navbar bg="primary" data-bs-theme="dark" >
//         <Container>
//           <Navbar.Brand href="#home">Insurance</Navbar.Brand>
//           <Nav style={{fontSize:"1.5rem"}}>
//             <Nav.Link href="#home">Home</Nav.Link>
            
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//             <Nav.Link href="#pricing">Signin</Nav.Link>
//             <Nav.Link href="#pricing">Logout</Nav.Link>
//           </Nav>
//         </Container>
        
//       </Navbar>
      
      
//     </>
//   );
// }

// export default NavBar;



import { useState, useEffect } from "react";
import { Navbar, Nav, Container,Dropdown ,NavDropdown, Button} from "react-bootstrap";
// import { HashLink } from 'react-router-hash-link';
import { Link,NavLink, useNavigate} from "react-router-dom";
// import Login from "./Login";

 const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

const navigate=useNavigate()

const login=()=>{
  navigate('/login')
}
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    // <Router>
        <section id="sec">
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
        <Navbar.Brand href="#home">My-Insurance</Navbar.Brand>
          <Navbar.Brand href="/">
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" >
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} style={{paddingTop:"10px"}}>Home</Nav.Link>
             <Nav.Link href="#department" className={activeLink === 'department' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('department')} style={{paddingTop:"10px"}}>Partners</Nav.Link>
             <Nav.Link href="#faculty" className={activeLink === 'faculty' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('faculty')} style={{paddingTop:"10px"}}>About</Nav.Link>
             <Nav.Link href="#alumni" className={activeLink === 'alumni' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('alumni')} style={{paddingTop:"10px"}}>Footer</Nav.Link>
             {/* <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')} style={{paddingTop:"10px"}}><Link>logn</Link></Nav.Link> */}
             <Nav className="me-auto">
            <div style={{paddingTop:"3px"}}>
            <NavDropdown title="Login" id="basic-nav-dropdown" >
              <NavDropdown.Item href="/login">User</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.2">Interviewer</NavDropdown.Item> */}
              <NavDropdown.Item href="/alogin">Admin</NavDropdown.Item>
            </NavDropdown>
            </div>
          </Nav>

                 
             {/* <Nav.Link className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}> */}
      

                 
    {/* </Nav.Link> */}
        </Nav>

            <span className="navbar-text">
              {/* <HashLink to='#contact'>
                <button className="vvd"><span>Contact Us</span></button>
              </HashLink> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </section>
     
    //  </Router> 
    
  )
}
export default NavBar