
import '../styles/skills.css'
import LinearProgress from '@mui/material/LinearProgress'


const skills = [
    ["HTML & CSS", 95, 'css.png'],
    ["JavaScript", 95, 'js.png'],
    ["Node JS", 70, 'node.webp'],
    ["React JS", 60, 'r.png'],
    ["Figma Design UI/UX", 50, 'figma.png'],
    ["Python", 70, 'py.png'],

]

export default function Skills() {
  return (
    <div className='container skills'>
        <h1>Skills</h1>
        <div className='skillsContainer'>
        {skills.map(function(object, i){
            return <Skill name={object[0]} img={object[2]} prog={object[1]}  />;
        })}
        </div>
    </div>
  )
}


function Skill({name, img, prog})
{
    return (
        <div className='skill'>
            <span>{name}</span>
            <img src={'langs/' + img}  />
            <LinearProgress className='prog' variant="determinate" value={prog}  />
        </div>
    )
}