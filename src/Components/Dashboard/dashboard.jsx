import React from "react";
import Layout from "../Shared/Layout";
import MainMenu from '../Shared/MainMenu'
// import FlashMessages from '../Shared/FlashMessages';
import TopHeader from '../Shared/TopHeader';
import BottomHeader from '../Shared/BottomHeader';

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-col">
        <h1 className="mb-8 text-3xl font-bold text-center">Test Front Farmart</h1>

        <div className="flex flex-col h-screen">
          <div className="md:flex">
            <TopHeader />
            <BottomHeader />
          </div>
          <div className="flex flex-grow overflow-hidden">
            <MainMenu className="flex-shrink-0 hidden w-36 p-12 overflow-y-auto bg-indigo-800 md:block" />
            <div className="w-full px-4 py-8 overflow-hidden overflow-y-auto md:p-12">
              {/* <FlashMessages /> */}
              {/* {children} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Dashboard;
