import GalleryItem from "./galleryitem/GalleryItem";
import Carousel from "../carousel/Carousel";
import Icons from "../shared/Icons";

const galleryArray = (max) => {
  const Array = [];
  let i;
  for (let index = 1; index <= max; index++) {
    if (index < 10) {
      i = "0" + index;
    } else {
      i = index.toString();
    }
    Array.push(i);
  }
  return Array;
};

const Home = () => {
  const stoneGallery = galleryArray(12).map((i) => ({
    original: `/jpg/gallery/stone/${i}.jpg`,
    thumbnail: `/jpg/gallery/stone/${i}-small.jpg`,
  }));

  // function onStoneGalleryItemClick(i) {}
  // console.log(stoneGallery);
  const [modalStoneIsOpen, setIsOpenStoneModal] = React.useState(false);
  const [galleryStoneIndex, setGalleryStoneIndex] = React.useState(0);

  function showStoneModal(j) {
    setIsOpenStoneModal(true);
    setGalleryStoneIndex(j);
    console.log('click j=', j);
  }

  // function closeStoneModal() {
  //   setIsOpenStoneModal(false);
  // }

  return (
    <main className="home">
      <Carousel
        slideActive={galleryStoneIndex}
        images={stoneGallery}
        isOpen={modalStoneIsOpen}
        onClose={() => setIsOpenStoneModal(false)}
      />
      <section className="section section--white" id="about">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section__title">О компании</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <img
                className="responsive-img"
                src="jpg/slider.jpg"
                alt="Sketch"
              />
            </div>
            <div className="col-lg-4">
              <div className="text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Lacinia at quis risus sed vulputate odio ut enim blandit.
                  Turpis nunc eget lorem dolor sed viverra ipsum. Amet nulla
                  facilisi morbi tempus iaculis urna. Eros in cursus turpis
                  massa tincidunt. Interdum velit laoreet id donec ultrices
                  tincidunt arcu non. Risus quis varius quam quisque id diam
                  vel. In egestas erat imperdiet sed euismod nisi porta. Erat
                  pellentesque adipiscing commodo elit at imperdiet dui
                  accumsan. Varius duis at consectetur lorem donec massa.
                  Posuere sollicitudin aliquam ultrices sagittis orci a.
                  Tristique sollicitudin nibh sit amet commodo nulla facilisi.
                  Eu augue ut lectus arcu bibendum. Ornare aenean euismod
                  elementum nisi quis. Pharetra sit amet aliquam id diam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--stone" id="services">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="section__subtitle">Обработка камня</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-6">
              <div className="text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Lacinia at quis risus sed vulputate odio ut enim blandit.
                  Turpis nunc eget lorem dolor sed viverra ipsum. Amet nulla
                  facilisi morbi tempus iaculis urna. Eros in cursus turpis
                  massa tincidunt. Interdum velit laoreet id donec ultrices
                  tincidunt arcu non. Risus quis varius quam quisque id diam
                  vel. In egestas erat imperdiet sed euismod nisi porta. Erat
                  pellentesque adipiscing commodo elit at imperdiet dui
                  accumsan. Varius duis at consectetur lorem donec massa.
                  Posuere sollicitudin aliquam ultrices sagittis orci a.
                  Tristique sollicitudin nibh sit amet commodo nulla facilisi.
                  Eu augue ut lectus arcu bibendum. Ornare aenean euismod
                  elementum nisi quis. Pharetra sit amet aliquam id diam.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <nav className="gallery gallery--stone">
                {galleryArray(12).map((i,j) => (
                  // <GalleryItem
                  //   key={i}
                  //   imgUrl={`jpg/gallery/stone/${i}-small.jpg`}
                  // />
                  <div
                    key={i}
                    className="gallery__item"
                    onClick={() => showStoneModal(j)}
                  >
                    <div className="gallery__zoom">
                      <Icons name="zoomIn" />
                    </div>
                    <img
                      src={`jpg/gallery/stone/${i}-small.jpg`}
                      alt="gallery image"
                    />
                  </div>
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
              <h3 className="section__subtitle">Строительные работы</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Lacinia at quis risus sed vulputate odio ut enim blandit.
                  Turpis nunc eget lorem dolor sed viverra ipsum. Amet nulla
                  facilisi morbi tempus iaculis urna. Eros in cursus turpis
                  massa tincidunt. Interdum velit laoreet id donec ultrices
                  tincidunt arcu non. Risus quis varius quam quisque id diam
                  vel. In egestas erat imperdiet sed euismod nisi porta. Erat
                  pellentesque adipiscing commodo elit at imperdiet dui
                  accumsan. Varius duis at consectetur lorem donec massa.
                  Posuere sollicitudin aliquam ultrices sagittis orci a.
                  Tristique sollicitudin nibh sit amet commodo nulla facilisi.
                  Eu augue ut lectus arcu bibendum. Ornare aenean euismod
                  elementum nisi quis. Pharetra sit amet aliquam id diam.
                </p>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <nav className="gallery gallery--fixing">
                {galleryArray(23).map((i) => (
                  <GalleryItem
                    key={i}
                    imgUrl={`jpg/gallery/fixing/${i}-small.jpg`}
                  />
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
