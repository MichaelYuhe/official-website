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
            <section className={`${utilStyles.padding1px}`}>
                <div className="row">
                    <div className="col-sm-12 col-md-3">
                        <h2 className={utilStyles.headingLg}>Tags</h2>
                        <ul className={`${utilStyles.list} list-group`}>
                            <div>{tags.length}</div>
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
                    <div className={`col ${styles.blogList}`}>
                        <ul className={utilStyles.list}>
                            {metaData.map(({ id, date, title, cover }) => (
                                <Link key={id} className="textLink" href={`/blogs/${id}`} >
                                    <li className={`${utilStyles.listItem} row ${styles.blogItem}`} key={id}>
                                        <div className="col-sm-1 col-md-2 col-lg-1">
                                            <img src={cover}/>
                                        </div>

                                        <div className="col">
                                            <div className={`${styles.blogTitle}`} href={`/blogs/${id}`}>{title}</div>
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