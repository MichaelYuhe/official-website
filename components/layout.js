import styles from './layout.module.css'
import Header from "./header";

export default function Layout({children, home}) {
    return (
        <>
            <Header title={'FeatBit'}></Header>
            <main className={styles.container}>{children}</main>
        </>
    );
}
