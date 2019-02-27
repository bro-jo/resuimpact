import {Container, Button, Row, Col, Navbar} from 'react-bootstrap';

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Resuimpact</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Make some impact with your resume
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;