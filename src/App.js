import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './homepage/components/navbar';
import Header from './homepage/components/header';
import Footer from './homepage/components/footer';
import Home from './homepage/home';
import DetailPage from './detailpage/detailpage';
import LoginPage from './loginpage/login';
import SignupPage from './loginpage/signup';
import io from 'socket.io-client'
import { useEffect, useState } from 'react';
import authContext from './utils/auth/authContext';

const socket = io('http://io.nvdise.space', {
  timeout: 2000,
  secure: true,
  reconnection: false,
  transports: ['websocket'],
  // transports: ['polling'],
})
export const getSocket=()=>{
  return socket;
  
}
export default function App() {useEffect(() => {
  // 👇️ scroll to top on page load
  window.scrollTo({top: 0, left: 0, behavior: 'auto'});
}, []);
useEffect(()=>{
  socket.on('connect',()=>{
    console.log(socket);
  })
})

const [authenticated,setAuthenticated] = useState(false);
const [token, setToken] = useState('')
const [user, setUser] = useState({})

useEffect(()=>{
  console.log(token)
  console.log(JSON.stringify(user))
},[token,authenticated,user])
  return (
    <authContext.Provider value={{authenticated,setAuthenticated,token, setToken, user,setUser}}>
<div className="pl-10 pr-10 pt-5">
      <BrowserRouter >
        <Header />
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intro" element={<Home />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    </authContext.Provider >
  );
}