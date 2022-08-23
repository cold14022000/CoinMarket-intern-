import React from 'react';
import Navbar from './homepage/navbar';
import Header from './homepage/header';
import Footer from './homepage/footer';
import DailyUpdate from './components/dailyupdates/dailyupdate.js';
import Table from './homepage/table';
import Intro from './homepage/intro';
import DetailPage from './detailpage/detailpage';

export default function App() {
  return (
    <div className="pl-10 pr-10 pt-5">
      {/* <Header />
      <Navbar />
      <Intro />
      <DailyUpdate />
      <Table />
      <Footer /> */}
      <DetailPage />
    </div>
  );
}