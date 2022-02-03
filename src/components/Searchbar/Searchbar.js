import { Component } from "react";
import PropTypes from "prop-types";
import { 
  Searchbar,
  Form, 
  Button, 
  Icon, 
  Input } from "./Searchbar.styled";

  export default class SearchBar extends Component {
  state = {
    imageName: "",
  };

  handleNameChange = (event) => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.imageName.trim() === "") {
      return;
    }
    this.props.onSubmit(this.state.imageName);
    this.setState({imageName: ""});
  };


  render() {
    return (
      <Searchbar>
        <header>
      <Form onSubmit={this.handleSubmit}>
        <Button type="submit">
          <Icon />
        </Button>


      <Input
      className="input"
      type="text"
      autoComplete="off"
      autoFocus
     onChange={this.handleNameChange}
     value={this.state.imageName}
     placeholder="Search images and photos"
        />

      </Form>
      </header>
      </Searchbar>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
