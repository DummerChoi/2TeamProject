import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../css/everyreact.css"

function Every_React() {
  return (
    <Navbar expand="lg" className='navbg'>
      <Container>
        <Navbar.Brand href="/"><span className="logotxt">Euphoria</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="/about">소개</Nav.Link>
            <Nav.Link href="/room">패키지</Nav.Link>
            <NavDropdown title="고객문의" id="basic-nav-dropdown">
              <NavDropdown.Item href="/map">오시는길</NavDropdown.Item>
              <NavDropdown.Item href="/faq">FAQ</NavDropdown.Item>
              <NavDropdown.Item href="/freeboard">문의하기</NavDropdown.Item>
              <NavDropdown.Divider /> 
              <NavDropdown.Item href="/sitemap">사이트맵</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/login"><span className="logintxt">로그인</span></Nav.Link>
            <Nav.Link href="#"><span className="logintxt">회원가입</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

  export default Every_React;