import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Three.js Fundamentals (R3F Version)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.grid}>
          <Link href="/01-fundamentals">
            <a className={styles.card}>
              <h3>Fundamentals</h3>
              <p>Enter →</p>
            </a>
          </Link>

          <Link href="/02-responsive">
            <a className={styles.card}>
              <h3>Responsive</h3>
              <p>Enter →</p>
            </a>
          </Link>

          <Link href="/03-primitives">
            <a className={styles.card}>
              <h3>Primitives</h3>
              <p>Enter →</p>
            </a>
          </Link>

          <Link href="/04-scenegraph">
            <a className={styles.card}>
              <h3>Scenegraph</h3>
              <p>Enter →</p>
            </a>
          </Link>

          <Link href="/05-textures">
            <a className={styles.card}>
              <h3>Textures</h3>
              <p>Enter →</p>
            </a>
          </Link>

          <Link href="/06-lights">
            <a className={styles.card}>
              <h3>Lights</h3>
              <p>Enter →</p>
            </a>
          </Link>

          <Link href="/07-cameras">
            <a className={styles.card}>
              <h3>Cameras</h3>
              <p>Enter →</p>
            </a>
          </Link>

          <Link href="/08-shadows">
            <a className={styles.card}>
              <h3>Shadows</h3>
              <p>Enter →</p>
            </a>
          </Link>

          <Link href="/09-fog">
            <a className={styles.card}>
              <h3>Fog</h3>
              <p>Enter →</p>
            </a>
          </Link>

          <Link href="/10-render-targets">
            <a className={styles.card}>
              <h3>Render Targets</h3>
              <p>Enter →</p>
            </a>
          </Link>

          <Link href="/11-custom-geometry">
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
