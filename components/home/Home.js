// import styles from './Home.module.scss';
import GalleryItem from './galleryitem/GalleryItem';
import Link from 'next/link';

function galleryArray(max) {
  const Array = [];
  let i;
  for (let index = 1; index <= max; index++) {
    if (index < 10) { 
      i = '0' + index
    }  else {
      i = +index
    }
    Array.push(i);
  }
  return Array;
}

const Home = () => {

  const StoneGallery = galleryArray(12);
  return (
    <main className="home">
      <section className="section section--white" id="about">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section__title">
                О компании
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <img className="responsive-img" src="jpg/slider.jpg" alt="Sketch"/>
            </div>
            <div className="col-lg-4">
              <div className="text text--plgutter">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                Lacinia at quis risus sed vulputate odio ut enim blandit. Turpis nunc eget lorem dolor sed viverra ipsum. Amet nulla facilisi morbi tempus iaculis urna. Eros in cursus turpis massa tincidunt. Interdum velit laoreet id donec ultrices tincidunt arcu non. Risus quis varius quam quisque id diam vel. In egestas erat imperdiet sed euismod nisi porta. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Varius duis at consectetur lorem donec massa. Posuere sollicitudin aliquam ultrices sagittis orci a. Tristique sollicitudin nibh sit amet commodo nulla facilisi. Eu augue ut lectus arcu bibendum. Ornare aenean euismod elementum nisi quis. Pharetra sit amet aliquam id diam.
                </p>
              </div>
            </div>
              {/* <div className={styles.bordered}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eaque similique consequuntur id numquam? Reprehenderit praesentium dolores blanditiis fugit consequuntur facilis molestias facere nulla, ducimus incidunt neque, expedita, quod id.</p>
              </div> */}
          </div>
        </div>
      </section>
      <section className="section section--stone" id="services">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="section__subtitle">
                Обработка камня
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-6">
              <div className="text text--prgutter">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Lacinia at quis risus sed vulputate odio ut enim blandit. Turpis nunc eget lorem dolor sed viverra ipsum. Amet nulla facilisi morbi tempus iaculis urna. Eros in cursus turpis massa tincidunt. Interdum velit laoreet id donec ultrices tincidunt arcu non. Risus quis varius quam quisque id diam vel. In egestas erat imperdiet sed euismod nisi porta. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Varius duis at consectetur lorem donec massa. Posuere sollicitudin aliquam ultrices sagittis orci a. Tristique sollicitudin nibh sit amet commodo nulla facilisi. Eu augue ut lectus arcu bibendum. Ornare aenean euismod elementum nisi quis. Pharetra sit amet aliquam id diam.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <nav className="gallery gallery--stone">
                { galleryArray(12).map(i => (
                  <GalleryItem
                    key={i}
                    imgUrl={`jpg/gallery/stone/${i}.jpg`}
                  />
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--fixing">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="section__subtitle">
                Строительные работы
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="text text--prgutter">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Lacinia at quis risus sed vulputate odio ut enim blandit. Turpis nunc eget lorem dolor sed viverra ipsum. Amet nulla facilisi morbi tempus iaculis urna. Eros in cursus turpis massa tincidunt. Interdum velit laoreet id donec ultrices tincidunt arcu non. Risus quis varius quam quisque id diam vel. In egestas erat imperdiet sed euismod nisi porta. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Varius duis at consectetur lorem donec massa. Posuere sollicitudin aliquam ultrices sagittis orci a. Tristique sollicitudin nibh sit amet commodo nulla facilisi. Eu augue ut lectus arcu bibendum. Ornare aenean euismod elementum nisi quis. Pharetra sit amet aliquam id diam.
                </p>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <nav className="gallery gallery--fixing">
                { galleryArray(24).map(i => (
                  <GalleryItem
                    key={i}
                    imgUrl={`jpg/gallery/fixing/${i}.jpg`}
                  />
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--business" id="projects">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section__title">
                Бизнес-проекты
              </h2>
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
      </section>

    </main>
  )
};

export default Home;
