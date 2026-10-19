import Logo from './Logo.jsx'
import styles from './App.module.css'

const games = [
  {
    name: 'Doomscrollers',
    blurb: 'a privacy invading battle of digital profiling',
    href: 'https://doomscrollers.testjarlabs.com',
  },
  {
    name: 'Dance Break',
    blurb: 'interactive dance challenges — the next-gen photobooth',
    href: 'https://www.playdancebreak.com',
  },
]

export default function App() {
  const year = new Date().getFullYear()

  return (
    <>
      <section className={styles.hero}>
        <span className={styles.cornerBar} aria-hidden="true" />

        <div className={styles.lockup}>
          <Logo className={styles.logo} animated />
          <div className={styles.copy}>
            <h1 className={styles.title}>Test Jar Labs</h1>
            <p className={styles.body}>
              An experimental games studio. We make interactive, AR and real-world games,
              and build playful experiences with brands we love.
            </p>
          </div>
        </div>

        <a className={styles.cta} href="#games">
          Our games <span className={styles.arrow} aria-hidden="true" />
        </a>

        <div className={styles.bottomBar} aria-hidden="true">
          <span />
          <span />
        </div>
      </section>

      <section id="games" className={styles.games}>
        <h2 className={styles.gamesTitle}>Our games</h2>
        <ul className={styles.gameList}>
          {games.map((g) => (
            <li key={g.name}>
              <a href={g.href} target="_blank" rel="noreferrer" className={styles.game}>
                <span className={styles.gameName}>{g.name}</span>
                <span className={styles.gameBlurb}>{g.blurb}</span>
                <span className={styles.gameArrow} aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
        <footer className={styles.footer}>© {year} Test Jar Labs</footer>
      </section>
    </>
  )
}
