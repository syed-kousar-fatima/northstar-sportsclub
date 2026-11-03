import { useEffect, useState } from 'react';
import { FiArrowDown, FiArrowLeft, FiArrowRight, FiArrowUpRight, FiCompass, FiPlay, FiPlus, FiSun } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { events, gallery, sports } from '../data/siteData';

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      label: 'YOUR NEIGHBORHOOD. YOUR NEW FAVORITE PLACE.',
      title: 'Find your',
      accent: 'kind of game.',
      description: 'Room to move. People to meet. And a new favorite reason to get out the door.',
      image: 'https://i.pinimg.com/736x/a4/41/8e/a4418e8749aac393c4883deaedf733a9.jpg',
      alt: 'Athletes running together across a sunlit sports field',
      primary: 'Find your place',
      path: '/membership',
      secondary: 'Get to know us',
      secondaryPath: '/about',
    },
    {
      label: 'CRICKET · FIND YOUR RHYTHM',
      title: 'Meet us at',
      accent: 'the crease.',
      description: 'Find your footwork, play your shots, and stay for one more over under the lights.',
      image: 'https://i.pinimg.com/1200x/a5/db/65/a5db65c63b05a825a4a0979600d4846c.jpg',
      alt: 'Cricket match played on a sunlit oval ground',
      primary: 'Explore cricket',
      path: '/sports/cricket',
      secondary: 'Find a session',
      secondaryPath: '/membership',
    },
    {
      label: 'TENNIS · EVERY POINT STARTS SOMEWHERE',
      title: 'Find your',
      accent: 'next serve.',
      description: 'A little practice, a good rally, and a court that feels like your own.',
      image: 'https://i.pinimg.com/1200x/58/8b/5c/588b5cf44942b1b1fddd5e55942ac42a.jpg',
      alt: 'Freshly prepared tennis court ready for the next match',
      primary: 'Explore tennis',
      path: '/sports/tennis',
      secondary: 'Find a session',
      secondaryPath: '/membership',
    },
    {
      label: 'FOOTBALL · A GOOD PASS CHANGES EVERYTHING',
      title: 'Make room',
      accent: 'for the game.',
      description: 'Bring your boots, find your team, and see where a great afternoon takes you.',
      image: 'https://i.pinimg.com/1200x/21/02/f9/2102f9a26755f4f0ec179fcbe915da31.jpg',
      alt: 'Football players sharing the ball during a field session',
      primary: 'Explore football',
      path: '/sports/football',
      secondary: 'Meet your team',
      secondaryPath: '/coaches',
    },
    {
      label: 'BADMINTON · LIGHT FEET, GOOD COMPANY',
      title: 'One more',
      accent: 'brilliant rally.',
      description: 'Sharpen your footwork, meet your doubles partner, and find your rhythm on court.',
      image: 'https://i.pinimg.com/736x/1a/a4/d0/1aa4d0672532d8b5405202d0a480c506.jpg',
      alt: 'Badminton net and indoor court ready for a friendly rally',
      primary: 'Explore badminton',
      path: '/sports/badminton',
      secondary: 'Find a session',
      secondaryPath: '/membership',
    },
    {
      label: 'BASKETBALL · THE COURT IS YOURS',
      title: 'Take your',
      accent: 'next shot.',
      description: 'Build your handle, find your people, and keep the game moving.',
      image: 'https://i.pinimg.com/1200x/b4/86/36/b486368e327965022b047e1ea373d93e.jpg',
      alt: 'Basketball players sharing the court during practice',
      primary: 'Explore basketball',
      path: '/sports/basketball',
      secondary: 'Meet your coach',
      secondaryPath: '/coaches',
    },
  ];

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  function changeSlide(nextSlide) {
    setActiveSlide((nextSlide + slides.length) % slides.length);
  }

  const slide = slides[activeSlide];

  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Explore Northstar sports">
      <div className="hero-slides" aria-live="polite">
        {slides.map((item, index) => (
          <img
            className={`hero-image${activeSlide === index ? ' hero-image--active' : ''}`}
            src={item.image}
            alt={activeSlide === index ? item.alt : ''}
            aria-hidden={activeSlide !== index}
            key={item.label}
            fetchPriority={index === 0 ? 'high' : 'auto'}
          />
        ))}
      </div>
      <div className="hero-shade" />
      <div className="hero-grid" key={slide.label}>
        <div className="hero-copy" aria-live="polite">
          <span className="hero-kicker"><span className="status-dot" /> {slide.label}</span>
          <h1>{slide.title}<br /><em>{slide.accent}</em></h1>
          <p>{slide.description}</p>
          <div className="hero-actions">
            <Link className="button button--lime button--large" to={slide.path}>{slide.primary} <FiArrowUpRight /></Link>
            <Link className="hero-watch" to={slide.secondaryPath}><span><FiPlay /></span> {slide.secondary}</Link>
          </div>
        </div>
        <div className="hero-note">
          <span className="note-line" />
          <span>NOT JUST A CLUB.<br />A GOOD PART OF YOUR DAY.</span>
        </div>
        <div className="hero-side-caption">12°58' N &nbsp;·&nbsp; 77°35' E<br />BENGALURU, INDIA</div>
        <a className="scroll-cue" href="#welcome"><span>SCROLL TO EXPLORE</span><FiArrowDown /></a>
        <div className="hero-controls" aria-label="Hero slide controls">
          <button type="button" className="hero-arrow" onClick={() => changeSlide(activeSlide - 1)} aria-label="Previous slide"><FiArrowLeft /></button>
          <div className="hero-dots" role="group" aria-label="Choose a sport">
            {slides.map((item, index) => (
              <button
                type="button"
                key={item.label}
                className={`hero-dot${activeSlide === index ? ' hero-dot--active' : ''}`}
                onClick={() => changeSlide(index)}
                aria-label={`Show slide ${index + 1}: ${item.label}`}
                aria-pressed={activeSlide === index}
              />
            ))}
          </div>
          <button type="button" className="hero-arrow" onClick={() => changeSlide(activeSlide + 1)} aria-label="Next slide"><FiArrowRight /></button>
        </div>
        <div className="hero-index"><strong>0{activeSlide + 1}</strong><span> / 06</span></div>
      </div>
      <div className="hero-stamp"><FiSun /><span>PLAY MORE<br />LIVE MORE</span></div>
    </section>
  );
}

