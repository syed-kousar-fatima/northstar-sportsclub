import { FiArrowUpRight, FiInstagram, FiMail, FiMapPin, FiMove, FiPhone } from 'react-icons/fi';
import { GiSoccerBall } from 'react-icons/gi';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="brand" to="/">
            <span className="brand-mark"><GiSoccerBall aria-hidden="true" /><span>+</span></span>
            <span className="brand-name">NORTHSTAR <small>ATHLETIC CLUB</small></span>
          </Link>
          <p>Good people. Great games. A little more life in every day.</p>
        </div>
        <div className="footer-column">
          <span className="footer-label">Find your way</span>
          <Link to="/about">Our story</Link><Link to="/sports">Sports & activities</Link>
          <Link to="/coaches">Meet the coaches</Link><Link to="/events">Club events</Link>
        </div>
        <div className="footer-column">
          <span className="footer-label">Come say hello</span>
          <a href="https://maps.google.com/?q=Northstar+Athletic+Club" target="_blank" rel="noreferrer"><FiMapPin /> 24 Greenway Road, Bengaluru</a>
          <a href="tel:+91 9876543210"><FiPhone /> +91 9876543210</a>
          <a href="mailto:hello@northstarclub.in"><FiMail /> hello@northstarclub.in</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FiInstagram /> Follow along</a>
        </div>
        <Link className="footer-top" to="/" aria-label="Back to home"><FiMove /></Link>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Northstar Athletic Club</span>
        <span>Made for the love of the game.</span>
        <Link to="/contact">Get in touch <FiArrowUpRight /></Link>
      </div>
    </footer>
  );
}
