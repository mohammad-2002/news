import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Navbar extends Component {
  render() {
    return (
       // business
  // entertainment
  // general
  // health
  // science
  // sports
  // technology
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
        <div className="container">
          <a className="navbar-brand" href='/'>News</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" 
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
//           <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//             <ul className="navbar-nav ms-auto">
//               <li className='nav-item'><Link  className="nav-link active" aria-current="page" to="/business">Business</Link></li>
//               <li className='nav-item'><Link  className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link></li>
//               <li className='nav-item'><Link  className="nav-link active" aria-current="page" to="/">General</Link></li>
//               <li className='nav-item'><Link  className="nav-link active" aria-current="page" to="/health">Health</Link></li>
//               <li className='nav-item'><Link  className="nav-link active" aria-current="page" to="/science">Science</Link></li>
//               <li className='nav-item'><Link  className="nav-link active" aria-current="page" to="/sports">Sports</Link></li>
//               <li className='nav-item'><Link  className="nav-link active" aria-current="page" to="/technology">Technology</Link></li>
//             </ul>
//           </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
