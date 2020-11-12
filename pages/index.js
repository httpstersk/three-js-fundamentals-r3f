import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>THREE.js Journey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.grid}>
          <Link href="/fundamentals">
            <a className={styles.card}>
              <h3>THREE Day 1 &rarr;</h3>
              <p>Fundamentals</p>
            </a>
          </Link>

          <Link href="/primitives">
            <a className={styles.card}>
              <h3>THREE Day 2 &rarr;</h3>
              <p>Primitives</p>
            </a>
          </Link>

          <Link href="/scenegraph">
            <a className={styles.card}>
              <h3>THREE Day 3 &rarr;</h3>
              <p>Scenegraph</p>
            </a>
          </Link>

          <Link href="/materials">
            <a className={styles.card}>
              <h3>THREE Day 4 &rarr;</h3>
              <p>Materials</p>
            </a>
          </Link>
        </section>
      </main>
    </div>
  );
}
