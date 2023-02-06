import Layout from '../components/layout/layout'
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
      <section>
        <div className={`${styles.faceFirstLine} mt-5`}>
          Scalable, High Performance, 100% Open Source
        </div>
        <div className={styles.faceSecondLine}>
          Feature Management Platform
        </div>
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
      <section className={`${styles.section1}`}>
        <div className={`container-xxl ${styles.section} mt-4 mt-md-5 py-4 py-md-5`}>
          <div className={`row mt-4`}>
            <div className={`col-md-3 col-sm-12`}>
              <div className="">
                <h5 className="">Multi-platform supports</h5>
                <p className="">FeatBit makes it easy to manage features across web, mobile and server-side applications.</p>
              </div>
            </div>
            <div className={`col-md-3 col-sm-12`}>
              <div className="">
                <h5 className="">Release confidently</h5>
                <p className="">
                  Decouple releases from deployments with feature flags.
                  Our SDKs are built for extreme speed, flexibility, and security.
                </p>
              </div>
            </div>
            <div className={`col-md-3 col-sm-12`}>
              <div className="">
                <h5 className="">Entitlement</h5>
                <p className="">Manage the subscription to your APP with a easy and automatic way.</p>
              </div>
            </div>
            <div className={`col-md-3 col-sm-12`}>
              <div className="">
                <h5 className="">A/B and Experimentation</h5>
                <p className="">Multivariate flags gives you the ability to do A/B/n testing and experimentation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section2}`}>
        <div className={`container-xxl ${styles.section} py-4 py-md-5`}>
          <div className={'h1 mb-4'}>On-Premise and upcoming cloud solution</div>
          <div>
            <div>The on-premise option gives you the whole freedom to install FeatBit in any environment, you keep all control and own all your data.</div>
            <div>And the upcoming cloud solution makes it even easier to use with reasonable cost for small teams which don't have enough resources to maintain the system.</div>
          </div>
        </div>
      </section>
      <section className={`${styles.section2}`}>
        <div className={`container-xxl ${styles.section} py-4 py-md-5`}>
          <div className={'h1 mb-4'}>Scalable and high performance</div>
          <div>
            <div>FeatBit is built based on micro-services, its horizontally scalable feature and our carefully designed architecture ensures a high performance solution.</div>
            {/*<div>Check the <Link href="xxx" target="_blank">performance report</Link></div>*/}
          </div>
        </div>
      </section>
      <section className={``}>
        <div className={`container-xxl ${styles.section} py-3 py-md-4`}>
          <div className={'h1 mb-4'}>Empower all teams</div>
          <div>
            FeatBit provides a holistic framework that enables all teams to use flags and do experimentation across multiple platforms.
            SDKs are built carefully for devs and the easy-to-use interface makes PMs powerful and happy.
          </div>
          <div className={`mt-5 ${styles.imgContainer}`}>
            <Image className={`w-100 h-auto`} src={flagList}></Image>
          </div>
        </div>
      </section>
      <section className={``}>
        <div className={`container-xxl ${styles.section} py-3 py-md-4`}>
          <div className={'mb-4'}>SDKS BUILT FOR DEVELOPERS</div>
          <div className={'h2 mb-4'}>Think for developers</div>
          <div>
            Supporting a bunch of server-side and client-side SDKS, and much more on the way, FeatBit offers a very easy way to work within any tech stack.
            The near real time data sync mode makes a flag change in effect as soon as you save it in the interface. The schedule feature can make a change in effect at any wished time even when the whole teams is sleeping.
            Check our SDKs <Link href="https://featbit.gitbook.io/docs/getting-started/4.-connect-an-sdk" target="_blank">here</Link>
          </div>
        </div>
      </section>
      <section className={``}>
        <div className={`container-xxl ${styles.section} py-3 py-md-4`}>
          <div className={'mb-4'}>QA TEAMS</div>
          <div className={'h2 mb-4'}>Test in production</div>
          <div>
            Test in production gives the best way to test a new feature in a real environment, you test the feature the way real users use your APP. A bug can be very easy to be reproduced which makes the communication between testers and devs more efficient and effective.
          </div>
        </div>
      </section>
      <section className={``}>
        <div className={`container-xxl ${styles.section} py-3 py-md-4`}>
          <div className={'mb-4'}>PRODUCT TEAMS</div>
          <div className={'h2 mb-4'}>Progressive release and enterprise ready experimentation</div>
          <div>
            Product teams can release a feature to individual segments and users, rollback whenever a bug is found and make it generally available when all tests are set.
            A robust statistic engine and configurable metric library means you can customize your experimentation to exactly match your needs.
          </div>
          <div className={`mt-5 ${styles.imgContainer}`}>
            <Image className={`w-100 h-auto`} src={expt}></Image>
          </div>
        </div>
      </section>
      <section className={``}>
        <div className={`container-xxl ${styles.section} py-3 py-md-4`}>
          <div className={'mb-4'}>INSIGHTS</div>
          <div className={'h2 mb-4'}>Understand how your users use your APP</div>
          <div>
            You have the power to see how different versions of a feature is distributed among your users and even get the version a very specific user is using.
            No need to use a third-party tool to analyse how your APP is used.
          </div>
          <div className={`row mt-5`}>
            <div className={`mt-1 col-sm-12 col-md-6 ${styles.imgContainer}`}>
              <Image className={`w-100 h-auto`} src={flagInsight1}></Image>
            </div>
            <div className={`mt-1 col-sm-12 col-md-6 ${styles.imgContainer}`}>
              <Image className={`w-100 h-auto`} src={flagInsight2}></Image>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
