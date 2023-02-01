import Layout from "../components/layout/layout";
import utilStyles from "../styles/utils.module.css";
import styles from "./blogs.module.css";
import Link from "next/link";
import Date from "../components/date";
import {getSortedBlogsMetaData} from "../lib/blogs";

export default function Blogs({ metaData }) {
    const tagsWithCount = metaData.reduce((acc, cur) => {
        cur.tags.forEach((tag) => {
            acc[tag] = acc[tag] || 0;
            acc[tag]++;
        });

        return acc;
    }, {});

    const tags = Object.keys(tagsWithCount).sort();

    return (
        <Layout>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <div className="row">
                    <div className="col-3">
                        <h2 className={utilStyles.headingLg}>Tags</h2>
                        <ul className={`${utilStyles.list} list-group`}>
                            {tags.map((tag) => (
                                <li className={`${styles.blogItem} list-group-item`}>
                                    <span>{tag}</span>
                                    <span>{tagsWithCount[tag]}</span>
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                    <div className="col">
                        <ul className={utilStyles.list}>
                            {metaData.map(({ id, date, title, cover }) => (
                                <li className={`${utilStyles.listItem} row ${styles.blogItem}`} key={id}>
                                    <div className="col-1">
                                        <img  src={cover}/>
                                    </div>

                                    <div className="col">
                                        <Link className="textLink" href={`/blogs/${id}`}>{title}</Link>
                                        <br />
                                        <small className={utilStyles.lightText}>
                                            <Date dateString={date} />
                                        </small>
                                    </div>

                                </li>
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