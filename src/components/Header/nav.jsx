
import { useState } from "react";
import "./nav.css"


export default function Nav() {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
      <div className={toggle ? "container-nav expanded" : "container-nav"}>
        <nav>
          <ul>
            <li>
              <a href="#about" className="link">
                about
              </a>
            </li>
            <li>
              <a href="#passion" className="link">
                passion
              </a>
            </li>
            <li>
              <a href="#experience" className="link">
                experience
              </a>
            </li>
            <li>
              <a href="#project" className="link">
                project
              </a>
            </li>
            <li>
              <a href="#contact" className="link">
                contact
              </a>
            </li>
          </ul>
          <div className="toggle-icon" onClick={handleToggle}>
            {toggle ? 
              <i class="fa fa-times" aria-hidden="true"></i>  :  <i class="fa fa-bars" aria-hidden="true"></i> }
          </div>
        </nav>
      </div>
    );
}