import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './screens/Dashboard';


function App() {
  return (
    <Router>
      <Header />
      <Routes>




        <Route exact path='/' element={<Dashboard />} />


      </Routes>

    </Router>
  );
}

export default App;
