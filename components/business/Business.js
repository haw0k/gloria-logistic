import Link from 'next/link';

const Business = () => (
  <main className="section section--business" id="projects">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="section__title">
            Бизнес-проекты
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 offset-lg-1 col-md-12">
          <div className="card__container">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <img src="/jpg/wood.jpg" alt="wood" className="responsive-img" />
                  <h4 className="card__title">
                    Завод по производству тарной дощечки
                  </h4>
                  <Link href="#">
                    <a className="btn btn--big btn--blue">
                      Подробнее
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                <img src="/jpg/building-square.jpg" alt="building" className="responsive-img" />
                  <h4 className="card__title">
                    Операции с недвижимостью
                  </h4>
                  <Link href="#">
                    <a className="btn btn--big btn--blue">
                      Подробнее
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                <img src="/jpg/railways.jpg" alt="railways" className="responsive-img" />
                  <h4 className="card__title">
                    Логистические проекты
                  </h4>
                  <Link href="#">
                    <a className="btn btn--big btn--blue">
                      Подробнее
                    </a>
                  </Link>
                </div>
              </div>   
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Business;