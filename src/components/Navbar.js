import React  from 'react'
import { Link } from 'react-router-dom'

const Navbar = ()=> {
  const stylingMarRight = {
    marginRight:'1vw'
  };
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-success">
          <div className="container-fluid">
            <Link className="navbar-brand text-white" to="/" style={{marginRight:'15vw'}}>Cocktails</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/" style={stylingMarRight}>Home</Link>
                </li>
                <li><Link className="nav-link text-white" to="/Before Dinner Cocktail" style={stylingMarRight}>Before Dinner Cocktail</Link></li>
                <li><Link className="nav-link text-white" to="/All Day Cocktail" style={stylingMarRight}>All Day Cocktail</Link></li>
                <li><Link className="nav-link text-white" to="/After Dinner Cocktail" style={stylingMarRight}>After Dinner Cocktail</Link></li>
                <li><Link className="nav-link text-white" to="/Longdrink" style={stylingMarRight}>Longdrink</Link></li>
                <li><Link className="nav-link text-white" to="/Sparkling Cocktail" style={stylingMarRight}>Sparkling Cocktail</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
}

export default Navbar
