import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import EditPersonne from './pages/EditPersonne';
import ModificationPersonne from './pages/ModificationPersonne';
import CarteMap from './pages/mapBox/CarteMap';



export default function App(){
  return(
    <Router>
      <div className='App'>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route path='/addPersonne' Component={EditPersonne}/>
        <Route path='/update/:id' Component={ModificationPersonne}/>
        <Route path='/map' Component={CarteMap}/>
      </Routes>
      </div>
    </Router>
  )
}

