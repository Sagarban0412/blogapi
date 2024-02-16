import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleBlog = () => {
  const [data, setdata] = useState({});
  const { id } = useParams();
  const [load, setload] = useState(true);
  const fetchBlog = async () => {
    const res = await axios.get(
      `https://65cdc8f7c715428e8b3f0e1e.mockapi.io/blog/${id}`
    );
    setdata(res.data);
    setload(false);
  };

  useEffect(() => {
    fetchBlog();
  }, []);
  return (
    <>
      {load ? (
       <div><img src={'https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif'}/></div>
      ) : (
        <div>
          <h1 className="text-red-500">{data.id}</h1>
          <img src={data.avatar} style={{ width: "200px", height: "200px" }} />

          <h3>{data.name}</h3>
          <p>{data.desc}...</p>
        </div>
      )}
    </>
  );
};

export default SingleBlog;
