import Layout from '../../components/layout/layout'
import styles from "./bestpractice.module.scss";


export default function bestpractice1() {
  return (
    <Layout>
      <div className={`container-xxl ${styles.bestPracticeContainer}`} >
        <div style={{ marginLeft: 'auto', 
                      marginRight: 'auto', 
                      marginTop: '30px', 
                      width: '100%', 
                      marginBottom: '30px', 
                      fontSize: '28px',
                      textAlign: 'center' }}>
          Under construction, coming soon.
        </div>
      </div>

    </Layout>
  )
}
