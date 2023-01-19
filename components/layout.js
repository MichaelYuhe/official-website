import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import imgPia from '../public/images/pia.png'
import drone from '../public/images/hero-drone.webp'

export const siteTitle = 'FeatBit'

export default function Layout({ children, home }) {
  return (
      <div>
          <Image className={styles.drone} src={drone} width={140}></Image>
          <Image className={styles.planet} src={imgPia} width={500}></Image>
          <div className={styles.container}>
              <Head>
                  <link rel="icon" href="/favicon.svg" />
                  <meta name="viewport" content="width=device-width, initial-scale=1"/>
                  <meta
                      name="description"
                      content="FeatBit feature flags feature toggle progressive experiment AB testing"
                  />
                  <meta name="og:title" content={siteTitle} />
              </Head>
              <main>{children}</main>
          </div>
      </div>
  )
}
