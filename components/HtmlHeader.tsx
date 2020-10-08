import { FC } from "react";
import Head from "next/head";
import { IHtmlMetaProps } from "../interfaces/IHtmlMetaProps";

const HTMLHeader: FC<IHtmlMetaProps> = ({
  title = "Gloria Logistic",
  description = "Gloria Logistic",
}) => (
  <Head>
    <title>{title}</title>
    <meta name='description' content={description} />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <link
      href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap'
      rel='stylesheet'
    />
  </Head>
);

export default HTMLHeader;
