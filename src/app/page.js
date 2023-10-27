
// navbar
import Nav from './components/nav'
import Info from './components/info'
import Cv from './components/cv'
import Skills from './components/skills'


export default function Home() {
  return (
    <main className='mainContainer'>
      <Nav />
      <div className='section' id='home'>
        <Info  />
      </div>
      <div className='section' id='cv'>
        <Cv />
      </div>
      <div className='section' id='skills'>
        <Skills />
      </div>
    </main>
  )
}