function WelcomeSection() {
  return (
    <section className="welcome-section section-wrap" id="welcome">
      <div className="welcome-image-wrap">
        <img src="https://i.pinimg.com/1200x/e0/4c/62/e04c62fe98c28e0e4c40ca8b6fd4b51b.jpg" alt="Players enjoying a game on a sunny field" loading="lazy" />
        <div className="image-caption"><span>EST. WITH GOOD ENERGY</span><span>01 — 05</span></div>
        <div className="image-sticker"><span>A CLUB THAT<br />FEELS LIKE<br /><em>YOUR PLACE.</em></span></div>
      </div>
      <div className="welcome-copy">
        <span className="eyebrow">MORE THAN A PLACE TO PLAY</span>
        <h2>For the first-timers,<br />the <em>one-mores,</em><br />the all-dayers.</h2>
        <p>We believe a great sports club is about more than the score. It’s the familiar faces, the first good hit, the game that ran a little late because nobody wanted to leave.</p>
        <Link className="text-link" to="/about">A little more about us <FiArrowUpRight /></Link>
        <div className="welcome-stats">
          <div><strong>05</strong><span>SPORTS TO<br />MAKE YOURS</span></div>
          <div><strong>12<span>+</span></strong><span>YEARS OF<br />GOOD GAMES</span></div>
          <div><strong>1.2k</strong><span>PEOPLE WHO<br />FEEL AT HOME</span></div>
        </div>
      </div>
    </section>
  );
}

function ActivitiesSection() {
  return (
    <section className="activities-section section-wrap">
      <div className="section-topline">
        <SectionHeading eyebrow="FIVE WAYS TO FIND YOUR FLOW" title={<>Come for the game.<br /><em>Stay for the feeling.</em></>} description="Pick up something new, get back into an old favorite, or try them all. There’s always a court, field, or team with room for you." />
        <Link className="round-link" to="/sports" aria-label="Explore all sports"><FiArrowUpRight /></Link>
      </div>
      <div className="activity-grid">
        {sports.map((sport) => (
          <Link className="activity-card" to="/sports" key={sport.name}>
            <img src={sport.image} alt={`${sport.name} at Northstar`} loading="lazy" />
            <div className="activity-overlay" />
            <div className="activity-number">{sport.number} / 05</div>
            <div className="activity-content">
              <span>{sport.category}</span><h3>{sport.name}</h3>
              <div className="activity-explore"><span>Explore sport</span><FiArrowUpRight /></div>
            </div>
          </Link>
        ))}
      </div>
      <div className="activities-foot"><span>WHATEVER YOUR GAME, YOU’RE IN THE RIGHT PLACE.</span><Link className="text-link" to="/sports">See all activities <FiArrowUpRight /></Link></div>
    </section>
  );
}

