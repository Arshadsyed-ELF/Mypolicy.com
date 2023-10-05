import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './User/Login';
import Home from './Components/Home';
import Unav from './User/Unav';
import Myinsurances from './User/Bike/Bikeinsurance';
import Alogin from './Admin/Alogin';
import Anav from './Admin/Anav';
import Addcar from './Admin/Addcar';
import Admininsu from './Admin/Admininsu';
import Bike from './Admin/Bike';
import Addbike from './Admin/Addbike';
import Car from './Admin/Car';
import Life from './Admin/Life';
import Addlife from './Admin/Addlife';
import Health from './Admin/Health';
import Addhealth from './Admin/Addhealth';
import Ubike from './User/Bike/Ubike';
import Addbikepolicy from './User/Bike/Addbikepolicy';
import Bikeinsurance from './User/Bike/Bikeinsurance';
import Signup from './User/Signup';
import Uhome from './User/Uhome';
import Ahome from './Admin/Ahome';
import Users from './Admin/Users';
import UserEdit from './Admin/UserEdit';
import Abike from './Admin/Abike';
import Carinsurance from './User/Car/Carinsurance';
import Addcarpolicy from './User/Car/Addcarpolicy';
import Ucar from './User/Car/Ucar';
import Ulife from './User/Life/Ulife';
import Addlifepolicy from './User/Life/Addlifepolicy';
import Lifeinsurance from './User/Life/Lifeinsurance';
import Uhealth from './User/Health/Uhealth';
import Addhealthpolicy from './User/Health/Addhealthpolicy';
import Healthinsurance from './User/Health/Healthinsurance';
function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/unav' element={<Unav/>} />
   



      {/* Admin */}
      <Route path='/alogin' element={<Alogin/>}/>
      <Route path='/anav' element={<Anav/>} />
      <Route path='/ahome' element={<Ahome/>} />
      <Route path='/users' element={<Users/>} />
      <Route path="/useredit/:id" element={<UserEdit/>}/>
      <Route path='/life' element={<Life/>} />
      <Route path='/addlife' element={<Addlife/>} />
      <Route path='/health' element={<Health/>} />
      <Route path='/addhealth' element={<Addhealth/>} />
      <Route path='/bike' element={<Bike/>} />
      <Route path='/addbike' element={<Addbike/>} />
      <Route path='/abike' element={<Abike/>} />
      <Route path='/car' element={<Car/>} />
      <Route path='/addcar' element={<Addcar/>} />

      <Route path='/admininsu' element={<Admininsu/>} />


  
                 {/* user */}
                 <Route path='/uhome' element={<Uhome/>} />
                 <Route path='/ulife' element={<Ulife/>} />
                 <Route path='/addlifepolicy' element={<Addlifepolicy/>} />
                 <Route path='/lifeinsurance' element={<Lifeinsurance/>} />
                 <Route path='/uhealth' element={<Uhealth/>} />
                 <Route path='/addhealthpolicy' element={<Addhealthpolicy/>} />
                 <Route path='/healthinsurance' element={<Healthinsurance/>} />
                 <Route path='/ucar' element={<Ucar/>} />
                 <Route path='/addcarpolicy' element={<Addcarpolicy/>} />
                 <Route path='/carinsurance' element={<Carinsurance/>} />
                 <Route path='/ubike' element={<Ubike/>} />
                 <Route path='/addbikepolicy' element={<Addbikepolicy/>} />
                 <Route path='/bikeinsurance' element={<Bikeinsurance/>} />
   
  

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
