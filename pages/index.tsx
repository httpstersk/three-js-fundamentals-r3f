import Head from 'next/head';
import Link from 'next/link';
import HomepageScene from './00-homepage/';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Three.js Fundamentals (React Three Fiber Version)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomepageScene />

      <main className={styles.main}>
        <h1 className={styles.heading}>Three.js Fundamentals</h1>
        <h2 className={styles.subheading}>
          <svg className={styles.asterisk} viewBox="0 0 256 256">
            <line x1="128" y1="40" x2="128" y2="216"></line>
            <line x1="51.78976" y1="84" x2="204.21024" y2="172"></line>
            <line x1="51.78976" y1="172" x2="204.21024" y2="84"></line>
          </svg>
          React Three Fiber Version
        </h2>

        <section className={styles.grid}>
          <Link href="/01-fundamentals">
            <a className={styles.card}>
              <h3>Fundamentals</h3>
              <p>Enter →</p>
            </a>
          </Link>

          <Link href="/02-primitives">
            <a className={styles.card}>
              <h3>Primitives</h3>
              <p>Enter →</p>
            </a>
          </Link>

          <Link href="/03-scenegraph">
            <a className={styles.card}>
              <h3>Scenegraph</h3>
              <p>Enter →</p>
            </a>
          </Link>

          <Link href="/04-textures">
            <a className={styles.card}>
              <h3>Textures</h3>
              <p>Enter →</p>
            </a>
          </Link>

          <Link href="/05-lights">
            <a className={styles.card}>
              <h3>Lights</h3>
              <p>Enter →</p>
            </a>
          </Link>

          <Link href="/06-cameras">
            <a className={styles.card}>
              <h3>Cameras</h3>
              <p>Enter →</p>
            </a>
          </Link>

          <Link href="/07-shadows">
            <a className={styles.card}>
              <h3>Shadows</h3>
              <p>Enter →</p>
            </a>
          </Link>

          <Link href="/08-fog">
            <a className={styles.card}>
              <h3>Fog</h3>
              <p>Enter →</p>
            </a>
          </Link>

          <Link href="/09-render-targets">
            <a className={styles.card}>
              <h3>Render Targets</h3>
              <p>Enter →</p>
            </a>
          </Link>

          <Link href="/10-custom-geometry">
            <a className={styles.card}>
              <h3>Custom Geometry</h3>
              <p>Enter →</p>
            </a>
          </Link>
        </section>
      </main>
    </div>
  );
}
