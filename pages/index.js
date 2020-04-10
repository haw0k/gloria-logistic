import HTMLHeader from "../components/HtmlHeader";
import Home from '../components/home/Home';
import Layout from '../components/layout/Layout';


const Index = () => (
  <>
    <HTMLHeader title="Gloria Logistic" description="main page" />
    <Layout>
      <Home />
    </Layout>
  </>
)

export default Index
