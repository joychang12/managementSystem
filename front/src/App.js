import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ListUserComponent from './components/ListUserComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddUserComponent from './components/AddUserComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route exact path = "/" element ={<ListUserComponent />}></Route>
            <Route path = "/users" element ={<ListUserComponent />}></Route>
            <Route path = "/add-user" element ={<AddUserComponent />}></Route>
          </Routes>
        </div>
        
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
