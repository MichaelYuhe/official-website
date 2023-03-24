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
    <div style={{ backgroundColor: "lightgray", paddingTop: "25px", paddingBottom: "25px" }}>

      <div className={`${styles.faceFourthLine} mt-4`} style={{ marginTop: "0px !important" }}>
        <Link href="https://github.com/featbit/featbit" target="_blank" className='textLink'>
          <button type="button" className={`btn btn-primary ${styles.githubBtn}`}>
            <i className="bi bi-github"></i>
            Check GitHub
          </button>
        </Link>
      </div>
    </div>
  )
}
