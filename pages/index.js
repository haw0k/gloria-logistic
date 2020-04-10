// import Head from 'next/head';
import HTMLHeader from "../components/HtmlHeader";
import Home from '../components/home/Home';
import Layout from '../components/layout/Layout';
import Header from '../components/header/Header';

const Index = () => (
  <>
    <HTMLHeader title="Gloria Logistic" description="main page" />
    <Layout>
      <Header />
      <Home />
    </Layout>
  </>
)

export default Index
