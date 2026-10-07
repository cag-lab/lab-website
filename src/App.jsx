import { useEffect, useState } from 'react'
import { lab, about, team, onwards, scholar, recentPapers, research, links } from './content.js'
import NeuralPulse from './NeuralPulse.jsx'

const NAV = [
  ['about', 'About'],
  ['research', 'Research'],
  ['community', 'Community'],
  ['papers', 'Papers'],
]

function renderTextWithLinks(text) {
  const urlRegex = /(https?:\/\/[^\s)]+)/g
  const parts = text.split(urlRegex)

  return parts.map((part, index) => {
    if (part.startsWith('http://') || part.startsWith('https://')) {
      return (
        <a key={`${part}-${index}`} href={part} target="_blank" rel="noreferrer">
          {part}
        </a>
      )
    }
    return <span key={`${part}-${index}`}>{part}</span>
  })
}

function formatYearRange(value) {
  if (!value) return value
  return value.endsWith('-') ? `${value}present` : value
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.15 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
        <span className="nav__logo" aria-hidden="true">
          <svg viewBox="0 0 64 64"><path d="M10 34h12l5-12 7 22 6-16 4 6h10" /></svg>
        </span>
        {lab.name}
      </a>
      <button
        className="nav__toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span /><span />
      </button>
      <nav className={`nav__links ${open ? 'is-open' : ''}`}>
        {NAV.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <NeuralPulse />
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__inner">
        <p className="eyebrow">{lab.institution} · Pulmonary & Critical Care</p>
        <h1>
          Machine learning<br />
          <em>for the ICU.</em>
        </h1>
        <p className="hero__lede">{lab.summary}</p>
        <div className="hero__actions">
          <a className="btn btn--ghost" href="#about">About the Lab</a>
          <a className="btn btn--primary" href="#research">Explore our research</a>
        </div>
      </div>
      <a href="#about" className="hero__scroll" aria-label="Scroll to About">
        <span />
      </a>
    </section>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <div className="about">
        <div className="about__text reveal">
          <p className="eyebrow">About</p>
          <h2>Meet the Lab</h2>
          {about.map((p, i) => {
            if (i === 0) {
              return (
                <p key={i} className="lead about__lead-with-headshot">
                  <img
                    src="/cathy-gao-howard-headshot.jpg"
                    alt="Headshot of Cathy Gao-Howard"
                    loading="lazy"
                    className="about__headshot"
                  />
                  {renderTextWithLinks(p)}
                </p>
              )
            }
            return <p key={i}>{renderTextWithLinks(p)}</p>
          })}
          <div className="about__team">
            <h3>Team</h3>
            {team.map((member) => (
              <article key={member.name} className="team-member">
                {member.photoSrc && (
                  <img
                    src={member.photoSrc}
                    alt={member.photoAlt}
                    loading="lazy"
                    className={`team-member__photo ${member.photoClass || ''}`.trim()}
                  />
                )}
                <p className="team-member__name">{member.name}</p>
                {member.role && <p className="team-member__meta">{renderTextWithLinks(member.role)}</p>}
                {member.mentorLine && <p className="team-member__meta">{renderTextWithLinks(member.mentorLine)}</p>}
                {member.years && <p className="team-member__meta">{renderTextWithLinks(formatYearRange(member.years))}</p>}
                {member.blurb && <p>{renderTextWithLinks(member.blurb)}</p>}
                {member.secondaryPhotoSrc && (
                  <img
                    src={member.secondaryPhotoSrc}
                    alt={member.secondaryPhotoAlt}
                    loading="lazy"
                    className={`team-member__photo ${member.secondaryPhotoClass || ''}`.trim()}
                  />
                )}
              </article>
            ))}
          </div>
          <div className="about__team">
            <h3>Onwards</h3>
            {onwards.map((member) => (
              <article key={member.name} className="team-member">
                {member.photoSrc && (
                  <img
                    src={member.photoSrc}
                    alt={member.photoAlt}
                    loading="lazy"
                    className={`team-member__photo ${member.photoClass || ''}`.trim()}
                  />
                )}
                <p className="team-member__name">{member.name}</p>
                {member.role && <p className="team-member__meta">{renderTextWithLinks(member.role)}</p>}
                {member.mentorLine && <p className="team-member__meta">{renderTextWithLinks(member.mentorLine)}</p>}
                {member.years && <p className="team-member__meta">{renderTextWithLinks(formatYearRange(member.years))}</p>}
                {member.blurb && <p>{renderTextWithLinks(member.blurb)}</p>}
                {member.secondaryPhotoSrc && (
                  <img
                    src={member.secondaryPhotoSrc}
                    alt={member.secondaryPhotoAlt}
                    loading="lazy"
                    className={`team-member__photo ${member.secondaryPhotoClass || ''}`.trim()}
                  />
                )}
              </article>
            ))}
          </div>
          <blockquote>{lab.tagline}</blockquote>
        </div>
      </div>
    </section>
  )
}

