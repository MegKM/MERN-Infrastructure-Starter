import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css'
import AuthPage from '../AuthPage/AuthPage';
import LoginForm from '../../components/LogInForm/LogInForm';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';


function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main>
      { user ? 
        <>
          <NavBar user={ user } setUser={ setUser }/>
          <Routes>
            <Route path="/orders" element={ <OrderHistoryPage /> } />
            <Route path="/orders/new" element={ <NewOrderPage /> } />
          </Routes>
        </>
        :
        <AuthPage setUser={ setUser }/>
      }
    </main>
  )
}

export default App
