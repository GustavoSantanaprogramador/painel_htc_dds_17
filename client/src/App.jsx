
import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import CadastroAulas from './components/pages/CadastroAulas';

function App() {
  return (
    <div>
     <Router>
        <Routes>
          <Route path = '/' element ={<Home/>} />
          <Route path = '/login' element ={<Login/>} />
          <Route path = '/cadastro_aula' element ={<CadastroAulas/>} />
        </Routes>
     </Router>
    </div>
  );
}
 
export default App;
// Router,Routes, Route são componentes para a navegação da pagina
