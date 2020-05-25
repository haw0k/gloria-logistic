import HTMLHeader from "../components/HtmlHeader";
import Home from '../components/home/Home';
import Layout from '../components/layout/Layout';
import useTranslation from 'next-translate/useTranslation';


const Index = () => {
  const { t, lang } = useTranslation();
  return (
    <>
      <HTMLHeader title="Gloria Logistic" description={t('common:description')} lang={lang} />
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export default Index
