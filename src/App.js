import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Heros from './components/Heros';
import Details from './components/Details';

function App() {
  return (

    <Router>

    <div className="App">
      <Navbar />
      <div className='content'>
      

      <Routes>
        
        <Route path='/' element={<Dashboard />} />
        <Route path='/heros' element={<Heros />} />

        <Route path='/heros/:id' element={<Details />} />
      </Routes>
      </div>
  </div>
    </Router>
  );
}

export default App;


// To start json server use the following command npx json-server --watch data/db.json --port 8000