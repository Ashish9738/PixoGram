import React, { useEffect, useState } from "react";
import HomePosts from "../components/HomePosts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { URL } from "../utils/url";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Loader from "../components/Loader";

function Home() {
  const [posts, setPosts] = useState([]);
  const [noResult, setNoResult] = useState(false);
  const [loader, setLoader] = useState(false);
  const { search } = useLocation();

  // const path = useLocation();
  // console.log("path", path);

  const fetchPosts = async () => {
    setLoader(true);
    try {
      const res = await axios.get(`${URL}/api/v1/posts/home${search}`);
      console.log("Home posts ", res.data);
      setPosts(res.data);
      if (res.data.length == 0) {
        setNoResult(true);
      } else {
        setNoResult(false);
      }
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.log("Failed to fetch posts", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [search]);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          {loader ? (
            <div className="flex justify-center items-center h-[40vh]">
              <Loader />
            </div>
          ) : !noResult ? (
            posts.length > 0 ? (
              posts.map((post) => <HomePosts key={post._id} post={post} />)
            ) : (
              <p>No posts found</p>
            )
          ) : (
            <div className="flex items-center justify-center h-[400px] border-2 border-gray-300 rounded-lg">
              <p className="text-lg font-semibold text-gray-500">
                No posts found
              </p>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
