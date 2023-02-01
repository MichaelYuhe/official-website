import Layout from '../components/layout/layout'
import utilStyles from '../styles/utils.module.scss'
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import Link from "next/link";

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
    </Layout>
  )
}
