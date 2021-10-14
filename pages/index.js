import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>My Projects | Home</title>
        <meta name="keywords" content="project"/>
      </Head>
      <div>
        <h1 className={styles.title}>NDUMISO BANDA</h1>
        <p className={styles.text}>Programming graduate with proven skills, Strong creative ability, Strong communication skills,Attention to detail and a logic approach to work . Seeking a position as Web Developer at tech industries, to leverage organizational and research skills to support internal and external communication.</p>
        <p className={styles.text}>Aspiring Web Developer with a passion for web application development and success in managing development projects in tech industries. Skilled in conceptualizing, designing, development, and deploying software containing logical and mathematical solutions to business problems. Dedicated to driving innovation with the ability to follow industry and technological trends, and facilitating early adoption of innovations. <a href="https://github.com/dukeow8/Store.git" target="_blank">Recent project</a> </p>
        <Link href="/project/">
          <a className={styles.btn}>See My projects</a>
        </Link>
      </div>
    </>
  )
}
