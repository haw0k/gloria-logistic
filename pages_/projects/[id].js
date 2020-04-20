import { useRouter } from 'next/router';
import HTMLHeader from '../../components/HtmlHeader'
import Layout from '../../components/layout/Layout';
import Project from '../../components/project/Project';

export default function Projects() {
  const router = useRouter();

  return (
    <>
      <HTMLHeader title="Gloria Logistic" description={router.query.id} />
      <Layout>
        <Project title={router.query.id} />
      </Layout>
    </>
  );
}
