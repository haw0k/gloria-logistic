import ImageGallery from 'react-image-gallery';

const Carousel = ({ slideActive = 0, images }) => {
  return (
    <ImageGallery startIndex={slideActive} items={images} />
  );
};

export default Carousel;
/* import NukaCarousel from 'nuka-carousel';

const Carousel = ({ slideActive = 0, images }) => {
  const [slideIndex, setIndex] = React.useState(slideActive);

  return (
    <NukaCarousel
      slideIndex={slideIndex}
      afterSlide={() => setIndex(slideIndex)}
    >
      { images && images.map( (i, e) => 
        <img src={i} alt="gallery image" key={e}/>
      )}
    </NukaCarousel>
  );
};

export default Carousel; */
/* import ReactModal from 'react-modal';

const Carousel = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    // <ReactModal
    //   isOpen={modalIsOpen}
    //   onRequestClose={closeModal}
    //   ariaHideApp={false}
    //   className="modal"
    //   overlayClassName="modal__overlay"
    // >
    //   <button className="modal__close" onClick={closeModal}>×</button>
    // </ReactModal>
  );
};

export default Carousel; */