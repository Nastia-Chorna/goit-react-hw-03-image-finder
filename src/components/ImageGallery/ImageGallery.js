import { Component } from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import pixabayApi from "../../pixabay";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import { Pictures } from "./ImageGallery.styled";

export default class ImageGallery extends Component {
  state = {
    pictures: [],
    status: "idle",
    error: null,
    page: 1,
  };

  handleLoadMore() {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

async componentDidUpdate(prevProps, prevState) {
  if (prevProps.imageName !== this.props.imageName) {
    try {
    this.setState({ status: "pending" });
    const pictures = await pixabayApi(this.props.imageName, 1);
    if (pictures.total === 0) {
    return await Promise.reject(new Error("Can't find the image. Please enter another name"));
    }

    this.setState({
    pictures: pictures.hits,
    status: "resolved",
    });
    } catch (error) {
    this.setState({ status: "rejected", error: error.message });
    }
    }

    if (prevState.page !== this.state.page) {
      try {
        this.setState({ status: "pending" });
        const pictures = await pixabayApi(
        this.props.imageName,
        this.state.page
        );

        if (pictures.total === 0) {
        return await Promise.reject(new Error("Can't find the image. Please enter another name"));
        }
        this.setState((prevState) => {
          window.scrollBy({
            top: 300,
          });
          return {
            pictures: [...prevState.pictures, ...pictures.hits],
            status: "resolved",
          };
        });
      } catch (error) {
        this.setState({ status: "rejected", error: error.message });
      }
    }
  }

  render() {
    const { pictures, status, error } = this.state;
    if (status === "idle") {
    return <h2>Enter name</h2>;
    }

    if (status === "resolved") {
      return (
        <>
          <Pictures>
            <ImageGalleryItem

            pictures={pictures}
            showImage={this.props.showImage}
            />

          </Pictures>
          <Button onLoadMore={() => this.handleLoadMore()} />
        </>
      );
    }

    if (status === "pending") {
      if (this.state.pictures.length !== 0) {
        return (
          <>
            <Pictures>
              <ImageGalleryItem pictures={pictures} />
            </Pictures>
            <Loader />
          </>
        );
      }
      return <Loader />;
    }
    if (status === "rejected") {
      return <h2>{error}</h2>;
    }
  }
}

ImageGallery.propTypes = {
  imageName: PropTypes.string.isRequired,
};
