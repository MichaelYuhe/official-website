import Layout from '../components/layout/layout'
import utilStyles from '../styles/utils.module.scss'
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";
import flagList from "../public/images/flag_list.png"
import flagInsight1 from "../public/images/flag_insights_1.png"
import flagInsight2 from "../public/images/flag_insights_2.png"
import expt from "../public/images/expt.png"


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
        <div className={'h1 mb-4'}>On-Premise and upcoming Cloud solution</div>
        <div>
          <div>The on-premise option gives you the whole freedom to install FeatBit in any environment, you keep all control and own all your data.</div>
          <div>And the upcoming Cloud solution makes it even easier to use with reasonable cost for small teams which don't have enough resources to maintain the system.</div>
        </div>
      </section>
      <section className={`${styles.section} mt-md-5 py-3 py-md-4`}>
        <div className={'h1 mb-4'}>Empower all teams</div>
        <div>
          FeatBit provides a holistic framework that enables all teams to use flags and do experimentation on a across multiple platforms.
          SDKs are built carefully for devs and the easy-to-use interface makes PMs powerful and happy.
        </div>
        <div className={`mt-5 ${styles.imgContainer}`}>
          <Image className={`w-100 h-auto`} src={flagList}></Image>
        </div>
      </section>
      <section className={`${styles.section} mt-md-5 py-3 py-md-4`}>
        <div className={'mb-4'}>SDKS BUILT FOR DEVELOPERS</div>
        <div className={'h2 mb-4'}>Think for developers</div>
        <div>
          Supporting a bunch of server-side and client-side SDKS, and much more on the way, FeatBit offers a very easy way to work within any tech stack.
          The near real time data sync mode makes a flag change in effect as soon as you save it in the interface. The schedule feature can take effect at any wished time even when the whole teams is sleeping.
          Check our SDKs <Link href="https://featbit.gitbook.io/docs/getting-started/4.-connect-an-sdk" target="_blank">here</Link>
        </div>
      </section>
      <section className={`${styles.section} mt-md-5 py-3 py-md-4`}>
        <div className={'mb-4'}>QA TEAMS</div>
        <div className={'h2 mb-4'}>Test in production</div>
        <div>
          Test in production gives the best way to test a new feature in a real environment, you test the feature the way real users use your APP. A bug can be very easy to reproduce which makes the communication between testers and devs more efficiently and effectively.
        </div>
      </section>
      <section className={`${styles.section} mt-md-5 py-3 py-md-4`}>
        <div className={'mb-4'}>PRODUCT TEAMS</div>
        <div className={'h2 mb-4'}>Progressive release and enterprise ready experimentation</div>
        <div>
          Product teams can release a feature to individual segments and users, rollback whenever a bug found and make it generally available when all tests are set.
          A robust statistic engine and configurable metric library means you can customize your experimentation to exactly match your needs.
        </div>
        <div className={`mt-5 ${styles.imgContainer}`}>
          <Image className={`w-100 h-auto`} src={expt}></Image>
        </div>
      </section>
      <section className={`${styles.section} mt-md-5 py-3 py-md-4`}>
        <div className={'mb-4'}>INSIGHTS</div>
        <div className={'h2 mb-4'}>Understand how your users use your APP</div>
        <div>
          You have the power to see how different versions of a feature is distributed among your users and even get the version a very specific user is using.
          Don't need to use a third-party tool to analyse how the APP is used.
        </div>
        <div className={`row mt-5`}>
          <div className={`mt-1 col-sm-12 col-md-6 ${styles.imgContainer}`}>
            <Image className={`w-100 h-auto`} src={flagInsight1}></Image>
          </div>
          <div className={`mt-1 col-sm-12 col-md-6 ${styles.imgContainer}`}>
            <Image className={`w-100 h-auto`} src={flagInsight2}></Image>
          </div>
        </div>
      </section>
    </Layout>
  )
}
