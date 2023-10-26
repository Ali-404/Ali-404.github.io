
// navbar
import Nav from './components/nav'
import Info from './components/info'
import Cv from './components/cv'


export default function Home() {
  return (
    <main className='mainContainer'>
      <Nav />
      <div className='section'>
        <Info />
      </div>
      <div className='section'>
        <Cv />
      </div>
    </main>
  )
}
