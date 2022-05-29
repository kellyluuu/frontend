import {useState, useEffect} from "react"

function Projects (props){
    const[projects, setProjects] = useState(null)
    const getProjectsData = async ()=>{
        const response = await fetch(props.URL + "projects")
        const data = await response.json()
        setProjects(data)
    }
    useEffect(()=>{getProjectsData()},[])
    const loaded = ()=>{
        return <div className="project-cards">{
        projects.map((project, index)=>(
        <div className="card" key={index}>
            <h3>{project.name}</h3>
            <img className="img-card-size" src={project.image} alt="img" />
            <a href={project.git}>
            <button type="button" className="btn btn-info">Github</button>
            </a>
         <a href={project.live}>
          <button type="button" className="btn btn-info">live site</button>
        </a>
      </div>
        ))
    }</div>
    }
    return projects ? loaded() : <h1> Loading...</h1>
}

export default Projects
