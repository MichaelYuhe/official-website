import Layout from "../components/layout/layout";
import utilStyles from "../styles/utils.module.scss";
import styles from "./blogs.module.scss";
import Date from "../components/date";
import {getSortedBlogsMetaData} from "../lib/blogs";
import Link from "next/link";
import { useRouter } from 'next/router'

export default function Blogs({ metaData }) {

    const tagsWithCount = metaData.reduce((acc, cur) => {
        cur.tags.forEach((tag) => {
            acc[tag] = acc[tag] || 0;
            acc[tag]++;
        });

        return acc;
    }, {});

    const tags = Object.keys(tagsWithCount).sort();

    const { tag } = useRouter().query;

    if (tag) {
        metaData = metaData.filter((meta) => meta.tags.includes(tag));
    }

    return (
        <Layout>
            <section className={`container-xxl`}>
                <div className="row">
                    <div className="col-sm-12 col-md-3">
                        <h2 className={styles.headingLg}>Tags</h2>
                        <ul className={`${utilStyles.list} list-group ${styles.tabList}`}>
                            {tags.map((t, idx) => (
                                <Link key={idx} className="textLink" href={{ pathname: '/blogs', query: { tag: t} }}>
                                    <li key={idx} className={`${styles.tagItem} list-group-item ${tag === t ? styles.tagItemActive : ''}`}>
                                        <span>{t}</span>
                                        <span>{tagsWithCount[t]}</span>
                                    </li>
                                </Link>
                            ))
                            }
                        </ul>
                    </div>
                    <div className={`col mt-md-2`}>
                        <ul className={utilStyles.list + ' ' + styles.articleList}>
                            {metaData.map(({ id, date, title, cover, tags }) => (
                                <Link key={id} className="textLink" href={`/blogs/${id}`} >
                                    <li className={`${utilStyles.listItem} row ${styles.blogItem}`} key={id}>
                                        <div className="col-sm-1 col-md-2 col-lg-1 mb-2 mt-2">
                                            <img src={cover}/>
                                        </div>

                                        <div className="col">
                                            <div className={`${styles.blogTitle}`} href={`/blogs/${id}`}>{title}</div>
                                            <div className={`${styles.badgeWrapper}`}>
                                                {tags.map((tag) => (
                                                    <span className={`badge text-bg-info ${styles.badgeText}`}>{tag}</span>
                                                ))}
                                            </div>
                                            <small className={utilStyles.lightText}>
                                                <Date dateString={date} />
                                            </small>
                                        </div>

                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const metaData = getSortedBlogsMetaData();
    return {
        props: {
            metaData
        }
    }
}