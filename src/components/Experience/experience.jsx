import TechEcperience from "./techExperience"
import Technology from "../../data/technologies"
import "./experience.css"
export default function Experience() {
    return (
        <div className="container-experience" id="experience">
            <h2>Experience</h2>
            <div className="tech-main">
                 <div className="techExp">

                {
                    Technology.map((er) => {
                        return <TechEcperience key={ er.id} {...er} />
                    })
              }
            </div>
               
            </div>
           
        </div>
    )
}