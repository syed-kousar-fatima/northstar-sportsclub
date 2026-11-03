import { FiArrowUpRight, FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { events, gallery } from '../data/siteData';

export default function EventsPage() {
  return (
    <>
      <section className="page-hero page-hero--events"><img src="https://i.pinimg.com/1200x/5f/28/51/5f285194f95b926813ba9656599f1bc2.jpg" alt="Friends gathering for a sports event" /><div className="page-hero-shade" /><div className="page-hero-content"><span className="eyebrow">GOOD GAMES, GOOD COMPANY</span><h1>Something to<br />look <em>forward to.</em></h1><p>Friendly tournaments, open play, and neighborhood hangs—there’s always a reason to show up.</p></div></section>
      <section className="events-section section-wrap"><SectionHeading eyebrow="YOUR NEXT GOOD DAY OUT" title={<>See you <em>there.</em></>} description="Come on your own, bring a friend, or find your people when you get here. Everyone’s welcome." /><div className="events-list">{events.map((event) => <article className="event-card" key={event.name}><div className="event-date"><span>{event.month}</span><strong>{event.day}</strong><small>2026</small></div><div className="event-main"><span className="event-type">{event.type}</span><h3>{event.name}</h3><p>{event.detail}</p><div className="event-meta"><span><FiClock />{event.time}</span><span><FiMapPin />Northstar Athletic Club</span></div></div><Link className="event-register" to="/membership">Save me a spot <FiArrowUpRight /></Link></article>)}</div><p className="events-footnote"><FiCalendar /> Event times and availability can change. Membership enquiries are welcome.</p></section>
      <section className="events-gallery"><div className="events-gallery-copy"><span className="eyebrow">THE GOOD STUFF HAPPENS BETWEEN GAMES</span><h2>Every event has<br /><em>a story to tell.</em></h2><Link className="text-link" to="/contact">Ask us what’s next <FiArrowUpRight /></Link></div><div className="events-photo-grid">{gallery.slice(0, 3).map((photo) => <img src={photo.image} alt={photo.alt} key={photo.alt} loading="lazy" />)}</div></section>
    </>
  );
}
