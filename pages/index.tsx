import Head from 'next/head';
import Link from 'next/link';
import { Canvas } from 'react-three-fiber';
import { Box, OrbitControls } from '@react-three/drei';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          React Three Fiber Fundamentals (Based on Three.js Fundamentals)
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Canvas camera={{ position: [0, 0, 2] }}>
        <directionalLight
          color={0xffffff}
          intensity={1.0}
          position={[-1, 2, 4]}
        />

        <Box args={[1, 1, 1]}>
          <meshPhongMaterial color={0x8844aa} />
        </Box>

        <OrbitControls />
      </Canvas>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.heading}>React–Three–Fiber Fundamentals</h1>
          <h2 className={styles.subheading}>Based on Three.js Fundamentals</h2>
        </header>

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
