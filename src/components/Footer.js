import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <Link to='/instructions'>Click for Instructions</Link>
      <br></br>
    <Link to='/about'>About</Link>
  </footer>
  )
}

export default Footer