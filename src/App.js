import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ProductAll } from './page/ProductAll';
import { Login } from './page/Login';
import PrivateRoute  from './route/PrivateRoute'
import { Navbar } from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

function App() {

  const [authenticate, setAuthenticate] = useState(false);

  useEffect( () => {
    console.log(authenticate);
  },[authenticate])

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route 
          path="/login" 
          element={<Login setAuthenticate={setAuthenticate} />}/>
        <Route 
          path="/productDetail/:id" 
          element={<PrivateRoute authenticate={authenticate} />}
          />
      </Routes>
    </div>
  );
}

export default App;
