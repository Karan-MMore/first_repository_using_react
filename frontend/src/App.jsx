
import './App.css'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home'
import Register from './components/Register'
import Signin from './components/Signin'
function App() {

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/signin' element={<Signin/>}/>
     </Routes>
    </>
  )
}

export default App
