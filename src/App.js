import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./component/card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleBlog from "./pages/SingleBlog";
import Dashboard from "./pages/admin/Dashboard";
import Home from "./pages/admin/home";
import Create from "./pages/admin/Create";


function App() {
  const [data, setdata] = useState([]);

  const fetchBlog = async () => {
    const res = await axios.get(
      "https://65cdc8f7c715428e8b3f0e1e.mockapi.io/blog"
    );
    setdata(res.data);
  };

  useEffect(() => {
    fetchBlog();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                }}
              >
                {data.map((row) => {
                  return <Card key={row.id} row={row} />;
                })}
              </div>
            }
          />
          <Route path="/:id" element={<SingleBlog />} />

          <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="" element={<Home/>}/>
          <Route path="create" element={<Create/>}/>
          </Route>            
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
