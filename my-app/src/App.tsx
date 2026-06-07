
import './App.css'
import NavBar from './components/navBar'
import ProfileSection from './components/ProfileSection'
import Posts from './components/Posts'
import News from './components/News'
function App() {


  return (
    <>
      <div>
        <NavBar />
        <div className="flex w-full justify-center">
          <div className='flex-1 flex  justify-end'>
            <ProfileSection />
          </div>
          <div className='flex-1'>
            <Posts />
          </div>
          <div className='flex-1 pl-10 '>
            <News />
          </div>

        </div>
      </div>

    </>
  )
}

export default App
