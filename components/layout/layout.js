import styles from './layout.module.scss'
import Image from 'next/image'
import logoImg from '/public/images/logo.svg'
import Link from "next/link";

export default function Layout({children}) {
    return (
        <>
            <header className="navbar navbar-expand-lg bg-body-tertiary sticky-top bg-dark navbar-dark">
                <nav className="container-xxl bd-gutter flex-wrap flex-lg-nowrap">
                    <a className={`navbar-brand ${styles.logoBrand}`} href="/">
                        <Image
                            priority
                            src={logoImg}
                            width={45}
                            alt="FeatBit"
                        />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/blogs">Blogs</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-md-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link`} href="https://github.com/featbit/featbit" target="_blank">
                                    <i className={`bi bi-github ${styles.navIcon}`}></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main className={`container-xxl ${styles.container}`}>{children}</main>
            <footer className="bd-footer py-2 py-md-3 mt-3 bg-light bg-gradient">
                <div className={`${styles.container} container-xxl`}>
                    <div className={`${styles.communityTitle} mb-5`}>
                        Join Our Community
                    </div>
                    <div className={`${styles.communities} `}>
                        <Link className={`${styles.community} textLink p-2`} href="https://github.com/featbit/featbit" target="_blank">
                            <i className={`bi bi-github ${styles.communityIcon}`}></i>
                            <span>Github</span>
                        </Link>
                        <Link className={`${styles.community} textLink p-2`} href="https://join.slack.com/t/featbit/shared_invite/zt-1ew5e2vbb-x6Apan1xZOaYMnFzqZkGNQ" target="_blank">
                            <i className={`bi bi-slack ${styles.communityIcon}`}></i>
                            <span>Slack</span>
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    );
}
