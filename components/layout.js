import styles from './layout.module.css'
import Header from './header';
import Image from 'next/image'
import logoImg from '/public/images/logo.svg'

export default function Layout({children, home}) {
    return (
        <>
            <Header title={'FeatBit'}></Header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top bg-dark navbar-dark">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <Image
                        priority
                        src={logoImg}
                        width={40}
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
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
            <main className={styles.container}>{children}</main>
        </>
    );
}
