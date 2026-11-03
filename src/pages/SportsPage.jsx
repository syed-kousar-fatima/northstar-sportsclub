import { useState } from 'react';
import { FiArrowUpRight, FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { sports } from '../data/siteData';

function SportCard({ sport }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={`sport-detail-card${expanded ? ' sport-detail-card--open' : ''}`}>
      <div className="sport-detail-image"><img src={sport.image} alt={`${sport.name} court and training`} loading="lazy" /><span className="sport-card-number">{sport.number}</span><span className="sport-image-label">NORTHSTAR · {sport.category.toUpperCase()}</span></div>
      <div className="sport-detail-copy">
        <div className="sport-detail-title"><div><span className="eyebrow">{sport.category}</span><h3>{sport.name}</h3></div><span className="sport-detail-ordinal">{sport.number} / 05</span></div>
        <p className="sport-lede">{sport.description}</p><p>{sport.detail}</p>
        <button className="spec-toggle" onClick={() => setExpanded((open) => !open)} aria-expanded={expanded}><span>{expanded ? 'Hide' : 'Explore'} {sport.name} details</span><FiChevronDown /></button>
        {expanded && <div className="sport-specs">{sport.specs.map(([label, value]) => <div className="sport-spec" key={label}><span>{label}</span><strong>{value}</strong></div>)}<p className="spec-footnote">Dimensions and equipment figures are standard references; local formats and age groups may vary.</p></div>}
        <div className="sport-card-actions"><Link className="text-link" to={`/sports/${sport.slug}`}>Full {sport.name} details <FiArrowUpRight /></Link><Link className="text-link sport-session-link" to="/membership">Find a session <FiArrowUpRight /></Link></div>
      </div>
    </article>
  );
}

export default function SportsPage() {
  const [filter, setFilter] = useState('All sports');
  const filters = ['All sports', 'Team sports', 'Court sports', 'Racket sports'];
  const filteredSports = filter === 'All sports' ? sports : sports.filter((sport) => sport.category === filter);

  return (
    <>
      <section className="page-hero page-hero--sports"><img src="https://i.pinimg.com/736x/53/ca/d5/53cad5216a63438d4b7782f79dfc32f7.jpg" alt="Cricket ground in warm evening light" /><div className="page-hero-shade" /><div className="page-hero-content"><span className="eyebrow">FIVE WAYS TO FIND YOUR FLOW</span><h1>Find a game.<br /><em>Find your people.</em></h1><p>Try something new, get back to something you love, or let us help you find your next thing.</p></div></section>
      <section className="sports-list-section section-wrap"><SectionHeading eyebrow="FIND YOUR KIND OF GAME" title={<>Your game is <em>here.</em></>} description="Explore the sports, spaces, and small details that make every session feel like yours." /><div className="sport-filters" aria-label="Filter sports">{filters.map((item) => <button key={item} className={filter === item ? 'sport-filter sport-filter--active' : 'sport-filter'} onClick={() => setFilter(item)}>{item}</button>)}</div><div className="sport-detail-grid">{filteredSports.map((sport) => <SportCard key={sport.name} sport={sport} />)}</div></section>
      <section className="sports-bottom"><span className="eyebrow">YOUR FIRST SESSION IS THE HARDEST PART</span><h2>We’ll help with<br /><em>everything after.</em></h2><Link className="button button--lime button--large" to="/membership">Find your first session <FiArrowUpRight /></Link></section>
    </>
  );
}
