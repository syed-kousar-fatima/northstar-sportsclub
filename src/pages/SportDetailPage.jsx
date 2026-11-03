import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi';
import { Link, Navigate, useParams } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { sports } from '../data/siteData';

export default function SportDetailPage() {
  const { slug } = useParams();
  const sport = sports.find((item) => item.slug === slug);

  if (!sport) return <Navigate to="/sports" replace />;

  return (
    <>
      <section className="sport-detail-hero">
        <img src={sport.image} alt={`${sport.name} at Northstar Athletic Club`} />
        <div className="sport-detail-hero-shade" />
        <div className="sport-detail-hero-content">
          <Link className="sport-back-link" to="/sports"><FiArrowLeft /> All sports</Link>
          <span className="eyebrow">{sport.category} · NORTHSTAR ATHLETIC CLUB</span>
          <h1>{sport.name}<br /><em>from the ground up.</em></h1>
          <p>{sport.description}</p>
        </div>
      </section>
      <section className="sport-detail-overview section-wrap">
        <SectionHeading eyebrow="THE GAME, UP CLOSE" title={<>Everything you need<br />to know about <em>{sport.name}.</em></>} description={sport.detail} />
        <div className="sport-overview-facts">
          {sport.specs.map(([label, value], index) => (
            <div className="sport-overview-fact" key={label}>
              <span>0{index + 1}</span><small>{label}</small><strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>
      <section className="sport-elements-section">
        <div className="sport-elements-heading">
          <SectionHeading eyebrow="EQUIPMENT, SPACE & THE PEOPLE" title={<>Get to know<br /><em>every part of it.</em></>} description="A practical guide to how the game is set up, what you’ll play with, and how the team comes together." />
        </div>
        <div className="sport-element-list">
          {sport.details.map((item, index) => (
            <article className={`sport-element${index % 2 ? ' sport-element--reverse' : ''}`} key={item.title}>
              <div className="sport-element-image"><img src={item.image} alt={item.alt} loading="lazy" /><span>0{index + 1} / 0{sport.details.length}</span></div>
              <div className="sport-element-copy">
                <span className="eyebrow">{sport.name.toUpperCase()} · 0{index + 1}</span>
                <h2>{item.title}</h2><h3>{item.subtitle}</h3>
                <p>{item.description}</p>
                <div className="sport-element-facts">{item.facts.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="sport-detail-cta">
        <span className="eyebrow">YOUR FIRST SESSION STARTS HERE</span>
        <h2>Come play<br /><em>{sport.name} with us.</em></h2>
        <p>All levels welcome. We’ll find the right group, coach, and first session for you.</p>
        <Link className="button button--lime button--large" to="/membership">Find your session <FiArrowUpRight /></Link>
      </section>
    </>
  );
}
