import React from "react";
import "./App.css";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import { Routes, Route } from "react-router-dom";
import ProfileScreen from "./pages/ProfileScreen/ProfileScreen";
import Categories from "./pages/Categories/Categories";
import Footer from "./Components/Footer/Footer";
import Search from "./Components/Search/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/profile" element={<ProfileScreen />} />
        <Route exact path="/" element={<HomeScreen />} />
        <Route
          exact
          path="/categories/originals"
          element={
            <Categories
              category={"fetchNetflixOriginals"}
              title={"Netflix originals"}
            />
          }
        />
        <Route
          exact
          path="/categories/top_rated"
          element={
            <Categories category={"fetchTopRated"} title={"Top rated"} />
          }
        />
        <Route
          exact
          path="/categories/trending"
          element={<Categories category={"fetchTrending"} title={"Trending"} />}
        />
        <Route
          exact
          path="/categories/horror"
          element={
            <Categories
              category={"fetchHorrorMovies"}
              title={"Horror movies"}
            />
          }
        />
        <Route path="/search/:keyword" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
