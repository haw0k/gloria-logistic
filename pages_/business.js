import HTMLHeader from "../components/HtmlHeader";
import Business from '../components/business/Business';
import Layout from '../components/layout/Layout';
import useTranslation from 'next-translate/useTranslation';


const Index = () => {
  const { t } = useTranslation();
  return (
    <>
      <HTMLHeader title="Gloria Logistic" description={t('common:businessProjects')} />
      <Layout>
        <Business />
      </Layout>
    </>
  )
}

export default Index