import React from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import DailyUpdate from './components/dailyupdates/dailyupdate.js';
import Table from './components/table';


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <DailyUpdate />
      <Table />
      <Footer />
    </div>
  );
}