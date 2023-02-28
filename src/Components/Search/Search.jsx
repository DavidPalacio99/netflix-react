import React, { useState, useEffect, useRef } from "react";
import "./searchStyles.css";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import Loading from "../../Components/loading/Loading";
import Modal from "../../pages/Modal/Modal";
import axios from "../../services/axios";
import { peticiones } from "../../services/requests";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [closeModal, setCloseModal] = useState(true);
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  const { keyword } = useParams();
  const refContainer = useRef(null);

  const petciones = peticiones(page, keyword);
  const fetchUrl = petciones.searchMovies;

  const isLargeRow = true;

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const modal = (id) => {
    setCloseModal(false);
    const peli = movies.filter((movie) => {
      return movie.id === id;
    });
    setMovie(...peli);
  };

  return (
    <div className="search">
      <Navbar />
      <Banner />
      <div className="row">
        <h2>{`Results for "${keyword}"`}</h2>
        <Modal
          setCloseModal={setCloseModal}
          closeModal={closeModal}
          movie={movie}
        />
        {loading && <Loading />}
        {movies.length === 0 ? (
          <div className="noResults">
            <h4>No search results for "{keyword}"</h4>
          </div>
        ) : (
          <div className={`isCategory`} ref={refContainer}>
            {movies.map((movie) => {
              return (
                ((isLargeRow && movie.poster_path) ||
                  (!isLargeRow && movie.backdrop_path)) && (
                  <img
                    className={`row__poster ${
                      isLargeRow && "row__posterLarge"
                    }`}
                    key={
                      movies.filter((movies) => {
                        return movies.id === movie.id;
                      }).length === 1
                        ? movie.id
                        : Math.random()
                    }
                    src={`${base_url}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt={movie.name}
                    onClick={() => {
                      modal(movie.id);
                    }}
                  />
                )
              );
            })}
          </div>
        )}
        {movies.length === 0 && (
          <button
            className="homeButton"
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/");
            }}
          >
            Go to home
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
