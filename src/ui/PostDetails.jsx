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
import { imageFolder } from "../utils/url";
import { useNavigate } from "react-router-dom";

export default function PostDetails() {
  const postId = useParams().id;
  const { user } = useContext(UserContext);

  const [PostDetail, setPostDetails] = useState({});
  const [loader, setLoader] = useState(false);
  const [comments, setComments] = useState([]); //all the fetched comments
  const [comment, setComment] = useState(""); // to send user comment

  const navigate = useNavigate();

  // console.log("post details user details:", user);
  // console.log("Post Id", postId);
  console.log("here", user?.data?.username);

  const fetchPost = async () => {
    setLoader(true);
    try {
      const resp = await axios.get(`${URL}/api/v1/post/user/${postId}`);
      // console.log("Post data", resp.data.post);
      setPostDetails(resp.data.post);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.log("Failed to fetch the post details: ", error);
    }
  };

  const fetchPostComments = async () => {
    try {
      const resp = await axios.get(`${URL}/api/v1/comment/post/${postId}`);
      console.log("Post comments:", resp);
      setComments(resp.data.comments);
    } catch (error) {
      console.log("Failed to fetch post comment:", error);
    }
  };

  function formatDateTime(dateString) {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();
    return { date: formattedDate, time: formattedTime };
  }

  const { date, time } = formatDateTime(PostDetail?.createdAt);

  // console.log("image path - ", imageFolder + PostDetail.photo);
  console.log("post details for username:", user?.data?.username);

  const handleDeletePost = async () => {
    try {
      const response = await axios.delete(
        `${URL}/api/v1/post/delete/${postId}`,
        {
          withCredentials: true,
        }
      );
      console.log("Delete post resp", response);
      navigate("/");
    } catch (error) {
      console.log("Failed to delete post", error);
    }
  };

  const handleAddComment = async (event) => {
    event.preventDefault();
    try {
      const data = {
        comment: comment,
        author: user.data.username,
        postId: postId,
        userId: user._id,
      };
      const res = await axios.post(`${URL}/api/v1/comment/add`, data, {
        withCredentials: true,
      });
      console.log("comment added: ", res);
      setComment("");
      fetchPostComments();
    } catch (error) {
      console.log("Failed to create comment: ", error);
    }
  };

  useEffect(() => {
    fetchPost();
    fetchPostComments();
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
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-black md:text-3xl">
                  {PostDetail?.title}
                </h1>
                {user &&
                  user?.data &&
                  user?.data._id === PostDetail?.userId && (
                    <div className="flex justify-center items-center space-x-4">
                      <p>
                        <BiEdit
                          className="cursor-pointer"
                          onClick={() => navigate(`/edit/${postId}`)}
                        />
                      </p>
                      <p>
                        <MdDelete
                          className="cursor-pointer"
                          onClick={handleDeletePost}
                        />
                      </p>
                    </div>
                  )}
              </div>
              <div className="flex justify-between items-center mt-2 md:mt-4 space-x-4">
                <p> @{user?.data?.username}</p>
                <div className="flex space-x-4">
                  <p>{date}</p>
                  <p>{time}</p>
                </div>
              </div>
              <img
                src={imageFolder + PostDetail?.photo}
                alt="Post picture"
                className=" w-full mx-auto mt-8"
              />
              <p className="mt-8 mx-auto">{PostDetail?.description}</p>
              <div className="flex items-center mt-8 space-x-4 font-semibold">
                <p>Categories:</p>
                {PostDetail?.categories && PostDetail?.categories.length > 0 ? (
                  <div className="flex justify-center items-center space-x-2 ">
                    {PostDetail?.categories.map((category, index) => (
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

              {/* Add Comment  */}
              <h1 className="font-bold text-2xl mt-4">Add your comment:</h1>
              <div className="flex flex-col mt-4 md:flex-row">
                <input
                  type="text"
                  placeholder="Write a comment"
                  className="md:w-[80%] outline-none px-4 py-4 mt-2 md:mt-0 bg-gray-300"
                  value={comment}
                  onChange={(event) => setComment(event.target.value)}
                />
                <button
                  className="bg-black text-md text-white px-4 py-4 md:w-[20%] mt-4 md:mt-0 text-sm"
                  onClick={handleAddComment}
                >
                  Add Comment
                </button>
              </div>

              {/* Display Comments  */}
              <h3 className="mt-6 mb-4 font-extrabold">Comments:</h3>
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <Comments
                    key={comment._id}
                    author={comment.author}
                    comment={comment.comment}
                    createdAt={comment.createdAt}
                    commentId={comment._id}
                  />
                ))
              ) : (
                <p>Please add your valuable comment.</p>
              )}
            </div>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}
