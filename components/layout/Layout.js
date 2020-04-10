import Header from '../header/Header';
import Footer from '../footer/Footer';
import styles from './Layout.module.scss';

export default function Layout(props) {
  return (
    // <div className={styles.wrapper}>
    //   {props.children}
    // </div>
    // <div className={styles.wrapper}>
    <div className="layout">
      <Header />
      <div className={styles.content}>
        {props.children}
        <Footer />
      </div>
    </div>
  )
}