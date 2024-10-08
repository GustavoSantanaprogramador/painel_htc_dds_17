
import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';

function App() {
  return (
    <div>
     <Router>
        <Routes>
          <Route path = '/' element ={<Home/>} />
          <Route path = '/login' element ={<Login/>} />
        </Routes>
     </Router>
    </div>
  );
}
 
export default App;
// Router,Routes, Route são componentes para a navegação da pagina
