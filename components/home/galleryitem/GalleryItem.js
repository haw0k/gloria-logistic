import Icons from "../../shared/Icons";

function onGalleryItemClick(imgUrl) {
  console.log("click with", imgUrl);
}

const GalleryItem = ({ imgUrl }) => (
  <div className="gallery__item" onClick={() => onGalleryItemClick(imgUrl)}>
    <div className="gallery__zoom">
      <Icons name="zoomIn" />
    </div>
    <img src={imgUrl} alt="gallery image" />
  </div>
);

export default GalleryItem;
