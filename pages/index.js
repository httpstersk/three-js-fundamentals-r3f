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
              <h3>THREE 1 &rarr;</h3>
              <p>Fundamentals</p>
            </a>
          </Link>

          <Link href="/02-responsive">
            <a className={styles.card}>
              <h3>THREE 2 &rarr;</h3>
              <p>Responsive</p>
            </a>
          </Link>

          <Link href="/03-primitives">
            <a className={styles.card}>
              <h3>THREE 3 &rarr;</h3>
              <p>Primitives</p>
            </a>
          </Link>

          <Link href="/04-scenegraph">
            <a className={styles.card}>
              <h3>THREE 4 &rarr;</h3>
              <p>Scenegraph</p>
            </a>
          </Link>

          <Link href="/05-textures">
            <a className={styles.card}>
              <h3>THREE 5 &rarr;</h3>
              <p>Textures</p>
            </a>
          </Link>

          <Link href="/06-lights">
            <a className={styles.card}>
              <h3>THREE 6 &rarr;</h3>
              <p>Lights</p>
            </a>
          </Link>

          <Link href="/07-cameras">
            <a className={styles.card}>
              <h3>THREE 7 &rarr;</h3>
              <p>Cameras</p>
            </a>
          </Link>

          <Link href="/08-shadows">
            <a className={styles.card}>
              <h3>THREE 8 &rarr;</h3>
              <p>Shadows</p>
            </a>
          </Link>

          <Link href="/09-fog">
            <a className={styles.card}>
              <h3>THREE 9 &rarr;</h3>
              <p>Fog</p>
            </a>
          </Link>

          <Link href="/10-render-targets">
            <a className={styles.card}>
              <h3>THREE 10 &rarr;</h3>
              <p>Render Targets</p>
            </a>
          </Link>
        </section>
      </main>
    </div>
  );
}
