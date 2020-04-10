import Head from 'next/head';

const HTMLHeader = ({ title = 'Gloria Logistic', description = 'Gloria Logistic website'}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" /> 
  </Head>
)

export default HTMLHeader