import "./footer.css"
export default function Footer() {
    return (
      <div className="footer-container">
        <div className="footer-submain">
          <div className="footer-socio-icons">
            <div className="footer-icon ">
              <a href="" className="icon twitter">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </div>
            <div className="footer-icon ">
              <a href="" className="icon facebook">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </div>
            <div className="footer-icon ">
              <a href="" className="icon github">
               
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
            <div className="footer-icon ">
              <a href="" className="icon instagram">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="footer-icon ">
              <a href="" className="icon linkedin">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="footer-line"></div>
          <div className="footer-text">
            <h3>@Dorcasibrahim {new Date().getFullYear()}</h3>
          </div>
          <div className="footer-pointer">
            <a href="">
              <i class="fa fa-arrow-up" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    );
}
