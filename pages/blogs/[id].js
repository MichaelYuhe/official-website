import Layout from '../../components/layout/layout'
import { getAllBlogIds, getBlogData } from '../../lib/blogs'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.scss'
import styles from "./blog.module.scss";
import { NextSeo, ArticleJsonLd } from 'next-seo';

export default function Post({ postData }) {
  return (
    <Layout>
      <NextSeo
        title={postData.title}
        description={postData.description}
        // canonical="www.example.com/next-seo-blog"
        openGraph={{
          type: 'article',
          article: {
            publishedTime: postData.publishedDate,
            modifiedTime: postData.modifiedDate,
            authors: postData.authors,
            tags: postData.tags,
          },
          url: `www.featbit.co/blogs/${postData.url}`,
          // images: {
          //   url: 'https://www.test.ie/images/cover.jpg',
          //   width: 850,
          //   height: 650,
          //   alt: 'Photo of text',
          // },
          site_name: 'FeatBit Blog'
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url={`www.featbit.co/blogs/${postData.url}`}
        title={postData.title}
        datePublished={postData.publishedDate}
        dateModified={postData.modifiedDate}
        authorName={postData.authors[0] || ""}
        description={postData.description}
      />
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={`container-xxl ${styles.articleContainer}`} >
        <h1 className={utilStyles.headingXl + ' ' + styles.blogTitle} >{postData.title}</h1>
        <div className={utilStyles.lightText}>
          Last updated date: <Date dateString={postData.modifiedDate} />
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
