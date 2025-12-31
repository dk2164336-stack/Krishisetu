import{Route,Routes} from 'react-router-dom'
import Register from './Register'
import Home from './Home'
import Login from './Login'
import DetailPage from './DetailPage'

function Routerpage() {
  
  return (
    <div>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/register'element={<Register/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/details/:id'element={<DetailPage/>}/>

      </Routes>
      </div>
      
  )
}

export default Routerpage