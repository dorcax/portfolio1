export default function ProjectImage({name,github,description,demolink,img,alt}) {
    return (
        <>
            <div className="image-container">
                <div className="project-image">
                    <div className="project-text">
           
                        <h2>{name}</h2>
                        <p>{description}</p>
                    
                        <div className="demolink">
                            <a href={demolink}>view demo</a>
                            <a href={github}>source code</a>
                        </div>  
        
                    </div>
                <div className="project-image2"> 
                    {/* <div className="border"></div>  */}
                     <img src={img} alt={alt}  />
                
                     </div>
                    
                    
                   
                </div>
        </div>
        
        </>
    )
}