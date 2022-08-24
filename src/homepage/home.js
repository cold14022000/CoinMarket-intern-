import  React from 'react';
import Intro from './components/intro';
import Table from './table';
import DailyUpdate from '../components/dailyupdates/dailyupdate';

export default function Home() {
  return (
    <div className="flex-col items-center justify-center">
      <Intro />
      <DailyUpdate />
      <Table />
    </div>
  );
}