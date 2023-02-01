import styles from './layout.module.css'
import Image from 'next/image'
import logoImg from '/public/images/logo.svg'

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
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/blogs">Blogs</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main className={`container-xxl ${styles.container}`}>{children}</main>
        </>
    );
}
