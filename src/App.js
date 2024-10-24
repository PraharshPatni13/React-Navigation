import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import HomePage from "./Component/HomePage"
import AboutPage from "./Component/AboutPage"
import ProfilePage from "./Component/ProfilePage"
import DeveloperPage from "./Component/DeveloperPage"
import LoginPage from './Component/LoginPage';
import RegisterPage from './Component/RegisterPage';


function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<RegisterPage />}></Route>
          {/* <Route path='/' element={<LoginPage />}></Route> */}
          <Route path='/home' element={<HomePage/>}> </Route>
          <Route path='/about' element={<AboutPage/>}> </Route>
          <Route path='/profile' element={<ProfilePage/>}> </Route>
          <Route path='/developer' element={<DeveloperPage/>}> </Route>
        </Routes>
      </Router>

  )
}

export default App;
