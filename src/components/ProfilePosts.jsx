import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
// import { URL } from "../utils/url";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

function ProfilePosts({ posts }) {
  const { user } = useContext(UserContext);

  // console.log("here at profilepost user", user?.data?.username);

  // const fetchPost = async () => {
  //   try {
  //     const res = await axios.get(
  //       `${URL}/api/v1/posts/users/${user?.data?.id}`
  //     );
  //     // console.log("fetched posts", res.data);
  //     setPost(res?.data);
  //     // setPost()
  //   } catch (error) {
  //     console.log("Failed to fetch user post:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchPost();
  // }, []);
  // console.log("post here", posts);
  return (
    <>
      {posts && posts.length > 0 ? (
        posts.map((post, index) => (
          <Link to={"/posts/post/" + post?._id}>
            <div
              key={index}
              className="w-full flex mt-4 space-x-4 cursor-pointer"
            >
              <div className="w-[35%] h-[200px] flex justify-center items-center mt-[6px]">
                <img
                  src={post.photo}
                  alt="Post Photo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-[65%] flex flex-col">
                <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
                  {post.title}
                </h1>
                <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4 ">
                  <p> @{user?.data?.username}</p>
                  <div className="flex space-x-2">
                    <p className="text-sm text-gray-400">
                      {post.updatedAt.slice(0, 10)} -{" "}
                      {post.updatedAt.slice(11, 16)}
                    </p>
                  </div>
                </div>
                <p>{post.description}</p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <h3> You don't have any posts</h3>
      )}
    </>
  );
}

export default ProfilePosts;
