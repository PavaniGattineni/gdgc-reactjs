
import './App.css';
import HomePage from './pages/HomePage';
import UpdateRegisterPage from './pages/UpdateRegisterPage';
import ContactPage from './pages/ContactPage';
import DoxxingPage from './pages/DoxxingPage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
      <Route index  element={<HomePage/>} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/register' element={<UpdateRegisterPage/>}/>
      <Route path='/doxxing' element={<DoxxingPage/>} />
    </Routes>

    </Router>
    </div>
  

  );
}

export default App;
