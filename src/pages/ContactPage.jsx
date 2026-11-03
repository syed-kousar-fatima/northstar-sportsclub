import { useState } from 'react';
import { FiArrowUpRight, FiClock, FiInstagram, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import Notice from '../components/Notice';
import SectionHeading from '../components/SectionHeading';
import { validateEmail, validateRequiredFields } from '../utils/validation';

export default function ContactPage() {
  const [notice, setNotice] = useState('');
  const [noticeType, setNoticeType] = useState('success');

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (!validateRequiredFields(data, ['name', 'email', 'message'])) {
      setNoticeType('error');
      setNotice('Please fill in your name, email, and message.');
      return;
    }
    if (!validateEmail(String(data.get('email')))) {
      setNoticeType('error');
      setNotice('That email doesn’t look quite right. Please check it and try again.');
      return;
    }

    setNoticeType('success');
    setNotice('Thanks for reaching out. We’ll get back to you as soon as we can.');
    form.reset();
  }

  return (
    <>
      <section className="page-hero page-hero--contact"><img src="https://i.pinimg.com/736x/18/ba/8c/18ba8c4386dd302cdd7cdb4ec77ca36c.jpg" alt="Open sports ground at the end of the day" /><div className="page-hero-shade" /><div className="page-hero-content"><span className="eyebrow">WE’RE EASY TO FIND</span><h1>Say hello.<br /><em>We’re listening.</em></h1><p>A question, a tour, a first session? We’d love to hear what you have in mind.</p></div></section>
      <section className="contact-section section-wrap"><div className="contact-details"><SectionHeading eyebrow="COME ON IN" title={<>We’re right<br /><em>around here.</em></>} description="Drop us a note, give us a call, or come by for a look around. The kettle’s always on." /><a className="contact-detail" href="https://maps.google.com/?q=Northstar+Athletic+Club+Bengaluru" target="_blank" rel="noreferrer"><span><FiMapPin /></span><div><strong>Find us</strong><small>24 Greenway Road, Indiranagar<br />Bengaluru, Karnataka 560038</small></div><FiArrowUpRight /></a><a className="contact-detail" href="tel:+918045550420"><span><FiPhone /></span><div><strong>Give us a ring</strong><small>+91 9876543210</small></div><FiArrowUpRight /></a><a className="contact-detail" href="mailto:hello@northstarclub.in"><span><FiMail /></span><div><strong>Send us an email</strong><small>hello@northstarclub.in</small></div><FiArrowUpRight /></a><div className="contact-detail"><span><FiClock /></span><div><strong>Opening hours</strong><small>Monday – Saturday, 6:00 AM – 10:00 PM<br />Sunday, 7:00 AM – 8:00 PM</small></div></div><a className="contact-detail" href="https://instagram.com" target="_blank" rel="noreferrer"><span><FiInstagram /></span><div><strong>Follow along</strong><small>@northstarathleticclub</small></div><FiArrowUpRight /></a></div><form className="form-card contact-form" onSubmit={handleSubmit} noValidate><span className="form-kicker">DROP US A NOTE</span><h3>What’s on your mind?</h3><div className="form-row"><label>Your name<input name="name" autoComplete="name" placeholder="Your name" required /></label><label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label></div><label>I’m getting in touch about<select name="topic" defaultValue="A little bit of everything"><option>A little bit of everything</option><option>Membership</option><option>Sports & coaching</option><option>Events</option><option>Something else</option></select></label><label>Your message<textarea name="message" rows="5" placeholder="Tell us what you’re thinking..." required /></label><Notice message={notice} type={noticeType} /><button className="button button--lime button--large form-submit" type="submit">Send your note <FiArrowUpRight /></button><small className="form-privacy">We’ll only use your details to get back to you.</small></form></section>
      <a className="map-panel" href="https://maps.google.com/?q=Northstar+Athletic+Club+Bengaluru" target="_blank" rel="noreferrer"><div className="map-content"><span className="map-marker"><FiMapPin /></span><strong>NORTHSTAR ATHLETIC CLUB</strong><span>24 Greenway Road · Indiranagar</span><span className="map-direction">Get directions <FiArrowUpRight /></span></div></a>
    </>
  );
}
