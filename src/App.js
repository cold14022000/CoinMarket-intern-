import React from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import DailyUpdate from './components/dailyupdates/dailyupdate.js';
import Table from './components/table';
import Intro from './components/intro';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Intro />
      <DailyUpdate />
      <Table />
      <Footer />
    </div>
  );
}