import '../styles/cv.css'

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Cv() {
  return (
    <div className='container cv'>

        <div className='first'>
            <img src='prf.jpg' />
            <span>Abdelali AIT ADDI</span>
            <div>
                <a>
                    <EmailIcon />
                </a>
                <a>
                    <GitHubIcon />
                </a>
                <a>
                    <EmailIcon />
                </a>
            </div>
        </div>

        <div className='secand'>

            <h2>Devlopper Information</h2>

            <h5>Id ad incididunt elit nisi.</h5>
            
            <p>Ea quis sit minim qui ex veniam commodo ad sint do adipisicing mollit et exercitation. Non ad excepteur commodo voluptate et fugiat adipisicing officia ad irure. Cupidatat veniam incididunt voluptate id et incididunt veniam eu consectetur commodo ea. Dolore magna ea esse enim officia amet occaecat. Non enim deserunt nostrud eu nostrud culpa.</p>
        
        </div>

    </div>
  )
}
