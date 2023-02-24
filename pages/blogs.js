import debounce from "lodash.debounce";

import Layout from "../components/layout/layout";
import utilStyles from "../styles/utils.module.scss";
import styles from "./blogs.module.scss";
import Date from "../components/date";
import {getSortedBlogsMetaData} from "../lib/blogs";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";

export default function Blogs({ metaData }) {

    const router = useRouter();
    let { tag, term } = router.query;

    const [blogs, setBlogs] = useState([...metaData]);
    const [searchQuery, setSearchQuery] = useState(term);

    const tagsWithCount = metaData.reduce((acc, cur) => {
        cur.tags.forEach((tag) => {
            acc[tag] = acc[tag] || 0;
            acc[tag]++;
        });

        return acc;
    }, {});

    const tags = Object.keys(tagsWithCount).sort();
    
    const onSearchBlogs = (searhTerm) => {
        let result = [...metaData];
        setSearchQuery(searhTerm);

        if (tag) {
            result = result.filter((blog) => blog.tags.includes(tag));
        }
        
        if (searhTerm) {
            searhTerm = searhTerm.toLowerCase();
            result = result.filter(({ title, tags }) => {
                return title.toLowerCase().includes(searhTerm) || tags.some((tag) => tag.toLowerCase().includes(searhTerm));
            });
        }

        router.push({
            pathname: router.pathname,
            query: {tag, term: searhTerm}
        }, undefined, { shallow: true });

        setBlogs(result);
    }

    const handleSearchBlogs = debounce(onSearchBlogs, 200);

    useEffect(()=>{
        onSearchBlogs(searchQuery);
    }, [tag, term]);

    return (
        <Layout>
            <section className={`container-xxl`}>
                <div className={`mt-4 mb-4 ${styles.searchBoxWrapper}`}>
                    <input type="search" onChange={(e) => handleSearchBlogs(e.target.value)} className={`form-control ${styles.searchBox}`} id="datatable-search-input" placeholder="Search"/>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-3">
                        <h2 className={styles.headingLg}>Tags</h2>
                        <ul className={`${utilStyles.list} list-group ${styles.tabList}`}>
                            {tags.map((t, idx) => (
                                <Link key={idx} className="textLink" href={{ pathname: '/blogs', query: { tag: t, term: searchQuery } }}>
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
                        <ul className={`${utilStyles.list} ${styles.articleList} row g-3`}>
                            {blogs.map(({ id, modifiedDate, title, cover, tags }) => (
                                <Link key={id} className={`textLink col-md-6 col-sm-12`} href={`/blogs/${id}`} >
                                    <li className={`${styles.blogItem}`} key={id}>
                                        <div className={`${styles.blogItemCover}`}>
                                            <img src={cover}/>
                                        </div>

                                        <div className="">
                                            <div className={`${styles.blogTitle}`} href={`/blogs/${id}`}>{title}</div>
                                            <small className={utilStyles.lightText}>
                                                <Date dateString={modifiedDate} />
                                            </small>
                                            <div className={`${styles.badgeWrapper}`}>
                                                {tags.map((tag) => (
                                                    <span className={`badge text-bg-info ${styles.badgeText}`}>{tag}</span>
                                                ))}
                                            </div>
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