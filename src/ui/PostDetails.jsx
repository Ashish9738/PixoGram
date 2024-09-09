import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Comments from "../components/Comments";
import { useParams } from "react-router-dom";
import { URL } from "../utils/url";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import Loader from "../components/Loader";

export default function PostDetails() {
  const postId = useParams().id;
  // console.log("Post Id", postId);
  const { user } = useContext(UserContext);
  console.log("post details user details:", user);
  const [PostDetail, setPostDetails] = useState({});
  const [loader, setLoader] = useState(false);

  const fetchPost = async () => {
    setLoader(true);
    try {
      const resp = await axios.get(`${URL}/api/v1/post/user/${postId}`);
      console.log("Post data", resp.data.post);
      setPostDetails(resp.data.post);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.log("Failed to fetch the post details: ", error);
    }
  };

  function formatDateTime(dateString) {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();
    return { date: formattedDate, time: formattedTime };
  }

  const { date, time } = formatDateTime(PostDetail.createdAt);

  useEffect(() => {
    fetchPost();
  }, [postId]);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow px-6 md:px-[200px]">
          {loader ? (
            <div className="flex justify-center items-center h-[40vh]">
              <Loader />
            </div>
          ) : (
            <div className="px-8 md:[200px] mt-8">
              <div className="flex justify-center items-center">
                <h1 className="text-2xl font-bold text-black md:text-3xl">
                  {PostDetail.title}
                </h1>
                {user && user.data && user.data._id === PostDetail.userId && (
                  <div className="flex justify-center items-center space-x-4">
                    <p>
                      <BiEdit />
                    </p>
                    <p>
                      <MdDelete />
                    </p>
                  </div>
                )}
              </div>
              <div className="flex justify-center items-center mt-2 md:mt-4 space-x-4">
                <p> @{PostDetail.username}</p>
                <div className="flex space-x-4">
                  <p>{date}</p>
                  <p>{time}</p>
                </div>
              </div>
              <img
                src={PostDetail.photo}
                alt="Post picture"
                className=" w-full mx-auto mt-8"
              />
              <p className="mt-8 mx-auto">{PostDetail.description}</p>
              <div className="flex items-center mt-8 space-x-4 font-semibold">
                <p>Categories:</p>
                {PostDetail.categories && PostDetail.categories.length > 0 ? (
                  <div className="flex justify-center items-center space-x-2 ">
                    {PostDetail.categories.map((category, index) => (
                      <div
                        key={index}
                        className="bg-gray-300 rounded-lg px-3 py3"
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="font-extralight">
                    User has not provided any categories
                  </p>
                )}
              </div>

              <h3 className="mt-6 mb-4 font-extrabold">Comments:</h3>
              <Comments />
              <Comments />

              {/* Add Comment  */}
              <h1 className="font-bold text-2xl mt-4">Add your comment:</h1>
              <div className="flex flex-col mt-4 md:flex-row">
                <input
                  type="text"
                  placeholder="Write a comment"
                  className="md:w-[90%] outline-none px-4 mt-2 md:mt-0 bg-gray-300  "
                />
                <button className="bg-black text-md text-white px-4 py-4 md:w-[10%] mt-4 md:mt-0 text-sm">
                  Add Comment
                </button>
              </div>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}
