import Link from 'next-translate/Link';
import useTranslation from 'next-translate/useTranslation';

const Business = () => {
  const { t } = useTranslation();

  return (
    <main className="section section--business">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="section__title">
              {t('common:businessProjects')}
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card__container">
              <div className="card">
                <img src="/jpg/wood.jpg" alt="wood" className="responsive-img" />
                <h4 className="card__title">
                  Завод по производству тарной дощечки
                </h4>
                <Link href="/projects/[id]" as={`/projects/${"factory"}`}>
                  <a className="btn btn--big btn--blue">
                    Подробнее
                  </a>
                </Link>
              </div>
              <div className="card">
                <img src="/jpg/building-square.jpg" alt="building" className="responsive-img" />
                <h4 className="card__title">
                  Операции с недвижимостью
                </h4>
                <Link href="/projects/[id]" as={`/projects/${"property"}`}>
                  <a className="btn btn--big btn--blue">
                    Подробнее
                  </a>
                </Link>
              </div>
              <div className="card">
                <img src="/jpg/railways.jpg" alt="railways" className="responsive-img" />
                <h4 className="card__title">
                  Логистические проекты
                </h4>
                <Link href="/projects/[id]" as={`/projects/${"logistic"}`}>
                  <a className="btn btn--big btn--blue">
                    Подробнее
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