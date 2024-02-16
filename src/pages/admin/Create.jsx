import axios from "axios";
import React from "react";

const Create = () => {
  const createBlog = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    let formData = {
      name: data.get("name"),
      avatar: data.get("avatar"),
      desc: data.get("desc"),
    };
    let res = await axios.post(
      "https://65cdc8f7c715428e8b3f0e1e.mockapi.io/blog",
      formData
    );
    if (res.status === 201) {  //http status code
      alert("created blog successfully");
    }
  };
  return (
    <div style={{color:'black'}}>
      <p style={{ color: "red" }}>Create Blog</p>
      <form onSubmit={createBlog} style={{
        display:'flex',
        flexDirection:'column',
        gap:'20px'
      }}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="avatar" placeholder="avatar" />
        <input type="text" name="desc" placeholder="desc" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Create;