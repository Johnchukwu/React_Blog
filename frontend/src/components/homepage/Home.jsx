import { useState, useEffect } from "react";
import PostCard from "../post/PostCard";
import "./Home.css";
import {useNavigate } from "react-router-dom";

const Home = () => {
  const [postData, setPostData] = useState([]);

  //create instance of use navigate
  const navigate = useNavigate();

  // handle fetch post from server
  const fetchPost = async () => {
    try {
      const response = await fetch("http://localhost:4400/api/posts");
      const data = await response.json();

      // update local state
      setPostData(data);
    } catch (error) {
      console.log("Error fetching", error.message);
    }
  };

  // call fetch function
  useEffect(() => {
    fetchPost();
  }, []);

  //handle single post
  const handleSinglePost = (e) => {
    const id = e.target.id;

    //navigate to single post page
    navigate(`/posts/${id}`);
  }

 


  return (
    <div>
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src="https://media.licdn.com/dms/image/C4D0BAQGQiRGb69VRqA/company-logo_200_200/0/1630544506185/go_my_code_logo?e=2147483647&v=beta&t=jdTiNpCmVLhWOIfF2qpSj3DNbWqo27547xFn600BpsA"
          alt=""
          width="72"
          height="57"
        />
        <h1 className="display-5 fw-bold text-body-emphasis">
          Welcome to DevBlogs
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Goto Post
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Add Post
            </button>
          </div>
        </div>
      </div>

      {/* render post list here */}
      <div className="container-m">
        {postData.map((post) => (
          <PostCard postObj={post}  key={post._id} func={(e) => {handleSinglePost(e)}}/>
          
         
        ))}
      </div>
    </div>
  );
};

export default Home;
