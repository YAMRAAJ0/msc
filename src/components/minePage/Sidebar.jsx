import React from 'react';
import {  SearchBoxComponents , NavButton } from "../beasLib/InputComponents";
import { BsChatText } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        {isOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col py-6 bg-white shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-xl font-semibold text-black">Search</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                      <span className="sr-only">Close</span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-4 px-4">
                    <input
                      type="text"
                      placeholder="Search post here"
                      className="w-full p-2 border border-gray-300 rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                    />
                  </div>
                
                  <div className="mt-4 px-4">
                    <p className="ml-2 text-gray-400">Results</p>
                      <ul className="hidden md:flex space-x-4">
          <NavButton icon={<IoIosNotifications size={24} />} />
          <NavButton icon={<RiTeamLine size={24} />} />
          <NavButton icon={<BsChatText size={24} />} />
          <NavButton icon={<FaRegCalendarAlt size={24} />} /> </ul>
                  </div>
                  <div className="mt-4 px-4 h-full overflow-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-gray-300 transition-colors duration-300">
                        <h3 className="text-lg font-semibold text-black mb-2">Card 3</h3>
                        <p className="text-gray-600">Content for card 3.</p>
                      </div>
                      <div className="bg-gray-50 hover:bg-gray-100 p-4 cursor-pointer rounded-md border border-gray-300 transition-colors duration-300">
                        <h3 className="text-lg font-semibold text-black mb-2">Card 4</h3>
                        <p className="text-gray-600">Content for card 4.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </>
  );
}

export default Sidebar;
