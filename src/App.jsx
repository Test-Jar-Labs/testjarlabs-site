import styles from './App.module.css'

const games = [
  {
    name: 'Doomscrollers',
    blurb: 'A privacy invading battle of digital profiling.',
    cta: 'Play',
    href: 'https://doomscrollers.testjarlabs.com',
    tone: 'red',
  },
  {
    name: 'Dance Break',
    blurb: 'Interactive dance challenges. The next-gen photobooth.',
    cta: 'Book',
    href: 'https://www.playdancebreak.com',
    tone: 'black',
  },
]

// The red organic shape from the brand guide, with its glow baked in.
function Blob({ className }) {
  return (
    <div className={`${styles.blob} ${className}`} aria-hidden="true">
      <div className={styles.blobShape}>
        <img src="/brand/blob-red.svg" alt="" />
      </div>
    </div>
  )
}

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
          <a href="#about">About</a>
          <a href="#games">Games</a>
        </nav>

        <h1 className={styles.lockup}>
          <img src="/brand/lockup-red.svg" alt="Test Jar Labs" width="383" height="248" />
        </h1>
      </header>

      {/* About — "2" brand identity slide */}
      <section id="about" className={styles.about}>
        <Blob className={styles.aboutBlobA} />
        <Blob className={styles.aboutBlobB} />
        <div className={styles.aboutFade} aria-hidden="true" />

        <p className={`${styles.label} ${styles.labelRight} ${styles.onRed}`}>About</p>
        <h2 className={styles.aboutTitle}>Who we are</h2>
        <div className={styles.aboutCopy}>
          <p>
            An interdimensional entertainment brand committed to expanding human experience and
            understanding through innovative content and technologies.
          </p>
          <p>
            Test Jar Labs exists to push the boundaries of what&rsquo;s possible, bridging dimensions
            to bring novel experiences and knowledge to its audience. It&rsquo;s a trailblazer, a
            gateway to new worlds, and a symbol of limitless possibilities.
          </p>
        </div>
      </section>

      {/* Games — "4" colors slide */}
      <section id="games" className={styles.games}>
        <p className={`${styles.label} ${styles.labelRight}`}>Games</p>

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
                  <span className={styles.cardBlurb}>{g.blurb}</span>
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
    </>
  )
}
