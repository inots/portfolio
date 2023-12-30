import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Tabs from '@/components/tabs'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ino Tsichrintzi :)</title>
        <meta name="description" content="Portfolio - Ino Tsichrintzi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={styles.main}>
        <div className={styles.heading}>
            <h1 className={styles.title}>Hello! I am Ino, <br/>a software developer</h1>
        </div>
        <Tabs/>
      </main>
    </>
  )
}
