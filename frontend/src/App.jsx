import './App.css'
import Header from './components/Headers'
import Footer from './components/Footer'
import Home from './pages/Home'
import User from './pages/User'
import {Route, Routes} from 'react-router-dom'
 
function App() {
  return (
    <>
      <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/User' element={<User />} />
        </Routes>
      
      <Footer />
    </>
  )
}

export default App
