import { Nav, Navbar as BootstrapNavBar } from "react-bootstrap";

const NavBar = () => {
  return (
    <BootstrapNavBar bg="light" expand="lg">
      <BootstrapNavBar.Brand href="/counter">
        Fram Assignment
      </BootstrapNavBar.Brand>
      <BootstrapNavBar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavBar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/counter">Counter</Nav.Link>
          <Nav.Link href="/users">Users</Nav.Link>
        </Nav>
      </BootstrapNavBar.Collapse>
    </BootstrapNavBar>
  );
};

export default NavBar;
