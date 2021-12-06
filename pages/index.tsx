import type { NextPage } from 'next'
import Head from 'next/head'
import { browserName } from 'react-device-detect'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TUfast - Das Produktivitäts-Tool für TU Dresden Studierende 🚀</title>
        <meta name="description" content="TUfast ist ein Browser-Addon, dass den Alltag von Studierenden an der TU Dresden erleichtert. Es kann unter anderem automaisch Logins vornehmen und Benachrichtigungen für neue E-Mail geben." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Du nutzt {browserName}.
      </main>
    </div>
  )
}

export default Home
