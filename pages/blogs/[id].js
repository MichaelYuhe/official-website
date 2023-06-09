import Layout from '../../components/layout/layout'
import { getAllBlogIds, getBlogData } from '../../lib/blogs'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.scss'
import styles from "./blog.module.scss";
import { NextSeo, ArticleJsonLd } from 'next-seo';
import Link from "next/link";
import { useEffect } from 'react';
// import Highlight.js and the languages you need
import 'highlight.js/styles/default.css';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import csharp from 'highlight.js/lib/languages/csharp';
import json from 'highlight.js/lib/languages/json';
import yaml from 'highlight.js/lib/languages/yaml';
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('csharp', csharp)
hljs.registerLanguage('json', json)
hljs.registerLanguage('yaml', yaml)


export default function Post({ postData }) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <Layout>
      <NextSeo
        title={postData.title}
        description={postData.description}
        canonical={`www.featbit.co/blogs/${postData.url}`}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: postData.publishedDate,
            modifiedTime: postData.modifiedDate,
            authors: postData.authors,
            tags: postData.tags,
          },
          url: `www.featbit.co/blogs/${postData.url}`,
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
      <div className={styles.featBitIntroduceContainer}>
        <h3 style={{ fontSize: "1.25rem" }}>
          FeatBit, Free & Open Source Feature Flags Management Service
        </h3>
        <div >
          Scalable, Great Performance, free to install FeatBit in any environment
        </div>
        <div style={{ display: "flex" }}>
          <Link href="https://github.com/featbit/featbit" target="_blank" className='textLink'>
            <button type="button" className={`btn btn-primary ${styles.githubBtn}`}>
              <img style={{ marginTop: "15px" }}
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCA3MiAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC4yODIgMC41MTE5MDdDMTQuMTA5NyAwLjg0MDM3IDEzLjkyMDYgMS4zOTIxMiAxMy44NjE2IDEuNzM4MjFMMTMuNzU0MyAyLjM2NzQ1TDEyLjczODkgMi4zMDU5NkMxMS40OTY5IDIuMjMwOTkgMTAuOTc2OCAyLjM3ODc3IDEwLjk3NjggMi44MDcwMkMxMC45NzY4IDMuMjU2NDggMTEuMjk4MSAzLjQ3NDE5IDEyLjE3MzggMy42MTg1NkMxMy40NDI0IDMuODI3NjUgMTMuNDUxOSAzLjg0OTc2IDEzLjY1NjMgNy4wNDE4MUMxMy44NDg3IDEwLjA0NTEgMTMuOTk3NSAxMC43MzY0IDE0LjY5MTUgMTEuODQ2QzE1LjQzMzMgMTMuMDMyMiAxNi41Mjg1IDEzLjM1MDQgMTcuNjA2NSAxMi42OTMxQzE4Ljk0ODQgMTEuODc1MSAyMS40NTQ4IDguOTA4MTQgMjEuMTAyIDguNTU1NEMyMC45ODIzIDguNDM1NjcgMjAuMzU4MyA4Ljg4NTQ5IDE5LjIzMDcgOS45MDQ2OEMxOC4zMDAxIDEwLjc0NTUgMTcuMzUwNSAxMS41MzQ0IDE3LjEyMDIgMTEuNjU3N0MxNi41MDE5IDExLjk4ODkgMTUuODM1MyAxMS41NDc1IDE1LjMwNTMgMTAuNDU2MUMxNC45MjA3IDkuNjYzOTUgMTQuODYwMSA5LjI0OTAxIDE0Ljc4ODkgNi45MTU5NkwxNC43MDgyIDQuMjczMTVMMTUuMTM0OCA0LjE4NDdDMTUuMzY5MyA0LjEzNjE1IDE2LjQxMDggNC4wNTg4NSAxNy40NDkgNC4wMTNDMTkuNjM2OCAzLjkxNjI4IDE5Ljk2NiAzLjgyMDgyIDE5Ljk2NiAzLjI4MzA4QzE5Ljk2NiAyLjU2MDkgMTkuNzAxMyAyLjQ5MTE0IDE3LjM0MjkgMi41OTMwOEwxNS4xMTE4IDIuNjg5NDRWMS41MTY3MUMxNS4xMTE4IDAuMDI2NjcyIDE0Ljc1OTggLTAuMzk5NTk0IDE0LjI4MiAwLjUxMTkwN1pNNS45OTAyNyAxLjA0NTVDNS42NTgwMyAxLjE0MTE1IDUuMDUxMjYgMS40MjY4MiA0LjY0MTg5IDEuNjgwMzJDMS45MTM2OCAzLjM2OTc0IDIuMzAxMTIgNC4zODk4MyA2LjUwNzE0IDYuNTkxMjdDOS42MTc5MyA4LjIxOTU3IDEwLjUzMzkgOS4yMjk5NSA5Ljg0Nzg3IDEwLjI3NjhDOS4xNjk1NSAxMS4zMTIgNi42NTExNSAxMS45MjQ5IDQuOTU4NjcgMTEuNDY2OEMzLjQ4MzAxIDExLjA2NzUgMi4xODk4MyA5Ljc4NjIgMi4xODk4MyA4LjcyMzE0QzIuMTg5ODMgOC4xMDgyOCAxLjk1MjUyIDguMDY0OTYgMS41NzA4NCA4LjYxMDA2QzAuOTg1ODIzIDkuNDQ1MTUgMS4zNTg4NyAxMC41MDEyIDIuNTkxNDcgMTEuNDk5N0MzLjYxNDc5IDEyLjMyODUgNC4yMzA3MyAxMi42MjE0IDUuNTAxNDQgMTIuODgzM0M3LjMxMDQxIDEzLjI1NjIgOS41MDA3MSAxMi43MjEzIDEwLjUxOSAxMS42NTgxQzExLjE2MDcgMTAuOTg4NCAxMS41ODM1IDkuOTAyNyAxMS40NDYxIDkuMjc3NzdDMTEuMzg0MSA4Ljk5NTMzIDEwLjg3MzkgOC4yODg0MyAxMC4zMTIzIDcuNzA2NDdDOS40OTAyOSA2Ljg1NDg0IDguODI0NTUgNi40MTE2NyA2Ljg5NTgzIDUuNDMxODVDNS41NzgyIDQuNzYyNTIgNC40NTU2NCA0LjA5ODU4IDQuNDAwOTggMy45NTYxOUM0LjIzMzYxIDMuNTIwMDQgNS4wMzcyNCAyLjg3MjQ2IDYuMTI0MjEgMi41Njc1NUM3LjY1Mzk4IDIuMTM4MjIgNy45MDk0NSAyLjE4Mzg5IDguNzE0NyAzLjAzMDQ5TDkuNDMwOTYgMy43ODM0Mkw5Ljc2NTcxIDMuMzcwMUMxMS4wMDEgMS44NDQ0NiA4LjUyMDg5IDAuMzE3MzgxIDUuOTkwMjcgMS4wNDU1Wk01NC4yMTA5IDEuMjAyOTlDNTMuODEzMiAxLjYwMDY3IDUzLjc5MDQgMS45NTk3IDU0LjAzOTcgMy44ODE1OEM1NC4yNjg4IDUuNjQ1NjEgNTQuMDI4OCA3LjA2NTcyIDUzLjIyNjcgOC42OTE2OEM1Mi4xNTQzIDEwLjg2NTggNTEuMDcwMSAxMS40NDIyIDUwLjE5OTYgMTAuMzAwOUM0OS41NjczIDkuNDcxNzYgNDkuNDEwOSA4LjYzNzc0IDQ5LjE4OTcgNC45MTU3QzQ4Ljk5IDEuNTUzMzkgNDguODIzOSAwLjgyMzgzIDQ4LjM0NzYgMS4yMTkxN0M0Ny42NjggMS43ODMxNSA0Ny41MDkxIDIuNDcxMTggNDcuNjI2OSA0LjMzOTMxQzQ3Ljg5OTEgOC42NjA0IDQ4LjUxNjYgMTAuOTgzNiA0OS42NTk1IDExLjk4NzFDNTEuMDEwNiAxMy4xNzM1IDUyLjcwNTQgMTIuMzgwMyA1NC4xNzA0IDkuODc1OTFDNTQuNTMyMiA5LjI1NzQ2IDU0Ljg4MTUgOC44MTE3NyA1NC45NDY3IDguODg1NDlDNTUuMDEyIDguOTU5MiA1NS4xNjUgOS41NDQyMSA1NS4yODY5IDEwLjE4NTdDNTUuNTY2NCAxMS42NTc5IDU1LjkxNTIgMTIuMzQ1NCA1Ni4zODI3IDEyLjM0NTRDNTYuOTE2MSAxMi4zNDU0IDU2Ljk3MjQgMTEuOTczOCA1Ni42NTk5IDEwLjUxNDFDNTYuNTA1MSA5Ljc5MDg3IDU2LjE3MTEgNy42NjIwNiA1NS45MTc2IDUuNzgzMzNDNTUuMzg5NCAxLjg2ODAxIDU1LjIxNzMgMS4wOTcyOCA1NC44MzgxIDAuOTUxODM2QzU0LjY4ODcgMC44OTQzMDUgNTQuNDA2NSAxLjAwNzM5IDU0LjIxMDkgMS4yMDI5OVpNNjEuNzYwOCAxLjExMDIyQzYwLjY3MDIgMS40NTAxOSA1OS4xMjY0IDIuNTUwMTEgNTguODY5NyAzLjE2OTgyQzU4LjQ2MTYgNC4xNTUzOSA1OS4zOTE0IDUuMDQxNTQgNjIuNjM0OSA2Ljc1Nzc1QzY1Ljg5MzMgOC40ODE4NyA2Ni41ODgzIDkuNTI3NjcgNjUuMjU0MiAxMC42OTlDNjMuNzI1MyAxMi4wNDE0IDYwLjU3ODcgMTEuOTM3NSA1OS4wNzcgMTAuNDk0OUM1OC4zNTM0IDkuNzk5ODYgNTcuOTM0MyA5LjA0NzExIDU4LjA3MTUgOC42ODkzNEM1OC4yMjE2IDguMjk4MzEgNTcuODU5MyA4LjE2NTA5IDU3LjUzMzIgOC40OTEyMkM1Ny4xNTI4IDguODcxNjQgNTcuMTc0NyA5Ljk4MTggNTcuNTc0MyAxMC41ODhDNTguMDI3NiAxMS4yNzUzIDU5LjM3NDIgMTIuMjg2NiA2MC4yNDU4IDEyLjU5NDFDNjIuMTA1NCAxMy4yNTAzIDY0LjQ2MDggMTMuMDUgNjUuODE3OCAxMi4xMjAzQzY2LjY0MDQgMTEuNTU2NyA2Ny4zMTY4IDEwLjQyNzUgNjcuMzE2OCA5LjYxNzM4QzY3LjMxNjggOS4wMzgzIDY3LjE2NTYgOC43NzkwNSA2Ni4yODMxIDcuODQ1MDhDNjUuNDU0MSA2Ljk2NzU2IDY0Ljc2ODYgNi40OTQ5MSA2Mi44MjIyIDUuNDU4MUM2MC45NjEzIDQuNDY2OTYgNjAuMzgyIDQuMDczNTkgNjAuMzM5MiAzLjc3MjA5QzYwLjI2ODggMy4yNzc1MSA2MC44NDg0IDIuODc4OTMgNjIuMTM2NyAyLjUzNjA5QzYzLjYwNTkgMi4xNDUwNiA2My44ODEgMi4xOTYxMSA2NC42MjAxIDIuOTk2NjlDNjQuOTg1MiAzLjM5MjIxIDY1LjM0MSAzLjcxNTgyIDY1LjQxMDYgMy43MTU4MkM2NS40ODAzIDMuNzE1ODIgNjUuNjYwOCAzLjQyMDA4IDY1LjgxMiAzLjA1ODUzQzY2LjA2NyAyLjQ0ODE3IDY2LjA2MjMgMi4zNjc5OSA2NS43NDUxIDEuOTM0ODlDNjQuOTkyIDAuOTA2NzExIDYzLjQ0MjEgMC41ODU5NzcgNjEuNzYwOCAxLjExMDIyWk0zNS4zMzQzIDEuMzAzNDlDMzUuMjc0MiAxLjQ1OTkgMzUuMjI1MiAzLjc4ODA5IDM1LjIyNTIgNi40NzcxMUMzNS4yMjUyIDEwLjYxMTQgMzUuMjY4MyAxMS40MjgyIDM1LjUwNTEgMTEuNzY2QzM1LjcyOTEgMTIuMDg2IDM2LjQwMjYgMTIuMzI0NCAzNi41MDY3IDEyLjEyMDdDMzYuNTE5MiAxMi4wOTU5IDM2LjU4NSAxMC44MjE4IDM2LjY1MyA5LjI4OTFDMzYuNzY5NyA2LjY1NzI1IDM2LjgwOCA2LjQzNzU2IDM3LjM0MjEgNS4zMzM4N0MzOC4zNzc1IDMuMTk0MjcgMzkuMTExOSAyLjY1Mzg0IDQxLjAwMTIgMi42NDE0NEM0MS45NDA4IDIuNjM1MTUgNDIuMjA0IDIuMjM5NjIgNDEuNTkgMS43NTY1NUM0MS4xMzU1IDEuMzk5MTQgNDAuNTYyOSAxLjI5MjUyIDM5LjU0IDEuMzc1MDVDMzguOTU1MyAxLjQyMjMzIDM4LjE2NTMgMS45MTUyOSAzNy4zOTIzIDIuNzE1MTVDMzcuMDUxNCAzLjA2NzcgMzYuNzA3NiAzLjM1NjI2IDM2LjYyODIgMy4zNTYyNkMzNi41NDg3IDMuMzU2MjYgMzYuNDgzNiAzLjA4NTE0IDM2LjQ4MzYgMi43NTM4QzM2LjQ4MzYgMS44NDY5OCAzNi4xNDEyIDEuMDE5MDcgMzUuNzY2MSAxLjAxOTA3QzM1LjU4ODcgMS4wMTkwNyAzNS4zOTQzIDEuMTQ3MDggMzUuMzM0MyAxLjMwMzQ5Wk0yNi41NDUzIDIuMDI3M0MyNS4zMjExIDIuNjM3MyAyMy43ODU0IDQuMDUwOTQgMjMuMTg4NCA1LjExNzIzQzIyLjU0MTEgNi4yNzM0MiAyMi4yMDIxIDcuNjgwMjIgMjIuMjAyMSA5LjIxMDM1QzIyLjIwMjEgMTAuMjQ0NSAyMi4yODE0IDEwLjYxMzQgMjIuNjA4OSAxMS4xMDUzQzIzLjA4NTkgMTEuODIxMyAyNC4wODY3IDEyLjM1ODkgMjUuMTcwNSAxMi40ODFDMjYuNzE0NSAxMi42NTUgMjguODEzNCAxMS4yMTAzIDI5Ljk1NDkgOS4xODc4OEMzMC4yNTgyIDguNjUwMzMgMzAuNTY4OCA4LjIxMDQgMzAuNjQ0OSA4LjIxMDRDMzAuNzIxMSA4LjIxMDQgMzAuOTY0IDguNzA1NyAzMS4xODQ4IDkuMzExMDNDMzEuNDA1NSA5LjkxNjM2IDMxLjg1NyAxMC43MDUxIDMyLjE4ODEgMTEuMDYzOUMzMi42OTA0IDExLjYwODEgMzIuODQzOCAxMS42ODMzIDMzLjExNDQgMTEuNTE3MkMzMy42MzU0IDExLjE5NzEgMzMuNTkzOSAxMC43OTg5IDMyLjkyNDUgOS42OTYzMUMzMi4xMjExIDguMzcyNTcgMzEuNTkzMSA2LjYxNzg4IDMxLjM0NDggNC40NDUzOEMzMS4wODkzIDIuMjA4MTYgMzEuMTM2IDIuMzE2NTcgMzAuMjUwMSAxLjkxNDM5QzI5LjEyNDggMS40MDM2MyAyNy43MTA1IDEuNDQ2NzggMjYuNTQ1MyAyLjAyNzNaTTI5LjU2NzQgMy4xMzE1M0MyOS41NjQ0IDMuMjA1NiAyOS40NDk1IDMuNDE0MzMgMjkuMzEyNSAzLjU5NTM3QzI5LjA5NzMgMy44NzkyNSAyOS4xMTA0IDQuMDYxOSAyOS40MDggNC45MjY4NEMzMC4wMDc3IDYuNjcwMiAyOS43OTcyIDcuNzMwOTIgMjguNTQ4OCA5LjI1NDRDMjcuNTc1NiAxMC40NDIgMjYuNDYyMiAxMS4wODY5IDI1LjM4NSAxMS4wODY5QzI0LjYyMiAxMS4wODY5IDI0LjQyMSAxMS4wMDQ2IDIzLjg5MiAxMC40NzU3QzIzLjMxNDggOS44OTgzOCAyMy4yODEgOS43OTYwOSAyMy4yODQ3IDguNjMyODlDMjMuMjg4OSA3LjMxNzA2IDIzLjY0MzggNi4yODQyIDI0LjQ1ODQgNS4yMTYyOUMyNS4xNjI5IDQuMjkyMzkgMjYuNDgyIDMuMzA3MTcgMjcuMjAxMSAzLjE2NzEyQzI4LjExNDggMi45ODk1IDI5LjU3NDQgMi45Njc1NiAyOS41Njc0IDMuMTMxNTNaIiBmaWxsPSIjRjdCQTFFIi8+CjxwYXRoIGQ9Ik02OC45NzEzIDI1LjU2NzhDNjkuMzk2MiAyNS41NzEzIDcwLjk5MTggMjEuMDQ4MiA3MS4wMDcxIDE5LjIyNDVDNzEuMDE0IDE4LjM5NSA2NS45MDkzIDE5LjE4MTggNjQuNzY2IDIwLjQxNjdDNjMuMTkyMiAyMi4zMzkyIDY1LjYxMSAyMC45NzY4IDY3LjE2NDEgMjEuNTQyOUM2My44ODc1IDIzLjg2NiA2MC45NTQyIDI3LjAxMjUgNTcuMTkyNCAyNi42NjNDNTQuNTE5NSAyNi40MTQ2IDUxLjk5NDQgMjMuNTUzMyA1MS4wMTU3IDIyLjA0ODRDNDkuNzcwNSAyMC4xMzM3IDQ4LjQ1MTQgMTYuODE2MyA0OC4wNzQ0IDE4LjE1MjNDNDcuNzUyOCAxOS4yOTIzIDQ4LjQ3NjIgMjAuODk2OCA0OS43MzMxIDIzLjAwNTZDNTAuOTkwMSAyNS4xMTQzIDUzLjU0MDQgMjcuMzM0MSA1NS43NjUgMjguMDA3NEM2MC43MDA1IDI5LjUwMTEgNjQuNjgxOSAyNS44NDQ2IDY3Ljk1NTIgMjIuODM4NEw2OC4wMDMzIDIyLjc5NDNDNjguMTg0OCAyNC40Mjg3IDY4LjI0NiAyNS41NjE3IDY4Ljk3MTMgMjUuNTY3OFoiIGZpbGw9IiNGN0JBMUUiLz4KPC9zdmc+Cg=="
                alt=""></img>
              <div>
                <i className="bi bi-github"></i>
                Check GitHub
              </div>
            </button>
          </Link>
          <div style={{ width: "20px" }}></div>
          <Link href="https://join.slack.com/t/featbit/shared_invite/zt-1ew5e2vbb-x6Apan1xZOaYMnFzqZkGNQ" target="_blank" className='textLink'>
            <button type="button" className={`btn btn-primary ${styles.githubBtn}`}>
              <i className={`bi bi-slack ${styles.communityIcon}`}></i>
              Join Community
            </button>
          </Link>
        </div>
      </div>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={`container-xxl ${styles.articleContainer}`} >
        <h1 className={utilStyles.headingXl + ' ' + styles.blogTitle} >{postData.title}</h1>
        <div className={utilStyles.lightText}>
          Last updated date: <Date dateString={postData.modifiedDate} />
        </div>

        <div className={`${styles.blogContainer}`} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

        <div style={{ display: "flex", marginTop: "5px", borderTop: "2px solid lightgray", paddingTop: "25px" }}>
          {/* <a href="https://www.featbit.co">
            FeatBit official Website
          </a>
          <div style={{ width: "20px" }}></div>
          <a href="https://github.com/featbit/featbito">
            FeatBit GitHub Repository
          </a> */}
        </div>

        <div className={styles.featBitIntroduceContainer}>
          <h3 style={{ fontSize: "1.25rem" }}>
            FeatBit, Free & Open Source Feature Flags Management Service
          </h3>
          <div className={styles.featBitShortDescription} >
            Scalable, Great Performance, free to install FeatBit in any environment
          </div>
          <div style={{ display: "flex" }}>
            <Link href="https://github.com/featbit/featbit" target="_blank" className='textLink'>
              <button type="button" className={`btn btn-primary ${styles.githubBtn}`}>
                <img style={{ marginTop: "15px" }}
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCA3MiAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC4yODIgMC41MTE5MDdDMTQuMTA5NyAwLjg0MDM3IDEzLjkyMDYgMS4zOTIxMiAxMy44NjE2IDEuNzM4MjFMMTMuNzU0MyAyLjM2NzQ1TDEyLjczODkgMi4zMDU5NkMxMS40OTY5IDIuMjMwOTkgMTAuOTc2OCAyLjM3ODc3IDEwLjk3NjggMi44MDcwMkMxMC45NzY4IDMuMjU2NDggMTEuMjk4MSAzLjQ3NDE5IDEyLjE3MzggMy42MTg1NkMxMy40NDI0IDMuODI3NjUgMTMuNDUxOSAzLjg0OTc2IDEzLjY1NjMgNy4wNDE4MUMxMy44NDg3IDEwLjA0NTEgMTMuOTk3NSAxMC43MzY0IDE0LjY5MTUgMTEuODQ2QzE1LjQzMzMgMTMuMDMyMiAxNi41Mjg1IDEzLjM1MDQgMTcuNjA2NSAxMi42OTMxQzE4Ljk0ODQgMTEuODc1MSAyMS40NTQ4IDguOTA4MTQgMjEuMTAyIDguNTU1NEMyMC45ODIzIDguNDM1NjcgMjAuMzU4MyA4Ljg4NTQ5IDE5LjIzMDcgOS45MDQ2OEMxOC4zMDAxIDEwLjc0NTUgMTcuMzUwNSAxMS41MzQ0IDE3LjEyMDIgMTEuNjU3N0MxNi41MDE5IDExLjk4ODkgMTUuODM1MyAxMS41NDc1IDE1LjMwNTMgMTAuNDU2MUMxNC45MjA3IDkuNjYzOTUgMTQuODYwMSA5LjI0OTAxIDE0Ljc4ODkgNi45MTU5NkwxNC43MDgyIDQuMjczMTVMMTUuMTM0OCA0LjE4NDdDMTUuMzY5MyA0LjEzNjE1IDE2LjQxMDggNC4wNTg4NSAxNy40NDkgNC4wMTNDMTkuNjM2OCAzLjkxNjI4IDE5Ljk2NiAzLjgyMDgyIDE5Ljk2NiAzLjI4MzA4QzE5Ljk2NiAyLjU2MDkgMTkuNzAxMyAyLjQ5MTE0IDE3LjM0MjkgMi41OTMwOEwxNS4xMTE4IDIuNjg5NDRWMS41MTY3MUMxNS4xMTE4IDAuMDI2NjcyIDE0Ljc1OTggLTAuMzk5NTk0IDE0LjI4MiAwLjUxMTkwN1pNNS45OTAyNyAxLjA0NTVDNS42NTgwMyAxLjE0MTE1IDUuMDUxMjYgMS40MjY4MiA0LjY0MTg5IDEuNjgwMzJDMS45MTM2OCAzLjM2OTc0IDIuMzAxMTIgNC4zODk4MyA2LjUwNzE0IDYuNTkxMjdDOS42MTc5MyA4LjIxOTU3IDEwLjUzMzkgOS4yMjk5NSA5Ljg0Nzg3IDEwLjI3NjhDOS4xNjk1NSAxMS4zMTIgNi42NTExNSAxMS45MjQ5IDQuOTU4NjcgMTEuNDY2OEMzLjQ4MzAxIDExLjA2NzUgMi4xODk4MyA5Ljc4NjIgMi4xODk4MyA4LjcyMzE0QzIuMTg5ODMgOC4xMDgyOCAxLjk1MjUyIDguMDY0OTYgMS41NzA4NCA4LjYxMDA2QzAuOTg1ODIzIDkuNDQ1MTUgMS4zNTg4NyAxMC41MDEyIDIuNTkxNDcgMTEuNDk5N0MzLjYxNDc5IDEyLjMyODUgNC4yMzA3MyAxMi42MjE0IDUuNTAxNDQgMTIuODgzM0M3LjMxMDQxIDEzLjI1NjIgOS41MDA3MSAxMi43MjEzIDEwLjUxOSAxMS42NTgxQzExLjE2MDcgMTAuOTg4NCAxMS41ODM1IDkuOTAyNyAxMS40NDYxIDkuMjc3NzdDMTEuMzg0MSA4Ljk5NTMzIDEwLjg3MzkgOC4yODg0MyAxMC4zMTIzIDcuNzA2NDdDOS40OTAyOSA2Ljg1NDg0IDguODI0NTUgNi40MTE2NyA2Ljg5NTgzIDUuNDMxODVDNS41NzgyIDQuNzYyNTIgNC40NTU2NCA0LjA5ODU4IDQuNDAwOTggMy45NTYxOUM0LjIzMzYxIDMuNTIwMDQgNS4wMzcyNCAyLjg3MjQ2IDYuMTI0MjEgMi41Njc1NUM3LjY1Mzk4IDIuMTM4MjIgNy45MDk0NSAyLjE4Mzg5IDguNzE0NyAzLjAzMDQ5TDkuNDMwOTYgMy43ODM0Mkw5Ljc2NTcxIDMuMzcwMUMxMS4wMDEgMS44NDQ0NiA4LjUyMDg5IDAuMzE3MzgxIDUuOTkwMjcgMS4wNDU1Wk01NC4yMTA5IDEuMjAyOTlDNTMuODEzMiAxLjYwMDY3IDUzLjc5MDQgMS45NTk3IDU0LjAzOTcgMy44ODE1OEM1NC4yNjg4IDUuNjQ1NjEgNTQuMDI4OCA3LjA2NTcyIDUzLjIyNjcgOC42OTE2OEM1Mi4xNTQzIDEwLjg2NTggNTEuMDcwMSAxMS40NDIyIDUwLjE5OTYgMTAuMzAwOUM0OS41NjczIDkuNDcxNzYgNDkuNDEwOSA4LjYzNzc0IDQ5LjE4OTcgNC45MTU3QzQ4Ljk5IDEuNTUzMzkgNDguODIzOSAwLjgyMzgzIDQ4LjM0NzYgMS4yMTkxN0M0Ny42NjggMS43ODMxNSA0Ny41MDkxIDIuNDcxMTggNDcuNjI2OSA0LjMzOTMxQzQ3Ljg5OTEgOC42NjA0IDQ4LjUxNjYgMTAuOTgzNiA0OS42NTk1IDExLjk4NzFDNTEuMDEwNiAxMy4xNzM1IDUyLjcwNTQgMTIuMzgwMyA1NC4xNzA0IDkuODc1OTFDNTQuNTMyMiA5LjI1NzQ2IDU0Ljg4MTUgOC44MTE3NyA1NC45NDY3IDguODg1NDlDNTUuMDEyIDguOTU5MiA1NS4xNjUgOS41NDQyMSA1NS4yODY5IDEwLjE4NTdDNTUuNTY2NCAxMS42NTc5IDU1LjkxNTIgMTIuMzQ1NCA1Ni4zODI3IDEyLjM0NTRDNTYuOTE2MSAxMi4zNDU0IDU2Ljk3MjQgMTEuOTczOCA1Ni42NTk5IDEwLjUxNDFDNTYuNTA1MSA5Ljc5MDg3IDU2LjE3MTEgNy42NjIwNiA1NS45MTc2IDUuNzgzMzNDNTUuMzg5NCAxLjg2ODAxIDU1LjIxNzMgMS4wOTcyOCA1NC44MzgxIDAuOTUxODM2QzU0LjY4ODcgMC44OTQzMDUgNTQuNDA2NSAxLjAwNzM5IDU0LjIxMDkgMS4yMDI5OVpNNjEuNzYwOCAxLjExMDIyQzYwLjY3MDIgMS40NTAxOSA1OS4xMjY0IDIuNTUwMTEgNTguODY5NyAzLjE2OTgyQzU4LjQ2MTYgNC4xNTUzOSA1OS4zOTE0IDUuMDQxNTQgNjIuNjM0OSA2Ljc1Nzc1QzY1Ljg5MzMgOC40ODE4NyA2Ni41ODgzIDkuNTI3NjcgNjUuMjU0MiAxMC42OTlDNjMuNzI1MyAxMi4wNDE0IDYwLjU3ODcgMTEuOTM3NSA1OS4wNzcgMTAuNDk0OUM1OC4zNTM0IDkuNzk5ODYgNTcuOTM0MyA5LjA0NzExIDU4LjA3MTUgOC42ODkzNEM1OC4yMjE2IDguMjk4MzEgNTcuODU5MyA4LjE2NTA5IDU3LjUzMzIgOC40OTEyMkM1Ny4xNTI4IDguODcxNjQgNTcuMTc0NyA5Ljk4MTggNTcuNTc0MyAxMC41ODhDNTguMDI3NiAxMS4yNzUzIDU5LjM3NDIgMTIuMjg2NiA2MC4yNDU4IDEyLjU5NDFDNjIuMTA1NCAxMy4yNTAzIDY0LjQ2MDggMTMuMDUgNjUuODE3OCAxMi4xMjAzQzY2LjY0MDQgMTEuNTU2NyA2Ny4zMTY4IDEwLjQyNzUgNjcuMzE2OCA5LjYxNzM4QzY3LjMxNjggOS4wMzgzIDY3LjE2NTYgOC43NzkwNSA2Ni4yODMxIDcuODQ1MDhDNjUuNDU0MSA2Ljk2NzU2IDY0Ljc2ODYgNi40OTQ5MSA2Mi44MjIyIDUuNDU4MUM2MC45NjEzIDQuNDY2OTYgNjAuMzgyIDQuMDczNTkgNjAuMzM5MiAzLjc3MjA5QzYwLjI2ODggMy4yNzc1MSA2MC44NDg0IDIuODc4OTMgNjIuMTM2NyAyLjUzNjA5QzYzLjYwNTkgMi4xNDUwNiA2My44ODEgMi4xOTYxMSA2NC42MjAxIDIuOTk2NjlDNjQuOTg1MiAzLjM5MjIxIDY1LjM0MSAzLjcxNTgyIDY1LjQxMDYgMy43MTU4MkM2NS40ODAzIDMuNzE1ODIgNjUuNjYwOCAzLjQyMDA4IDY1LjgxMiAzLjA1ODUzQzY2LjA2NyAyLjQ0ODE3IDY2LjA2MjMgMi4zNjc5OSA2NS43NDUxIDEuOTM0ODlDNjQuOTkyIDAuOTA2NzExIDYzLjQ0MjEgMC41ODU5NzcgNjEuNzYwOCAxLjExMDIyWk0zNS4zMzQzIDEuMzAzNDlDMzUuMjc0MiAxLjQ1OTkgMzUuMjI1MiAzLjc4ODA5IDM1LjIyNTIgNi40NzcxMUMzNS4yMjUyIDEwLjYxMTQgMzUuMjY4MyAxMS40MjgyIDM1LjUwNTEgMTEuNzY2QzM1LjcyOTEgMTIuMDg2IDM2LjQwMjYgMTIuMzI0NCAzNi41MDY3IDEyLjEyMDdDMzYuNTE5MiAxMi4wOTU5IDM2LjU4NSAxMC44MjE4IDM2LjY1MyA5LjI4OTFDMzYuNzY5NyA2LjY1NzI1IDM2LjgwOCA2LjQzNzU2IDM3LjM0MjEgNS4zMzM4N0MzOC4zNzc1IDMuMTk0MjcgMzkuMTExOSAyLjY1Mzg0IDQxLjAwMTIgMi42NDE0NEM0MS45NDA4IDIuNjM1MTUgNDIuMjA0IDIuMjM5NjIgNDEuNTkgMS43NTY1NUM0MS4xMzU1IDEuMzk5MTQgNDAuNTYyOSAxLjI5MjUyIDM5LjU0IDEuMzc1MDVDMzguOTU1MyAxLjQyMjMzIDM4LjE2NTMgMS45MTUyOSAzNy4zOTIzIDIuNzE1MTVDMzcuMDUxNCAzLjA2NzcgMzYuNzA3NiAzLjM1NjI2IDM2LjYyODIgMy4zNTYyNkMzNi41NDg3IDMuMzU2MjYgMzYuNDgzNiAzLjA4NTE0IDM2LjQ4MzYgMi43NTM4QzM2LjQ4MzYgMS44NDY5OCAzNi4xNDEyIDEuMDE5MDcgMzUuNzY2MSAxLjAxOTA3QzM1LjU4ODcgMS4wMTkwNyAzNS4zOTQzIDEuMTQ3MDggMzUuMzM0MyAxLjMwMzQ5Wk0yNi41NDUzIDIuMDI3M0MyNS4zMjExIDIuNjM3MyAyMy43ODU0IDQuMDUwOTQgMjMuMTg4NCA1LjExNzIzQzIyLjU0MTEgNi4yNzM0MiAyMi4yMDIxIDcuNjgwMjIgMjIuMjAyMSA5LjIxMDM1QzIyLjIwMjEgMTAuMjQ0NSAyMi4yODE0IDEwLjYxMzQgMjIuNjA4OSAxMS4xMDUzQzIzLjA4NTkgMTEuODIxMyAyNC4wODY3IDEyLjM1ODkgMjUuMTcwNSAxMi40ODFDMjYuNzE0NSAxMi42NTUgMjguODEzNCAxMS4yMTAzIDI5Ljk1NDkgOS4xODc4OEMzMC4yNTgyIDguNjUwMzMgMzAuNTY4OCA4LjIxMDQgMzAuNjQ0OSA4LjIxMDRDMzAuNzIxMSA4LjIxMDQgMzAuOTY0IDguNzA1NyAzMS4xODQ4IDkuMzExMDNDMzEuNDA1NSA5LjkxNjM2IDMxLjg1NyAxMC43MDUxIDMyLjE4ODEgMTEuMDYzOUMzMi42OTA0IDExLjYwODEgMzIuODQzOCAxMS42ODMzIDMzLjExNDQgMTEuNTE3MkMzMy42MzU0IDExLjE5NzEgMzMuNTkzOSAxMC43OTg5IDMyLjkyNDUgOS42OTYzMUMzMi4xMjExIDguMzcyNTcgMzEuNTkzMSA2LjYxNzg4IDMxLjM0NDggNC40NDUzOEMzMS4wODkzIDIuMjA4MTYgMzEuMTM2IDIuMzE2NTcgMzAuMjUwMSAxLjkxNDM5QzI5LjEyNDggMS40MDM2MyAyNy43MTA1IDEuNDQ2NzggMjYuNTQ1MyAyLjAyNzNaTTI5LjU2NzQgMy4xMzE1M0MyOS41NjQ0IDMuMjA1NiAyOS40NDk1IDMuNDE0MzMgMjkuMzEyNSAzLjU5NTM3QzI5LjA5NzMgMy44NzkyNSAyOS4xMTA0IDQuMDYxOSAyOS40MDggNC45MjY4NEMzMC4wMDc3IDYuNjcwMiAyOS43OTcyIDcuNzMwOTIgMjguNTQ4OCA5LjI1NDRDMjcuNTc1NiAxMC40NDIgMjYuNDYyMiAxMS4wODY5IDI1LjM4NSAxMS4wODY5QzI0LjYyMiAxMS4wODY5IDI0LjQyMSAxMS4wMDQ2IDIzLjg5MiAxMC40NzU3QzIzLjMxNDggOS44OTgzOCAyMy4yODEgOS43OTYwOSAyMy4yODQ3IDguNjMyODlDMjMuMjg4OSA3LjMxNzA2IDIzLjY0MzggNi4yODQyIDI0LjQ1ODQgNS4yMTYyOUMyNS4xNjI5IDQuMjkyMzkgMjYuNDgyIDMuMzA3MTcgMjcuMjAxMSAzLjE2NzEyQzI4LjExNDggMi45ODk1IDI5LjU3NDQgMi45Njc1NiAyOS41Njc0IDMuMTMxNTNaIiBmaWxsPSIjRjdCQTFFIi8+CjxwYXRoIGQ9Ik02OC45NzEzIDI1LjU2NzhDNjkuMzk2MiAyNS41NzEzIDcwLjk5MTggMjEuMDQ4MiA3MS4wMDcxIDE5LjIyNDVDNzEuMDE0IDE4LjM5NSA2NS45MDkzIDE5LjE4MTggNjQuNzY2IDIwLjQxNjdDNjMuMTkyMiAyMi4zMzkyIDY1LjYxMSAyMC45NzY4IDY3LjE2NDEgMjEuNTQyOUM2My44ODc1IDIzLjg2NiA2MC45NTQyIDI3LjAxMjUgNTcuMTkyNCAyNi42NjNDNTQuNTE5NSAyNi40MTQ2IDUxLjk5NDQgMjMuNTUzMyA1MS4wMTU3IDIyLjA0ODRDNDkuNzcwNSAyMC4xMzM3IDQ4LjQ1MTQgMTYuODE2MyA0OC4wNzQ0IDE4LjE1MjNDNDcuNzUyOCAxOS4yOTIzIDQ4LjQ3NjIgMjAuODk2OCA0OS43MzMxIDIzLjAwNTZDNTAuOTkwMSAyNS4xMTQzIDUzLjU0MDQgMjcuMzM0MSA1NS43NjUgMjguMDA3NEM2MC43MDA1IDI5LjUwMTEgNjQuNjgxOSAyNS44NDQ2IDY3Ljk1NTIgMjIuODM4NEw2OC4wMDMzIDIyLjc5NDNDNjguMTg0OCAyNC40Mjg3IDY4LjI0NiAyNS41NjE3IDY4Ljk3MTMgMjUuNTY3OFoiIGZpbGw9IiNGN0JBMUUiLz4KPC9zdmc+Cg=="
                  alt=""></img>
                <div>
                  <i className="bi bi-github"></i>
                  Check GitHub
                </div>
              </button>
            </Link>
            <div style={{ width: "20px" }}></div>
            <Link href="https://join.slack.com/t/featbit/shared_invite/zt-1ew5e2vbb-x6Apan1xZOaYMnFzqZkGNQ" target="_blank" className='textLink'>
              <button type="button" className={`btn btn-primary ${styles.githubBtn}`}>
                <i className={`bi bi-slack ${styles.communityIcon}`}></i>
                Join Community
              </button>
            </Link>
          </div>
        </div>

        <div style={{ marginTop: "10px", marginBottom: "25px" }}>
          <strong>Featured Articles</strong>

          <div style={{ marginTop: "10px", marginBottom: "25px", }}>
            <a className={`${styles.featuredArticlesItem}`} href='https://www.featbit.co/blogs/Manage-Features-For-Different-Customers'>How to manage and release features to different customers in both SaaS and self-hosted environments</a>
            <a className={`${styles.featuredArticlesItem}`} href='https://www.featbit.co/blogs/Feature-Flags-Best-Practice-I-Overview'>Feature Flags Best Practice I - Overview</a>
            <a className={`${styles.featuredArticlesItem}`} href='https://www.featbit.co/blogs/Unlock-the-Power-of-Feature-Flags-A-Game-Changing-Software-Development-Technique'>Unlock the Power of Feature Flags: A Game-Changing Software Development Technique</a>
            <a className={`${styles.featuredArticlesItem}`} href='https://www.featbit.co/blogs/Free-and-open-source-feature-flag-service-benchmark-I'>Open source feature flag service (written in C#) performance tested on AWS free tier EC2</a>
            <a className={`${styles.featuredArticlesItem}`} href='https://www.featbit.co/blogs/Advanced-Progressive-Delivery-with-Feature-Flags'>Advanced Progressive Delivery with Feature Flags</a>
            <a className={`${styles.featuredArticlesItem}`} href='https://www.featbit.co/blogs/Free-and-Open-Source-Feature-Flag-Tools'>Best Free and Open Source Feature Flag Tools</a>
            <a className={`${styles.featuredArticlesItem}`} href='https://www.featbit.co/blogs/Dotnet-Open-Source-Feature-Flags-Library'>.NET/C# open source feature flags library</a>
            <a className={`${styles.featuredArticlesItem}`} href='https://www.featbit.co/blogs/Testing-in-Production'>Testing in Production</a>
            <a className={`${styles.featuredArticlesItem}`} href='https://www.featbit.co/blogs/LLM-Introducing-FeatBit-ChatGPT-Powered-FeatureFlags-Service'>Reduce Tech Debt - Remove Dead feature flags</a>
          </div>
        </div>

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
