import Layout from '../components/layout/layout'
import utilStyles from '../styles/utils.module.scss'
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";
import flagList from "../public/images/flag_list.png"

const Alternative = () => {
  const alternatives = ['LaunchDarkly', 'Unleash'];
  const [alterIdx, setAlterIdx] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const idx = (alterIdx + 1) % alternatives.length;
      setAlterIdx(idx);
    }, 3000);
  }, [alterIdx]);

  return <div className={styles.alter}>{alternatives[alterIdx]}</div>;
};

export default function Home() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <div className={`${styles.faceFirstLine} mt-5`}>
          <div>Open Source,</div>
          <div>Scalable,</div>
          <div>High Performance</div>
        </div>
        <div className={styles.faceSecondLine}>Feature Management</div>
        <div className={styles.faceThirdLine}>
          <Alternative></Alternative>
          <div>Alternative</div>
        </div>
        <div className={`${styles.faceFourthLine} mt-4`}>
          <Link href="https://github.com/featbit/featbit" target="_blank" className='textLink'>
            <button type="button" className={`btn btn-primary ${styles.githubBtn}`}>
              <i className="bi bi-github"></i>
              Check Github
            </button>
          </Link>
        </div>
      </section>
      <section className={`${styles.section} mt-md-5 py-3 py-md-4`}>
        <div className={'h1 mb-4'}>Empower all teams</div>
        <div>
          FeatBit provides a holistic framework that enables all teams to use flags and do experimentation on a massive scale across various use cases.
          SDKs are built carefully for devs and the easy-to-use interface makes PMs powerful and happy.
        </div>
        <div className={`mt-5 ${styles.imgContainer}`}>
          <Image className={`w-100 h-auto`} src={flagList}></Image>
        </div>
      </section>
    </Layout>
  )
}
