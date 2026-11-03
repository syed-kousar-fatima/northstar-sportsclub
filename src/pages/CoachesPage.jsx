import { FiArrowUpRight, FiMove } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { coaches } from '../data/siteData';

export default function CoachesPage() {
  return (
    <>
      <section className="page-hero page-hero--coaches"><img src="https://i.pinimg.com/736x/18/5a/4a/185a4a6806006605eaa445742e612a36.jpg" alt="Coach encouraging athletes during practice" /><div className="page-hero-shade" /><div className="page-hero-content"><span className="eyebrow">GOOD COACHES MAKE ROOM FOR YOU</span><h1>Here for the<br />game <em>and you.</em></h1><p>Get better at your sport and feel good about how you got there.</p></div></section>
      <section className="coaches-section section-wrap"><SectionHeading eyebrow="MEET YOUR PEOPLE" title={<>A good coach sees<br /><em>your next step.</em></>} description="Our coaches bring patience, deep experience, and a real love of helping people find their game." /><div className="coach-grid">{coaches.map((coach, index) => <article className="coach-card" key={coach.name}><div className="coach-image"><img src={coach.image} alt={coach.name} loading="lazy" /><span className="coach-index">0{index + 1} / 04</span><span className="coach-arrow"><FiMove /></span></div><div className="coach-info"><span className="coach-sport">{coach.sport}</span><h3>{coach.name}</h3><span className="coach-role">{coach.role}</span><p>{coach.bio}</p><div className="coach-experience">{coach.experience}</div></div></article>)}</div></section>
      <section className="coach-cta"><div><span className="eyebrow">START WHERE YOU ARE</span><h2>Come meet your<br /><em>new favorite coach.</em></h2></div><Link className="button button--lime button--large" to="/membership">Find your first session <FiArrowUpRight /></Link></section>
    </>
  );
}
