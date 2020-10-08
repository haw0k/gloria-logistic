import { FC, ReactNode } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from "./Layout.module.scss";

const Layout: FC<ReactNode> = ({ children }) => (
  <div className='layout'>
    <Header />
    <div className={styles.content}>
      {children}
      <Footer />
    </div>
  </div>
);

export default Layout;
