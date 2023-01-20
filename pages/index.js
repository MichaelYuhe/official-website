import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>
          FeatBit
        </h1>
        <p>
            FeatBit is a scalable, high-performance, and 100% open-source feature flags management platform that empowers all teams to deliver,
            control, experiment with and monetize their software. Please visit our <a href="https://github.com/featbit/featbit" target="_blank">Github</a> repository.
        </p>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
