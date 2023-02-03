import Layout from '../../components/layout/layout'
import { getAllBlogIds, getBlogData } from '../../lib/blogs'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.scss'
import styles from "./blog.module.scss";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={`container-xxl`}>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div className={`${styles.blogContainer}`} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllBlogIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getBlogData(params.id)
  return {
    props: {
      postData
    }
  }
}