import './App.css';
import Topbar from './components/layout/Topbar';
import HomePage from './pages/HomePage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';


 function App() {
   return (
     <Router>
       <Routes>
         <Route  path="/" element=
            {
              <>
                <Topbar />
                <HomePage />
              </>
            } 
         />
         <Route path="/login" element={<LoginPage />} />
       </Routes>
     </Router>
   );
 }

export default App;