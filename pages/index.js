import Layout from '../components/layout/layout'
import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";
import flagList from "../public/images/flag_list.png"
import flagInsight1 from "../public/images/flag_insights_1.png"
import flagInsight2 from "../public/images/flag_insights_2.png"
import performance1 from "../public/images/performance_1.png"
import expt from "../public/images/expt.png"
import entitlement from "../public/images/flag_entitlement.png"
import iam from "../public/images/flag_iam.png"
import sdks from "../public/images/flag_sdks.png"
import progressiverelease from "../public/images/flag_progressive_release.png"


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
        <h1  className={`${styles.faceFirstLine} mt-5`}>
          Free and Open Source <br/>
          Feature Flags & Experimentation Management Service
          {/* <div className={`${styles.faceFirstLine} mt-5`}>
            Free & Open Source
          </div>
          <div className={styles.faceSecondLine}>

          </div> */}
        </h1>

        <div className={styles.subLine}>
          Scalable, Fast, AI-LLM-Empowered, Install in Any Environment
        </div>
        <div className={styles.faceThirdLine}>
          <Alternative></Alternative>
          <div>Alternative</div>
        </div>
        <div className={`${styles.faceFourthLine} mt-4`}>
          <Link href="https://github.com/featbit/featbit" target="_blank" className='textLink'>
            <button type="button" className={`btn btn-primary ${styles.githubBtn}`}>
              <i className="bi bi-github"></i>
              Check GitHub
            </button>
          </Link>
        </div>
      </section>
      <section className={`${styles.section1}`}>
        <div className={`container-xxl ${styles.section} py-4 py-md-5`}>
          <div className={`row mt-4 g-2 ${styles.features}`}>
            <div className={`col-md-3 col-sm-12`}>
              <div className={`${styles.feature}`}>
                <h3 className={`${styles.keycontentTitle}`}>Release Fastly and Safely</h3>
                <p className="">
                  Decouple code deployment from releases to speed up feature releases while mitigating risks.
                </p>
              </div>
            </div>
            <div className={`col-md-3 col-sm-12`}>
              <div className={`${styles.feature}`}>
                <h2 className={`${styles.keycontentTitle}`}>Testing in Production</h2>
                <p className="">
                  Testing new feature in production environment to reduce release risk & mitigate release stress.
                </p>
              </div>
            </div>
            <div className={`col-md-3 col-sm-12`}>
              <div className={`${styles.feature}`}>
                <h2 className={`${styles.keycontentTitle}`}>Progressive Delivery</h2>
                <p className="">
                  Releasing feature progressively and Resolve incidents as soon as they happen with instant rollback.</p>
              </div>
            </div>
            <div className={`col-md-3 col-sm-12`}>
              <div className={`${styles.feature}`}>
                <h2 className={`${styles.keycontentTitle}`}>A/B & Experimentation</h2>
                <p className="">Measuring the impact when rollout features and running A/B tests to improve feature quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={``}>
        <div className={`container-xxl ${styles.section} py-3 py-md-4`}>
          <div className={'h1 mb-4'}>Empower all teams</div>
          <div>
            FeatBit provides a holistic framework that enables all teams to use flags to deliver, control, and experiment with thier software across multiple platforms.
          </div>
          <div>
            SDKs are built carefully for Developers & The easy-to-use UI makes PMs, CS and Marketing powerful and happy.
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

          <div className={`row ${styles.sdkRow}`}>
            <div className={`mt-1 col-sm-12 col-md-12 col-lg-10 ${styles.sdkRowLeft}`} >
              <div>
                Supporting a bunch of server-side and client-side SDKS, and much more on the way, FeatBit offers a very easy way to work within any tech stack.
                Our SDKs are built for extreme speed, flexibility, and security.

                {/* The near real time data sync mode makes a flag change in effect as soon as you save it in UI.
                The schedule feature can make a change in effect at any wished time even when the whole teams is sleeping. */}
              </div>
              <div className={`${styles.sdkRowLeftSecondLine}`}>
                The real time data sync mode makes a flag change in effect as soon as you save it in UI.
                The schedule feature can make a change in effect at any wished time even when the whole teams is sleeping.
                Check <Link href="https://docs.featbit.co/docs/getting-started/4.-connect-an-sdk" target="_blank">our SDKs here</Link>.
              </div>
            </div>
            <div className={`mt-1 col-sm-0 col-md-0 col-lg-2`}>
              <Image className={`w-100 h-auto`} src={sdks}></Image>
            </div>
          </div>
        </div>
      </section>
      <section className={``}>
        <div className={`container-xxl ${styles.section} py-3 py-md-4`}>
          <div className={'mb-4'}>DEV, QA, DevOps</div>
          <div className={'h2 mb-4'}>Reduce delivery risk & Lower deployment stress</div>
          <div>
            The only sure way to know how a feature will perform in the real world is to test it with real users.
            Feature flags give you the control you need to <strong>test in production</strong> safely.
            Take advantage of FeatBit targeting capabilities to expose a new feature to a subset of specific users.
            If system performance suffers, you can halt the rollout and limit the blast radius of the incident.
            But if all goes well, you can <strong>progressively release</strong> the new feature to a wider audience.
          </div>
          <div className={`mt-5 ${styles.imgContainer}`}>
            <Image className={`w-100 h-auto`} src={progressiverelease}></Image>
          </div>
        </div>
      </section>
      <section className={``}>
        <div className={`container-xxl ${styles.section} py-3 py-md-4`}>
          <div className={'mb-4'}>Sales, Customer Success, Marketing</div>
          <div className={'h2 mb-4'}>Entitlement management</div>
          <div>
            FeatBit provides an intuitive UI for managing entitlements with feature flags, and provides access controls to ensure that only the right people in your organization can toggle such flags. Sales reps can give prospects access to a trial version of your software, customer support agents can enable functionality for users lacking access to features for which they paid, product managers can grant beta users access to their application, and so on—all with little developer intervention.
          </div>
          <div className={`row mt-5`}>
            <div className={`mt-1 col-sm-12 col-md-6 ${styles.imgContainer}`}>
              <Image className={`w-100 h-auto`} src={entitlement}></Image>
            </div>
            <div className={`mt-1 col-sm-12 col-md-6 ${styles.imgContainer}`}>
              <Image className={`w-100 h-auto`} src={iam}></Image>
            </div>
          </div>
        </div>
      </section>
      <section className={``}>
        <div className={`container-xxl ${styles.section} py-3 py-md-4`}>
          <div className={'mb-4'}>Design & PRODUCT TEAMS</div>
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

      <section className={`${styles.section2}`}>
        <div className={`container-xxl ${styles.section} py-4 py-md-5`}>
          <div className={'h1 mb-4'}>Scalable and Great performance</div>
          <div>
            <div>FeatBit is built based on micro-services, its horizontally scalable feature and our carefully designed architecture ensures a high performance solution. </div>

            <div className={`mt-5 ${styles.imgContainer}`}>
              <Image className={`w-100 h-auto`} src={performance1}></Image>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section2}`}>
        <div className={`container-xxl ${styles.section} py-4 py-md-5`}>
          <div className={'h1 mb-4'}>On-Premise and cloud solution</div>
          <div>
            <div>The on-premise option gives you the whole freedom to install FeatBit in any environment, you keep all control and own all your data.</div>
            <div>And the upcoming cloud solution makes it even easier to use with reasonable cost for small teams which don't have enough resources to maintain the system.</div>
          </div>
        </div>
      </section>

    </Layout>
  )
}
