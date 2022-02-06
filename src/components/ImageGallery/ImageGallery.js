import PropTypes from "prop-types";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
// import pixabayApi from "../../pixabay";
// import Loader from "../Loader/Loader";
// import Button from "../Button/Button";
import { Pictures } from "./ImageGallery.styled";


  // state = {
  //   pictures: [],
  //   status: "idle",
  //   error: null,
  //   page: 1,
  // };

  const ImageGallery = ({ userImages, onClick }) => (
    <Pictures className="gallery">
      {userImages.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          largeImageURL={largeImageURL}
          onClick={onClick}
        />
      ))}
    </Pictures>
  );
  export default ImageGallery;
  
  ImageGallery.propTypes = {
    onClick: PropTypes.func.isRequired,
    userImages: PropTypes.array.isRequired,
  };