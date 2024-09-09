import React, { useEffect, useState } from "react";
import HomePosts from "../components/HomePosts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { URL } from "../utils/url";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(URL + "/api/v1/posts/home");
      // console.log("Home posts ", res.data);
      setPosts(res.data);
    } catch (error) {
      console.log("Failed to fetch posts", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Navbar />
      {posts.map((post) => (
        <HomePosts posts={post} />
      ))}
      <Footer />
    </>
  );
}

export default Home;
