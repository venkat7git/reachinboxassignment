import Sidebar from '../sidebar'
import Header from '../header'

import './index.css'



const Home = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <div className='main-content-container'>
      <Header />
      <div className='content-container'>
        <div className='cc-container'>
        <div class="home-content-card">
            <img className='home-content-image' src="https://res.cloudinary.com/dbb5puzve/image/upload/v1724506216/No_Message_illustration_gfjfsi.png" alt="home"/>
            <h1 className='home-intro-heading'>It's the beginning of a legendary sales pipeline</h1>
            <p className='home-intro-paragraph'>When you have inbound E-mails</p>
            <p className='home-intro-paragraph'>you'll see them here</p>
        </div>
        </div>
        
      
      </div>
      </div>
    </div>
  )
}

export default Home
