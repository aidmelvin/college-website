import {Link} from 'react-router-dom';
import "./navbar-style.css"

function Navbar() {
    return (
      <div className="Navbar">
    
        <Link to="/">Home: US Colleges</Link>
    
      </div>
    );
  }

export default Navbar;
