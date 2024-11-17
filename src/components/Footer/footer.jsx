import "./footer.css"
export default function Footer() {
    return (
      <div className="footer-container">
         <div className="footer-line"></div>
        <div className="footer-submain">
        <div className="footer-text">
            <h4>{new Date().getFullYear()}-Dorcasibrahim </h4>
          </div>
          <div className="footer-socio-icons">
            <div className="footer-icon ">
              <a href="" className="icon twitter">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </div>
           
            <div className="footer-icon ">
              <a href="https://github.com/dorcax" className="icon github">
               
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
            
            <div className="footer-icon ">
              <a href="" className="icon linkedin">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
         
        </div>
      </div>
    );
}
