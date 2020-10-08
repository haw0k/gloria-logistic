import { FC } from "react";
import Link from "next-translate/Link";
import useTranslation from "next-translate/useTranslation";

const Business: FC = () => {
  const { t } = useTranslation();

  return (
    <main className='section section--business'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='section__title'>{t("common:businessTitle")}</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='card__container'>
              <div className='card'>
                <img
                  src='/jpg/wood.jpg'
                  alt='wood'
                  className='responsive-img'
                />
                <h4 className='card__title'>
                  {t("common:businessProjectTitle1")}
                </h4>
                <Link href='/projects/[id]' as={`/projects/${"factory"}`}>
                  <a className='btn btn--big btn--blue'>
                    {t("common:businessMore")}
                  </a>
                </Link>
              </div>
              <div className='card'>
                <img
                  src='/jpg/building-square.jpg'
                  alt='building'
                  className='responsive-img'
                />
                <h4 className='card__title'>
                  {t("common:businessProjectTitle2")}
                </h4>
                <Link href='/projects/[id]' as={`/projects/${"property"}`}>
                  <a className='btn btn--big btn--blue'>
                    {t("common:businessMore")}
                  </a>
                </Link>
              </div>
              <div className='card'>
                <img
                  src='/jpg/railways.jpg'
                  alt='railways'
                  className='responsive-img'
                />
                <h4 className='card__title'>
                  {t("common:businessProjectTitle3")}
                </h4>
                <Link href='/projects/[id]' as={`/projects/${"logistic"}`}>
                  <a className='btn btn--big btn--blue'>
                    {t("common:businessMore")}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Business;
