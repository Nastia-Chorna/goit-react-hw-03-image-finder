import PropTypes from "prop-types";
import { ButtonLoud } from "./Button.styled";

const Button = ({ onClick }) => {
  return (
    <ButtonLoud type="button" onClick={onClick}>
      Load more ...
    </ButtonLoud>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};