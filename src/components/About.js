import {Link} from 'react-router-dom'
// we don't want the link to refresh each time so use Link

const About = () => {
  return (
    <div><h4>Made by Helena Xu</h4>
     <br></br>
    <h5> Version 1.0.0</h5> <br></br>
    <Link to='/'>Go Back</Link></div>
  )
}

export default About