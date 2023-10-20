import { Container } from 'react-bootstrap';
import gitHubLogo from '../../static/github.png';
import twitterLogo from '../../static/twitter.png';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Container className="justify-content-header">
        <img
          src={gitHubLogo}
          className="social-images"
          alt="GitHub"
        />
        <img
          src={twitterLogo}
          className="social-images"
          alt="Twitter"
        />
      </Container>
    </footer>
  )
}

export default Footer;