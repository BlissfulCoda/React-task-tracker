import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
  return (
    <div>
      <button onClick={onClick} style={{ background: color }} className="btn">
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  color: 'steel-blue'
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
