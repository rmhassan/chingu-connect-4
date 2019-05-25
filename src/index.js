import "./style.scss";
import axios from "axios";

const getPosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(response);
  const posts = response.data;
  return posts;
};
getPosts();
