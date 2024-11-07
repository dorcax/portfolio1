import "./header.css"
import Nav from "./nav"
// import MobileNav from "./mobilenav"
export default function Header() {
    return (
        <div className="container">
            <div className="header-container">
            <Nav />
            {/* <MobileNav /> */}
            <div className="background-image">
               <span>developer</span>
             
            </div>
            <div className="background">
                <span>I'm a</span>
                <h1>Backend software developer.</h1>
                <button>previous projects</button>
              </div>
        </div>
        </div>
        
    )
}