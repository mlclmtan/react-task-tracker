import PropTypes from 'prop-types'

const Button = ({color, text}) => {
  return (
    <div>
      <button className='btn' style={{backgroundColor:color}}>{text}</button>
    </div>
  );
};

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = { //p lowercase
    color: PropTypes.string, //P uppercase
    text: PropTypes.string.isRequired,
}

export default Button;
