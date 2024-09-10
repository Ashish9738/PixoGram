import React from "react";
import { imageFolder } from "../utils/url";

function HomePosts({ post }) {
  function formatDateTime(dateString) {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();
    return { date: formattedDate, time: formattedTime };
  }

  const { date, time } = formatDateTime(post.createdAt);

  return (
    <>
      <div className="w-full flex mt-8 space-x-4 px-6 md:px-[200px]">
        <div className="w-[35%] h-[200px] flex justify-center items-center mt-[6px]">
          <img
            src={imageFolder + post.photo}
            alt="post Photo"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-[65%] flex flex-col">
          <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
            {post.title}
          </h1>
          <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4 ">
            <p>@{post.username}</p>
            <div className="flex space-x-2">
              <p>{date}</p>
              <p>{time}</p>
            </div>
          </div>
          <p>{post.description.slice(0, 280) + "..."}</p>
        </div>
      </div>
    </>
  );
}

export default HomePosts;
