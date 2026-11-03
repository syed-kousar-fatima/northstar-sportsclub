import { FiArrowUpRight, FiHeart, FiTarget, FiTrendingUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';

const milestones = [
  { year: '2012', title: 'A patch of grass and a big idea', text: 'Northstar began with one pitch, two cricket teams, and a shared belief that sport brings people together.' },
  { year: '2016', title: 'Room for more games', text: 'We opened our first basketball and badminton courts and welcomed a whole new neighborhood onto the field.' },
  { year: '2021', title: 'A place to come back to', text: 'After a difficult year, our community rallied around one another. We reopened as a bigger, kinder, more connected club.' },
  { year: 'Today', title: 'Still making room', text: 'Five sports, a wonderful coaching team, and a growing community. We’re just getting started.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero--about">
        <img src="https://i.pinimg.com/1200x/ee/3a/56/ee3a56d88b1bd10472bca0f3d14265a9.jpg" alt="Athlete running on an open sports track" />
        <div className="page-hero-shade" /><div className="page-hero-content"><span className="eyebrow">A CLUB WITH ROOM FOR EVERYONE</span><h1>A good thing<br />we built <em>together.</em></h1><p>We started with a simple idea: sport should feel like a place you belong.</p></div>
      </section>
      <section className="about-intro section-wrap">
        <SectionHeading eyebrow="OUR STORY" title={<>It started with<br />one more <em>game.</em></>} description="In 2012, a few friends wanted somewhere to play, unwind, and bring their neighbors along. Northstar grew from that invitation—and we’ve kept the door open ever since." />
        <div className="about-quote"><span>“</span><blockquote>We don’t believe you need to be an athlete to love being here. You just need to show up.</blockquote><small>THE NORTHSTAR WAY</small></div>
      </section>
      <section className="mission-section"><div className="mission-image"><img src="https://i.pinimg.com/1200x/6e/f1/1f/6ef11f083d443d5db65cc6fe3459f959.jpg" alt="Team training under an evening sky" loading="lazy" /></div><div className="mission-copy"><span className="eyebrow">WHAT WE BELIEVE</span><h2>Sport makes<br /><em>space for more.</em></h2><p>More connection. More confidence. More reasons to put your phone down and spend a good hour with people who feel like your people.</p><div className="mission-values"><div><FiHeart /><div><strong>Our mission</strong><span>Make good sport, thoughtful coaching, and genuine companionship part of everyday life.</span></div></div><div><FiTarget /><div><strong>Our vision</strong><span>Build a neighborhood where every age, background, and ability feels welcome to take part.</span></div></div><div><FiTrendingUp /><div><strong>Our promise</strong><span>Keep growing our facilities and programs without ever losing our community spirit.</span></div></div></div></div></section>
      <section className="club-facilities section-wrap"><SectionHeading eyebrow="A PLACE FOR EVERY KIND OF PLAYER" title={<>Good spaces make<br /><em>room to play.</em></>} description="Thoughtful facilities and friendly support make it easier to find your feet, settle in, and enjoy your time here." /><div className="facility-grid"><article className="facility-card"><img src="https://i.pinimg.com/1200x/25/f9/3e/25f93eb0a5e917236af66a36af9c753a.jpg" alt="Cricket practice ground at Northstar" loading="lazy" /><div><span>01 · OUTDOOR</span><h3>Fields to find your stride</h3><p>Open space for cricket and football, with regular coached sessions, social fixtures, and room to practice the fundamentals.</p></div></article><article className="facility-card"><img src="https://i.pinimg.com/736x/a0/00/7c/a0007c943dd7561e4f5d90f9e34e6a75.jpg" alt="Indoor basketball court" loading="lazy" /><div><span>02 · INDOOR</span><h3>Courts for year-round play</h3><p>Basketball and badminton sessions on marked courts, with age-appropriate coaching and equipment guidance for first-timers.</p></div></article><article className="facility-card"><img src="https://i.pinimg.com/1200x/07/b3/cf/07b3cf29448e01287e3f1cd6f170654a.jpg" alt="Outdoor tennis court" loading="lazy" /><div><span>03 · ALL-WEATHER</span><h3>Space to work on your game</h3><p>Bookable tennis sessions, changing areas, and useful places to regroup between a lesson, a match, and the rest of your day.</p></div></article></div></section>
      <section className="club-achievements"><div className="club-achievements-inner"><SectionHeading eyebrow="OUR COMMUNITY, SO FAR" title={<>Small moments.<br /><em>Lots of them.</em></>} description="A few ways our neighborhood has made this club what it is." /><div className="achievement-stats"><div><strong>12<span>+</span></strong><span>YEARS OF<br />GOOD GAMES</span></div><div><strong>05</strong><span>SPORTS WITH<br />ROOM TO GROW</span></div><div><strong>1.2k</strong><span>PEOPLE WHO<br />FEEL AT HOME</span></div><div><strong>40<span>+</span></strong><span>WEEKLY COACHED<br />SESSIONS</span></div></div></div></section>
      <section className="timeline-section section-wrap"><SectionHeading eyebrow="A LITTLE HISTORY" title={<>Every good thing<br /><em>starts somewhere.</em></>} description="A few favorite chapters from our story so far." /><div className="timeline">{milestones.map((item) => <article className="timeline-item" key={item.year}><span className="timeline-year">{item.year}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></section>
      <section className="about-cta"><h2>There’s room<br />for <em>you here.</em></h2><Link className="button button--lime button--large" to="/membership">Come be part of it <FiArrowUpRight /></Link></section>
    </>
  );
}
