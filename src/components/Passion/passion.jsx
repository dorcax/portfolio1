import mentor from "../../assets/undraw_Code_typing_re_p8b9.svg"
import backend from "../../assets/undraw_server_cluster_jwwq.svg"
import frontend from "../../assets/undraw_static_website_0107.svg"
import "./passion.css"
export default function Passion() {
    return (
        <div className="container-passion" id="passion">
            <div className="passion-container">
                <div className="passion-text">
                    <h2>services</h2>
                </div>
                <div className="passion-image">
                    <div className="passion-img">
                        <div className="passion-front-end">
                           <div className="content">
                           <div className="image-dev"> <img src={frontend} alt="images" />
                           <h2>frontend development</h2></div>
                            <p>I love to create high quality code  which  is suitable for the client to use </p>
                           </div>
                        </div>
                        <div className="passion-front-end">
                           <div className="image-dev">
                           <img src={backend}  alt="backend" />
                           <h2>backend development</h2>
                           </div>
                            <p>I love to  create dynamic and scaleable website for users through the Backend/severside </p>
                        </div>
                        <div className="passion-front-end">
                           <div className="image-dev">
                           <img src={mentor} alt="mentor" />
                           <h2>mentorship</h2>
                           </div>
                            <p>I also love to help people in the  community who  have problems or challenges in coding </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}