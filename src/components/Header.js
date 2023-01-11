// import React from 'react' don't need this anymore based on react versions!
import PropTypes from 'prop-types'
import Button from "./Button";

const Header = ({ title, onAdd, showAdd}) => {
  return (
    <header className="header">
      {/* remember for react we have to write className with camelcase not just class */}
      <h1>Task Tracker</h1>
      <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
      {/* passing in props to the Button component, not html button!
        this is a reusable component! */}
      {/* remember that when we do events, since the button is a component it's not going to have the same clicks so click event has to be a prop and then it executes wherever you embed button  */}
    </header>
  );
};

Header.defaultProps = {
  title: "Helena's Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

// example of how we can use CSS in JS ():
// const Header = () => {
//     return (
//       <h1 style={headingStyle}>Task Tracker</h1>
//     )
//   }

//   export default Header

// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }
