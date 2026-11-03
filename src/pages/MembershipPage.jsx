import { useState } from 'react';
import { FiArrowUpRight, FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Notice from '../components/Notice';
import SectionHeading from '../components/SectionHeading';
import { plans } from '../data/siteData';
import { validateEmail, validateRequiredFields } from '../utils/validation';

export default function MembershipPage() {
  const [selectedPlan, setSelectedPlan] = useState('All Access');
  const [notice, setNotice] = useState('');
  const [noticeType, setNoticeType] = useState('success');

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!validateRequiredFields(formData, ['name', 'email', 'phone', 'plan'])) {
      setNoticeType('error');
      setNotice('Please complete each field before sending your request.');
      return;
    }

    if (!validateEmail(String(formData.get('email')))) {
      setNoticeType('error');
      setNotice('Please enter a valid email address.');
      return;
    }

    setNoticeType('success');
    setNotice('You’re on your way. Our membership team will be in touch shortly.');
    form.reset();
    setSelectedPlan('All Access');
  }

  return (
    <>
      <section className="page-hero page-hero--membership"><img src="https://i.pinimg.com/736x/6f/d7/79/6fd779a43f4329f4ba10f167aec7390d.jpg" alt="Athletes relaxing after training" /><div className="page-hero-shade" /><div className="page-hero-content"><span className="eyebrow">A LITTLE MORE LIFE, EVERY DAY</span><h1>Your place.<br />Your pace. <em>Your club.</em></h1><p>Pick the plan that fits your life right now. You can always find a new way to play.</p></div></section>
      <section className="membership-plans-section section-wrap"><SectionHeading centered eyebrow="SIMPLE PLANS, GOOD GAMES" title={<>Something that <em>fits.</em></>} description="No complicated tiers, no pressure. Just more ways to get out and enjoy your time." /><div className="plan-grid">{plans.map((plan) => <article className={`plan-card${plan.featured ? ' plan-card--featured' : ''}`} key={plan.name}>{plan.featured && <span className="plan-popular">THE NORTHSTAR FAVORITE</span>}<span className="plan-name">{plan.name}</span><p>{plan.note}</p><div className="plan-price">{plan.price}<span>{plan.cadence}</span></div><ul>{plan.features.map((feature) => <li key={feature}><FiCheck />{feature}</li>)}</ul><button className={plan.featured ? 'button button--lime plan-choose' : 'button button--outline plan-choose'} onClick={() => { setSelectedPlan(plan.name); document.getElementById('join-form')?.scrollIntoView({ behavior: 'smooth' }); }}>{plan.featured ? 'Choose this plan' : `Choose ${plan.name}`}<FiArrowUpRight /></button></article>)}</div><p className="plan-note">Membership plans are billed monthly. Drop in for a tour before you decide.</p></section>
      <section className="membership-form-section" id="join-form"><div className="membership-form-intro"><span className="eyebrow">LET’S MAKE IT OFFICIAL-ISH</span><h2>One small step<br />to a <em>whole lot more.</em></h2><p>Tell us a little about yourself and we’ll help you find your feet, pick your first session, and meet the right people.</p><div className="membership-reassurance"><FiCheck /><span>No pressure. We’ll answer every question before you decide.</span></div></div><form className="form-card" onSubmit={handleSubmit} noValidate><span className="form-kicker">BECOME A MEMBER</span><h3>Let’s get to know you.</h3><div className="form-row"><label>Your name<input name="name" autoComplete="name" placeholder="How should we call you?" required /></label><label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label></div><div className="form-row"><label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" required /></label><label>Membership plan<select name="plan" value={selectedPlan} onChange={(event) => setSelectedPlan(event.target.value)}><option>Starter</option><option>All Access</option><option>Family</option></select></label></div><label>What would you love to play?<select name="sport" defaultValue=""><option value="" disabled>Pick a sport (optional)</option><option>Cricket</option><option>Football</option><option>Basketball</option><option>Badminton</option><option>Tennis</option><option>A little bit of everything</option></select></label><Notice message={notice} type={noticeType} /><button className="button button--lime button--large form-submit" type="submit">Ask about membership <FiArrowUpRight /></button><small className="form-privacy">Just the details we need to help you get started. No spam, ever.</small></form></section>
      <section className="membership-faq section-wrap"><SectionHeading eyebrow="GOOD TO KNOW" title={<>A few things you might<br /><em>be wondering.</em></>} /><div className="faq-grid"><article><h3>Can I try before I join?</h3><p>Of course. Get in touch to arrange a complimentary club tour and a trial session in your sport of choice.</p></article><article><h3>Do I need to be experienced?</h3><p>Not at all. Our sessions are designed to meet you where you are, whether that’s your first time or your first time in a while.</p></article><article><h3>Can I change my plan later?</h3><p>Absolutely. We’ll help you find the right fit as your schedule, interests, and game change.</p></article></div><Link className="text-link" to="/contact">Still have questions? We’re all ears <FiArrowUpRight /></Link></section>
    </>
  );
}
