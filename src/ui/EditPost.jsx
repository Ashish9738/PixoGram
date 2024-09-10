import React, { useCallback, useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ImCross } from "react-icons/im";
import axios from "axios";
import { useParams } from "react-router-dom";
import { URL } from "../utils/url";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function EditPost() {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  // console.log("param", id);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
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

  const fetchPost = async () => {
    try {
      const res = await axios.get(`${URL}/api/v1/post/user/${id}`);
      // console.log("Edit post details of post: ", res.data);
      // console.log("edit title", res.data.post?.categories.length);
      setTitle(res.data.post?.title);
      setDescription(res.data.post?.description);
      setCategories(res.data.post?.categories);
      setPhoto(res.data.post?.photo);
    } catch (error) {
      console.log("Failed to fetch post[edit post]: ", error);
    }
  };

  const handleUpdatePost = async (event) => {
    event.preventDefault();
    const post = {
      title,
      description,
      username: user.username,
      userId: user.userId,
      categories,
    };

    if (photo) {
      const data = new FormData();
      const originalFilename = photo.name;
      data.append("name", originalFilename);
      data.append("file", photo);
      post.photo = originalFilename;

      // console.log("photo", photo);
      try {
        const uploadPostPhoto = await axios.post(
          `${URL}/api/v1/post/upload`,
          data
        );
        // console.log("uploadPostPhoto", uploadPostPhoto);
      } catch (error) {
        console.log("Faild to upload the post photo while editing", error);
      }
    }

    try {
      console.log(`${URL}/api/v1/post/update/${id}`);
      const updatePost = await axios.put(
        `${URL}/api/v1/post/update/${id}`,
        post,
        {
          withCredentials: true,
        }
      );
      // console.log("Here", createPost.data);
      // console.log("Updated post w/ data: ", updatePost.data.updatedPost);
      navigate(`/posts/post/` + updatePost.data.updatedPost?._id);
    } catch (error) {
      console.log("Faild to update the post ", error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]);
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-[200px] mt-8">
        <h1 className="font-bold md:text-2xl sm:text-xl mt-8">Update a post</h1>
        <form
          action=""
          className="w-full flex flex-col space-y-4  md:space-y-8"
        >
          <input
            type="text"
            className="outline-none w-full px-4 py-2 mt-5 hover:border-black border-2"
            placeholder="Enter your post title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <input
            type="file"
            className="outline-none w-full px-4 py-2  hover:border-black border-2"
            onChange={(event) => setPhoto(event.target.files[0])}
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
              {categories &&
                categories.length > 0 &&
                categories.map((singleCategory, index) => {
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
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
          <button
            className="bg-black text-md text-white px-4 py-4 md:w-full mt-4 md:mt-0 text-sm"
            onClick={() => handleUpdatePost(event)}
          >
            Update
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
