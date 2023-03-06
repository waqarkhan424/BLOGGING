import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="text-light  footer-container">
      <Row>
        <Col md={6} className="p-4">
          <h5 className="footer-logo">
            <span>B</span>LOGGIN<span>G</span>
          </h5>
          <p>
            BLOGGING.com adipisicing elit. Molestiae repudiandae architecto qui
            adipisci in officiis, aperiam sequi atque perferendis eos, autem
            maiores nisi saepe quisquam hic odio consectetur nobis veritatis
            quasi explicabo obcaecati doloremque aperiam sequi atque perferendis
            !
          </p>
        </Col>
        <Col md={3} className="p-4">
          <h3>About</h3>
          <ul className="list-unstyled">
            <li>
              <a href="#">Authors</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Disclaimer</a>
            </li>
          </ul>
        </Col>
        <Col md={3} className="p-4">
          <h3>Follow</h3>
          <ul className="list-unstyled">
            <li>
              <a href="#">
                <FaFacebook /> Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
                Twitter
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col className="p-4">
          Copyright &copy; {new Date().getFullYear()} BLOGGING.com
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
