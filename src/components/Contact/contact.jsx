import "./contact.css";
import Footer from "../Footer/footer";
export default function Contact() {
  return (
    <div className="contact-container" id="contact">
      
        <h2 className="contact-text">contact</h2>
        <div className="contact-details">
          <div className="contact-details-one">
            <div className="contact-details-text">
              <h3>
                drop me a message
               
              </h3>
              <p>
              Feel free to reach out anytime! I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
            </div>
            <ul>
              <li>
                <span>
                  <i class="fa fa-phone" aria-hidden="true"></i>
                </span>
                +2347088544687
              </li>
              <li>
                <span>
                  <i class="fa fa-envelope-open" aria-hidden="true"></i>{" "}
                </span>
                dorcasibrahim667@gmail.com
              </li>
              <li>
                <span>
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                </span>
                24,Akorohunfayo fadeyi street,Lagos
              </li>
            </ul>
          </div>
          <div className="contact-details-two">
          <form action="#" method="post">
            <div className="form-group">
             
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
           
              <textarea id="message" name="message" placeholder="Your Message" rows="4" required></textarea>
            </div>
            <button type="submit">Send </button>
          </form>
          </div>
        </div>
        <Footer/>
      </div>
 
  );
}
