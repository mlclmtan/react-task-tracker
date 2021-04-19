import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
  return (
    <div>
      <button onClick={onClick} className='btn' style={{backgroundColor:color}}>{text}</button>
    </div>
  );
};

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = { //p lowercase
    color: PropTypes.string, //P uppercase
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func, //func type
}

export default Button;
