import React from 'react'
import {Link} from 'react-router-dom'
const Header=()=>{
    return(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container"> 

<div className="collapse navbar-collapse  flex-grow-0" id="navbarNav">
    <ul className="navbar-nav ">
               <li className="nav-item"><Link to="/" className="nav-link">خانه</Link></li>
               <li className="nav-item"><Link to="/sport" className="nav-link">ورزش</Link></li>
               <li className="nav-item"><Link to="/art" className="nav-link">هنر</Link></li>
               <li className="nav-item"><Link to="/it" className="nav-link">فناوری</Link></li>
    </ul>
  </div>
  <a className="navbar-brand" href="#">logo</a>
 

  </div>
</nav>


    )

}

export default Header