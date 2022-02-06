import { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Modal from "./components/Modal/Modal";
import ImagesAPI from "../src/pixabay";
// import { Pictures } from "./components/ImageGallery/ImageGallery.styled";
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';


class App extends Component {
  state = {
    images: null,
    page: 1,
    query: '',
    error: '',
    status: 'idle',
    activeImge: '',
    tags: '',
    showModal: false,
    visible: true,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query) {
      this.setState({ images: [], status: 'pending' });
    }

    if (prevState.query !== query || prevState.page !== page) {
      if (page > 1) {
      window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }

      this.setState({ status: 'pending', visible: true });
      ImagesAPI.fetchPictures(query, page)
        .then(({ hits }) => {
        if (!query) {
        this.setState({ status: 'idle' });
        return this.notify();
        }
        if (hits.length === 0) {
        this.setState({ status: 'resolved', visible: false });
        return this.notify();
        }
        this.setState(({ images }) => ({
        images: [...images, ...hits],
        status: 'resolved',
          }));
        if (page > 1) {
          this.scrollTo();
        }
        return hits;
        })
        .then(hits => this.scrollTo())
        .catch(error => {
          this.setState({ error, status: 'rejected' });
        });
    }
  }

  scrollTo = () => {
    const gallery = document.querySelector('.gallery');
    const cardHeight = gallery.getBoundingClientRect().height;
    window.scrollBy({
    left: 0,
    top: cardHeight * 4,
    behavior: 'smooth',
    });
  };

  handlerSubmitUserQuery = query => {
    this.setState({ query: query.trim(), page: 1 });
  };

  handlerClickLoadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  notify = () =>
    toast.error(
      `There are no matching images for this request: ${this.state.query} !`,
    );

  handleronClickImage = (activeImge, tags) => {
    this.setState({ activeImge, tags });
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { images, status, error, activeImge, showModal, tags, visible } =
      this.state;

    if (status === 'idle') {
      return (
        <div>
        <ToastContainer position="top-center" autoClose={2000} />
        <Searchbar onSubmit={this.handlerSubmitUserQuery} />
        </div>
      );
    }

    if (status === 'rejected') {
      return (
        <div>
          <Searchbar onSubmit={this.handlerSubmitUserQuery} />
          <h2>{error.massage}</h2>
        </div>
      );
    }

    if (status === 'pending') {
      return (
        <div>
          <ToastContainer position="top-center" autoClose={2000} />
          <Searchbar onSubmit={this.handlerSubmitUserQuery} />
          <ImageGallery
            userImages={images}
            onClick={this.handleronClickImage}
          />
          <Loader />
        </div>
      );
    }

    if (status === 'resolved') {
      return (
        <div>
          <ToastContainer position="top-center" autoClose={2000} />
          <Searchbar onSubmit={this.handlerSubmitUserQuery} />
          <ImageGallery
            userImages={images}
            onClick={this.handleronClickImage}
          />
          {images.length && visible && (
            <Button onClick={this.handlerClickLoadMore} />
          )}
          {showModal && (
            <Modal image={activeImge} tags={tags} onClose={this.toggleModal} />
          )}
        </div>
      );
    }
  }
}
export default App;
