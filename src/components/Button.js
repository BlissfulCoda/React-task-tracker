import PropTypes from 'prop-types';

const Button = ({ color, text}) => {
  return (
    <div>
      <button style={{background: color}} className="btn">{text}</button>
    </div>
  );
};

Button.defaultProps = {
    color: 'steel-blue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button;
