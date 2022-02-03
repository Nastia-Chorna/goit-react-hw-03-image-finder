import PropTypes from "prop-types";
import { ButtonLoud } from "./Button.styled";

const Button = ({ onLoadMore }) => {
  return (
    <ButtonLoud type="button" onClick={onLoadMore}>
      Load more ...
    </ButtonLoud>
  );
};

export default Button;

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};