function WhySection() {
  const reasons = [
    { number: '01', icon: <FiCompass />, title: 'Find your people', copy: 'Small teams, welcoming coaches, and friendly faces who remember your name.' },
    { number: '02', icon: <FiSun />, title: 'Play at your pace', copy: 'Brand new or all-in, we meet you where you are and help you go further.' },
    { number: '03', icon: <FiPlus />, title: 'A little bit more', copy: 'Well-kept courts, thoughtful coaching, and space to stay for one more game.' },
  ];

  return (
    <section className="why-section">
      <div className="why-image"><img src="https://i.pinimg.com/736x/15/17/38/15173879589038de61455f7a5ace7b51.jpg" alt="Players sharing a moment after practice" loading="lazy" /></div>
      <div className="why-content">
        <SectionHeading eyebrow="WHY NORTHSTAR" title={<>The best part<br />is how it <em>feels.</em></>} description="We take the game seriously. Ourselves? Not so much." />
        <div className="reason-list">
          {reasons.map((item) => <div className="reason-item" key={item.number}><span className="reason-icon">{item.icon}</span><div><span className="reason-number">{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p></div><FiArrowUpRight className="reason-arrow" /></div>)}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="gallery-section section-wrap">
      <div className="section-topline">
        <SectionHeading eyebrow="A FEW MOMENTS FROM AROUND HERE" title={<>Good days look<br /><em>a little like this.</em></>} description="The high fives, the near misses, and the post-game hangs. This is what it’s all about." />
        <Link className="text-link gallery-link" to="/events">Life at the club <FiArrowUpRight /></Link>
      </div>
      <div className="gallery-grid">
        {gallery.map((photo, index) => <div className={`gallery-tile gallery-tile--${index + 1}`} key={photo.alt}><img src={photo.image} alt={photo.alt} loading="lazy" /><span>{photo.category}</span></div>)}
      </div>
    </section>
  );
}

function HomeEvents() {
  return (
    <section className="events-preview section-wrap">
      <div className="section-topline">
        <SectionHeading eyebrow="PUT IT IN THE CALENDAR" title={<>Something good<br /><em>is coming up.</em></>} description="Low-pressure, high-spirited, and always better together. Come join the next one." />
        <Link className="text-link" to="/events">All upcoming events <FiArrowUpRight /></Link>
      </div>
      <div className="preview-events">
        {events.slice(0, 2).map((event) => <Link className="preview-event" to="/events" key={event.name}><span className="preview-date"><small>{event.month}</small>{event.day}</span><span className="preview-event-copy"><small>{event.type}</small><strong>{event.name}</strong></span><span className="preview-time">{event.time}</span><FiArrowUpRight /></Link>)}
      </div>
    </section>
  );
}

function JoinBanner() {
  return (
    <section className="join-banner">
      <img src="https://i.pinimg.com/736x/47/e9/4a/47e94a30bc4633fdfc838348cfc72875.jpg" alt="" loading="lazy" />
      <div className="join-banner-shade" />
      <div className="join-banner-content"><span className="eyebrow">YOUR NEXT GOOD THING STARTS HERE</span><h2>Come as you are.<br /><em>Leave feeling better.</em></h2><p>Your people, your pace, your new favorite place to play.</p><Link className="button button--lime button--large" to="/membership">Find your membership <FiArrowUpRight /></Link></div>
    </section>
  );
}

export default function HomePage() {
  return <><Hero /><div className="ticker" aria-label="Sports for every kind of player"><div className="ticker-track">{['CRICKET', 'FOOTBALL', 'BASKETBALL', 'BADMINTON', 'TENNIS', 'GOOD PEOPLE', 'GREAT GAMES', 'CRICKET', 'FOOTBALL', 'BASKETBALL', 'BADMINTON', 'TENNIS'].map((label, index) => <span key={`${label}-${index}`}>{label}<i>✳</i></span>)}</div></div><WelcomeSection /><ActivitiesSection /><WhySection /><GallerySection /><HomeEvents /><JoinBanner /></>;
}
