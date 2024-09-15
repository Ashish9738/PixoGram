import axios from "axios";
import React, { useContext, useEffect } from "react";
// import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { URL } from "../utils/url";
import { UserContext } from "../context/UserContext";

const Comments = ({ comment, author, createdAt, userCommentId }) => {
  // const getCommentedUser = async () => {
  //   try {
  //     const res = await axios.get(`${URL}/api/v1/user`);
  //   } catch (error) {
  // console.log("Failed to get the commented user:", commentId);  used for testing
  //   }
  // };

  // const fetchPostOwner = async () => {
  //   try {
  //     const res = await axios.get(`${URL}/api/v1/user/${post?.userId}`);
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log("Failed to fetch post owner:", error);
  //   }
  // };

  const { user } = useContext(UserContext);
  // console.log("user id here in comment ", user);

  // useEffect(() => {
  //   fetchPostOwner();
  // }, []);

  const handleDeleteComment = async () => {
    try {
      const res = await axios.delete(
        `${URL}/api/v1/comment/delete/${commentId}`
      );
      window.location.reload(true);
      console.log("Comment deleted successfully!");
    } catch (error) {
      console.log("Failed to delete comment", error);
    }
  };
  // console.log("tester id", user?.data?.id);
  // console.log("comment author", userCommentId);
  return (
    <>
      <div className="flex flex-col">
        {/* Comments Display  */}
        <div className="px-2 py-2 mb-2 bg-gray-400 rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-gray-500 px-[12px]">@{author}</h3>
            <div className="flex justify-center items-center space-x-4">
              <p className="text-gray-500 text-sm">{createdAt}</p>
              <p className="text-gray-500 text-sm">{createdAt}</p>
              {user?.data?.id === userCommentId ? (
                <div className="flex justify-center items-center space-x-4">
                  {/* <p>
                    <BiEdit />
                  </p> */}
                  <p>
                    <MdDelete
                      className="cursor-pointer"
                      onClick={handleDeleteComment}
                    />
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <p className="px-4 mt-2">{comment}</p>
        </div>
      </div>
    </>
  );
};

export default Comments;
