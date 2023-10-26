import '../styles/info.css'
import Button from '@mui/material/Button';

export default function Info() {
  return (
    <div className="container infos">


        <div className='lft'>
            <span>Fullstack Devlopper</span>
            <h1>Abdelali AIT ADDI</h1>
            <p>Ex laborum ex nulla sint ullamco ex duis dolor aliqua enim. Minim officia dolore velit Lorem Lorem ex elit consectetur officia</p>
            <Button variant='outlined' >Devlopper Information</Button>
        </div>

        <img className='logo' src="developer.png"  />


    </div>
  )
}
