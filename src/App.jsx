import { Analytics } from '@vercel/analytics/react'
import styles from './App.module.css'

const games = [
  {
    name: 'Doomscrollers',
    blurb: ['A privacy invading battle', 'of digital profiling.'],
    cta: 'Play',
    href: 'https://doomscrollers.testjarlabs.com',
    tone: 'red',
  },
  {
    name: 'Dance Break',
    blurb: ['Interactive dance challenges.', 'The next-gen photobooth.'],
    cta: 'Book',
    href: 'https://www.playdancebreak.com',
    tone: 'danceBreak',
  },
]

export default function App() {
  const year = new Date().getFullYear()

  return (
    <>
      {/* Hero — "11" title slide */}
      <header className={styles.hero}>
        <p className={`${styles.label} ${styles.labelLeft}`}>
          <strong>R.ATPC</strong>
        </p>
        <nav className={`${styles.label} ${styles.nav}`} aria-label="Sections">
          <a href="#games">Games</a>
        </nav>

        <h1 className={styles.lockup}>
          <img src="/brand/lockup-red.svg" alt="Test Jar Labs" width="383" height="248" />
        </h1>
      </header>

      {/* Games — "4" colors slide */}
      <section id="games" className={styles.games}>

        <h2 className={styles.gamesTitle}>Our games</h2>
        <ul className={styles.cards}>
          {games.map((g) => (
            <li key={g.name}>
              <a
                className={`${styles.card} ${styles[g.tone]}`}
                href={g.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.cardName}>{g.name}</span>
                <span className={styles.cardBody}>
                  <span className={styles.cardBlurb}>
                    {g.blurb.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </span>
                  <span className={styles.cardCta}>
                    {g.cta} <span aria-hidden="true">↗</span>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer className={styles.footer}>
        <span className={styles.footerMark} aria-hidden="true" />
        <span>© {year} Test Jar Labs</span>
      </footer>
      <Analytics />
    </>
  )
}
