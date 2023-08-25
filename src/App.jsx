import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { Nav } from "./components/Navbar/NavbarComp";
import { Articles } from "./components/Articles/Articles";
import { Blogs } from "./components/Blogs/Blogs";
import { Blog } from "./components/Blog/Blog";
import { Reports } from "./components/Reports/Reports";
import { useEffect, useState } from "react";
function App() {
  const location = useLocation();
  const { pathname } = location;

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [pathname]);
  const fetchData = async () => {
    const url = `https://api.spaceflightnewsapi.net/v4${pathname}`;
    const resp = await fetch(url);
    const result = await resp.json();
    setData(result.results);
  };
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/articles" element={<Articles data={data} />} />
        <Route path="/blogs" element={<Blogs data={data} />} />
        <Route path="/blogs/:id" element={<Blog data={data} />} />
        <Route path="/reports" element={<Reports data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
