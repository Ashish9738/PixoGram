import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

export default function Comments() {
  return (
    <>
      <div className="flex flex-col">
        {/* Comments Display  */}
        <div className="px-2 py-2 mb-2 bg-gray-400 rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-gray-500 px-[12px]">@Raju Prasad</h3>
            <div className="flex justify-center items-center space-x-4">
              <p className="text-gray-500 text-sm">12/12/1252</p>
              <p className="text-gray-500 text-sm">09:34</p>
              <div className="flex justify-center items-center space-x-4">
                <p>
                  <BiEdit />
                </p>
                <p>
                  <MdDelete />
                </p>
              </div>
            </div>
          </div>
          <p className="px-4 mt-2">Cool Dude!</p>
        </div>
      </div>
    </>
  );
}
