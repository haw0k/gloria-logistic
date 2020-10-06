import Carousel from "../carousel/Carousel";
import Icons from "../shared/Icons";
import useTranslation from 'next-translate/useTranslation';

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
  const { t } = useTranslation();

  const stoneGallery = galleryArray(12).map((i) => ({
    original: `/jpg/gallery/stone/${i}.jpg`,
    thumbnail: `/jpg/gallery/stone/${i}-small.jpg`,
  }));

  const fixingGallery = galleryArray(23).map((i) => ({
    original: `/jpg/gallery/fixing/${i}.jpg`,
    thumbnail: `/jpg/gallery/fixing/${i}-small.jpg`,
  }));


  const [modalStoneIsOpen, setIsOpenStoneModal] = React.useState(false);
  const [galleryStoneIndex, setGalleryStoneIndex] = React.useState(0);

  const [modalFixingIsOpen, setIsOpenFixingModal] = React.useState(false);
  const [galleryFixingIndex, setGalleryFixingIndex] = React.useState(0);

  function showStoneModal(j) {
    setIsOpenStoneModal(true);
    setGalleryStoneIndex(j);
  }

  function showFixingModal(j) {
    setIsOpenFixingModal(true);
    setGalleryFixingIndex(j);
  }

  return (
    <main className="home">
      <Carousel
        slideActive={galleryStoneIndex}
        images={stoneGallery}
        isOpen={modalStoneIsOpen}
        onClose={() => setIsOpenStoneModal(false)}
      />
      <Carousel
        slideActive={galleryFixingIndex}
        images={fixingGallery}
        isOpen={modalFixingIsOpen}
        onClose={() => setIsOpenFixingModal(false)}
      />
      <section className="section section--white" id="about">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section__title">
                {t('common:homeAboutTitle')}
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <img
                className="fullheight"
                src="/jpg/slider.jpg"
                alt="Sketch"
              />
            </div>
            <div className="col-lg-4">
              <div className="text">
                <p>
                  {t('common:homeAboutText1')}
                </p>
                <p>
                  {t('common:homeAboutText2')}
                </p>
                <p>
                  {t('common:homeAboutText3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--advatages">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="section__subtitle">
                {t('common:advatageTitle')}
              </h3>
            </div>
            <div className="col-12">
              <div className="advatages">
                <article className="advatage">
                  <img src="/svg/help.svg" alt="help icon" className="advantage__icon"/>
                  <p>{t('common:advatageItem1')}</p>
                </article>
                <article className="advatage">
                <img src="/svg/consulting.svg" alt="consulting icon" className="advantage__icon"/>
                  <p>{t('common:advatageItem2')}</p>
                </article>
                <article className="advatage">
                  <img src="/svg/wallet.svg" alt="wallet icon" className="advantage__icon"/>
                  <p>{t('common:advatageItem3')}</p>
                </article>
                <article className="advatage">
                  <img src="/svg/turnkey.svg" alt="key icon" className="advantage__icon"/>
                  <p>{t('common:advatageItem4')}</p>
                </article>
                <article className="advatage">
                  <img src="/svg/tool.svg" alt="tool icon" className="advantage__icon"/>
                  <p>{t('common:advatageItem5')}</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--fixing" id="fixing">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="section__subtitle">
                {t('common:homeFixingTitle')}
              </h3>
            </div>
          </div>
          <div className="row d-lg-flex align-items-center">
            <div className="col-lg-4 col-md-6">
              <div className="text">
                <ul className="list">
                  <li>{t('common:homeFixing1')}</li>
                  <li>{t('common:homeFixing2')}</li>
                  <li>{t('common:homeFixing3')}</li>
                  <li>{t('common:homeFixing4')}</li>
                  <li>{t('common:homeFixing5')}</li>
                  <li>{t('common:homeFixing6')}</li>
                  <li>{t('common:homeFixing7')}</li>
                  <li>{t('common:homeFixing8')}</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <nav className="gallery gallery--fixing">
                {galleryArray(23).map((i, j) => (
                  <div
                    key={i}
                    className="gallery__item"
                    onClick={() => showFixingModal(j)}
                  >
                    <div className="gallery__zoom">
                      <Icons name="zoomIn" />
                    </div>
                    <img
                      src={`/jpg/gallery/fixing/${i}-small.jpg`}
                      alt="gallery image"
                    />
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--stone" id="stone">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="section__subtitle">
                {t('common:homeStoneTitle')}
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-6">
              <div className="text">
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <nav className="gallery gallery--stone">
                {galleryArray(12).map((i,j) => (
                  <div
                    key={i}
                    className="gallery__item"
                    onClick={() => showStoneModal(j)}
                  >
                    <div className="gallery__zoom">
                      <Icons name="zoomIn" />
                    </div>
                    <img
                      src={`/jpg/gallery/stone/${i}-small.jpg`}
                      alt="gallery image"
                    />
                  </div>
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
