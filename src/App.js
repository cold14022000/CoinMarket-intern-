import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './homepage/components/navbar';
import Header from './homepage/components/header';
import Footer from './homepage/components/footer';
import Home from './homepage/home';
import DetailPage from './detailpage/detailpage';
import LoginPage from './loginpage/login';
import SignupPage from './loginpage/signup';

export default function App() {
  return (
    <div className="pl-10 pr-10 pt-5">
      <BrowserRouter >
        <Header />
        <Navbar />
          <Routes>
            <Route path="/intro" element={<Home />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}