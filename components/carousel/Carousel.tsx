import { FC } from "react";
import ReactModal from "react-modal";
import ImageGallery from "react-image-gallery";
import { ICarouselProps } from "./../../interfaces/ICarouselProps";

const Carousel: FC<ICarouselProps> = ({
  slideActive = 0,
  images,
  isOpen,
  onClose,
}) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onClose}
    ariaHideApp={false}
    className='modal modal--gallery'
    overlayClassName='modal__overlay'
  >
    <button className='modal__close' onClick={onClose}>
      ×
    </button>
    <ImageGallery
      startIndex={slideActive}
      items={images}
      showBullets={true}
      showThumbnails={false}
      lazyLoad={true}
      showFullscreenButton={false}
    />
  </ReactModal>
);

export default Carousel;
