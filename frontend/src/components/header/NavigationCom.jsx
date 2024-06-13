import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavigationCom = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">GMC OurBlog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="blogs">Blogs</Nav.Link>
            <Nav.Link href="/add-post">Add Post</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
           
            <NavDropdown title="Free" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Books</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Video
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Courses</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                More
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationCom;
