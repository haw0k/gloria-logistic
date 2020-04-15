import ReactModal from "react-modal";
import ImageGallery from "react-image-gallery";

const Carousel = ({ slideActive = 0, images, isOpen, onClose }) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onClose}
    ariaHideApp={false}
    className="modal modal--gallery"
    overlayClassName="modal__overlay"
  >
    <button className="modal__close" onClick={onClose}>
      ×
    </button>
    <ImageGallery
      startIndex={slideActive}
      items={images}
    />
  </ReactModal>
);

export default Carousel;
