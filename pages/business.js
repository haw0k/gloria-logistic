import HTMLHeader from "../components/HtmlHeader";
import Business from '../components/business/Business';
import Layout from '../components/layout/Layout';


const Index = () => (
  <>
    <HTMLHeader title="Gloria Logistic" description="Business projects" />
    <Layout>
      <Business />
    </Layout>
  </>
)

export default Index