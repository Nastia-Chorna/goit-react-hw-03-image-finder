import PropTypes from "prop-types";
import { 
  Item, 
  Image } from "./ImageGalleryItem.styled";

  const ImageGalleryItem = ({ webformatURL, tags, largeImageURL, onClick }) => (
    <Item
      onClick={() => {
        onClick(largeImageURL, tags);
      }}
    >
      <Image src={webformatURL} alt={tags} />
    </Item>
  );
  export default ImageGalleryItem;
  
  ImageGalleryItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  };
  