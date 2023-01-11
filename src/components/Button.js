import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
  return (
    <button onClick = {onClick} style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
  //   for the text, instead of static text we're adding the destructured prop of text so we can change
};

export default Button;

// alternative method of using props as an object, instead of destructuring 
// const Button = (props) => {
//     return (
//       <button style={{ backgroundColor: props.color }} className="btn">
//         {props.text}
//       </button>
//     );
//     //   for the text, instead of static text we're adding the destructured prop of text so we can change
//   };

Button.propTypes = { //make sure propTypes here is lowercase p
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
  }