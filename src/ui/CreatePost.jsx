import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ImCross } from "react-icons/im";

export default function CreatePost() {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const setCategoryValue = (event) => {
    setCategory(event.target.value);
    // console.log(category);
  };

  const addCategory = () => {
    if (!(category === "")) {
      let updatedCategories = [...categories];
      updatedCategories.push(category);
      setCategory("");
      setCategories(updatedCategories);
    }
  };

  const deleteCategory = (index) => {
    let updatedCategories = [...categories];
    updatedCategories.splice(index);
    setCategories(updatedCategories);
  };

  return (
    <>
      <Navbar />
      <div className="px-6 md:px-[200px] mt-8">
        <h1 className="font-bold md:text-2xl sm:text-xl mt-8">Create a post</h1>
        <form
          action=""
          className="w-full flex flex-col space-y-4  md:space-y-8"
        >
          <input
            type="text"
            className="outline-none w-full px-4 py-2 mt-5 hover:border-black border-2"
            placeholder="Enter your post title"
          />
          <input
            type="file"
            className="outline-none w-full px-4 py-2  hover:border-black border-2"
          />
          <div className="flex flex-col">
            <div className="flex items-center justify-center space-x-2 md:space-x-8">
              <input
                type="text"
                placeholder="Enter your post category (eg: Tech, Litreature)"
                className="outline-none w-full px-4 py-2 hover:border-black border-2"
                value={category}
                onChange={(event) => setCategoryValue(event)}
              />
              <div
                className="bg-black text-white px-4 py-2 font-semibold cursor-pointer"
                onClick={addCategory}
              >
                Add
              </div>
            </div>
            <div className="flex mt-4">
              {categories.map((singleCategory, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-center space-x-4 mr-4 bg-gray-200 px-2 py-2 rounded-md"
                  >
                    <p>{singleCategory}</p>
                    <p>
                      <ImCross onClick={() => deleteCategory(index)} />
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <textarea
            placeholder="Enter your post description..."
            className="px-4 py-2 outline-none hover:border-black border-2"
            rows={15}
            cols={30}
          ></textarea>
          <button className="bg-black text-md text-white px-4 py-4 md:w-full mt-4 md:mt-0 text-sm">
            Create
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