const ICONS = {
  pulse: <path d="M3 12h4l2-6 4 12 3-8 2 2h3" />,
  network: (
    <>
      <circle cx="5" cy="6" r="2" /><circle cx="5" cy="18" r="2" />
      <circle cx="19" cy="12" r="2" /><circle cx="12" cy="12" r="2" />
      <path d="M7 6.8l3.2 4M7 17.2l3.2-4M14 12h3" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 14.5c.6-.3 1.3-.5 2-.5 2.8 0 4.5 2.2 4.5 5" />
    </>
  ),
}

function Research() {
  return (
    <section className="section section--tint" id="research">
      <div className="section__head reveal">
        <p className="eyebrow">Research</p>
        <h2>From bedside data to better decisions</h2>
        <p className="muted">
          Critically ill patients generate an extraordinary amount of data. We ask what it can
          teach us.
        </p>
      </div>
      <div className="cards">
        {research.map((r, i) => (
          <article key={r.title} className="card reveal" style={{ '--delay': `${i * 120}ms` }}>
            <div className="card__icon">
              <svg viewBox="0 0 24 24">{ICONS[r.icon]}</svg>
            </div>
            <h3>{r.title}</h3>
            <p>{r.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Community() {
  return (
    <section className="section section--tint" id="community">
      <div className="section__head reveal">
        <p className="eyebrow">Community</p>
        <h2>Mentors, colleagues & collaborators</h2>
        <p className="muted">
          This work happens within a wonderful community at Northwestern. Explore some of the
          groups we're connected to.
        </p>
      </div>
      <div className="links">
        {links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="link-card reveal"
            style={{ '--delay': `${i * 120}ms` }}
          >
            {l.imageSrc && (
              <img src={l.imageSrc} alt={l.imageAlt} loading="lazy" className="link-card__image" />
            )}
            <p className="link-card__sub">{l.subtitle}</p>
            <h3>{l.title}</h3>
            <p>{l.body}</p>
            <span className="link-card__host">
              {l.host}
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" /></svg>
            </span>
          </a>
        ))}
      </div>
      <div className="join reveal">
        <div>
          <h3>Students & trainees</h3>
          <p>
            Interested in critical care, clinical data, or machine learning? We love working with
            motivated students — reach out to talk about opportunities.
          </p>
        </div>
        {lab.email && (
          <a className="btn btn--primary" href={`mailto:${lab.email}`}>Get in touch</a>
        )}
      </div>
    </section>
  )
}

function RecentPapers() {
  return (
    <section className="section" id="papers">
      <div className="section__head reveal">
        <p className="eyebrow">Recent Papers</p>
        <h2>Latest publications</h2>
        <p className="muted">
          See full profile on{' '}
          <a href={scholar.profileUrl} target="_blank" rel="noreferrer">Google Scholar</a>.
        </p>
      </div>
      <div className="papers-list reveal">
        {recentPapers.map((paper) => (
          <a key={paper.href} href={paper.href} target="_blank" rel="noreferrer" className="paper-link">
            {paper.title}
          </a>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        <strong>{lab.name}</strong> · Division of Pulmonary & Critical Care Medicine ·{' '}
        {lab.institution}
      </p>
      <p className="muted">© {new Date().getFullYear()} {lab.pi.replace(', MD', '')}</p>
    </footer>
  )
}

export default function App() {
  useReveal()
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Research />
        <Community />
        <RecentPapers />
      </main>
      <Footer />
    </>
  )
}
