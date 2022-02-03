import { Component } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    imageName: "",
    showModal: false,
    card: {},

  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  handleSearchSubmit = (imageName) => {
    this.setState({imageName});
  };

  showImage = (evt) => {
    this.toggleModal();
    const card = {
      largeImageURL: evt.currentTarget.dataset.url,
      alt: evt.currentTarget.alt,
    };
    this.setState({ card });
  };


  render() {
    const {card, imageName} = this.state;

  return (
    <div>
    {this.state.showModal && (

    <Modal onToggle={this.toggleModal}>
    <img src={card.largeImageURL} alt={card.alt}/>
    </Modal>
    )}

    <Searchbar onSubmit={this.handleSearchSubmit} />
    <ImageGallery imageName={imageName} showImage={this.showImage} />
      </div>
    );
  }
}

export default App;