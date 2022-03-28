
import './App.css';
import HomePage from './pages/HomePage';
import UpdateRegisterPage from './pages/UpdateRegisterPage';
import ContactPage from './pages/ContactPage';
import DoxxingPage from './pages/DoxxingPage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import FaqsPage from './pages/FaqsPage';
import AboutPage from './pages/AboutPage';
import TermsPage from './pages/TermsPage';


function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
      <Route index element={<UpdateRegisterPage/>}/>
      <Route path='/home' element={<HomePage/>} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/doxxing' element={<DoxxingPage/>} />
      <Route path='/faqs' element={<FaqsPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/terms' element={<TermsPage />} />

    </Routes>

    </Router>
    </div>
  

  );
}

export default App;