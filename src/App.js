import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import EditPersonne from './pages/EditPersonne';

export default function App(){
  return(
    <Router>
      <div className='App'>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route path='/addPersonne' Component={EditPersonne}/>
        <Route path='/update/:id' Component={EditPersonne}/>
      </Routes>
      </div>
    </Router>
  )
}

