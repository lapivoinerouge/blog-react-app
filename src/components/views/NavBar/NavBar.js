import { Nav, Navbar, Container, NavLink } from 'react-bootstrap';


const NavBar = () => {
    return (
        <Navbar bg='primary' variant='dark' expand='lg' className='mt-4 mb-4 rounded'>
        <Container>
          <Navbar.Brand href='/'>Blog</Navbar.Brand>
          <Nav className='me-2'>
            <Nav.Link as={NavLink} href='/'>Home</Nav.Link>
            <Nav.Link as={NavLink} href='/about'>Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default NavBar;