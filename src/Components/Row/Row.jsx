import React, { useEffect, useState, useRef } from "react";
import "./Row.css";
import axios from "../../services/axios";
import flechaIz from "../../assets/izquierda.png";
import flechaDer from "../../assets/derecha.png";
import Modal from "../../pages/Modal/Modal";

const Row = ({
  title,
  fetchUrl,
  isCategory,
  isLargeRow = false,
  page,
  reset,
  setLoading,
}) => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const refContainer = useRef(null);
  const [closeModal, setCloseModal] = useState(true);
  const [isMovile, setIsMovile] = useState(window.innerWidth);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMovile(window.innerWidth);
    });
  });

  useEffect(() => {
    setMovies([]);

    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [reset]);

  useEffect(() => {
    if (page === 1 || !isCategory) return;

    setLoading(true);
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies((prev) => [...prev, ...request.data.results]);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      return request;
    }
    fetchData();
  }, [page]);

  const modal = (id) => {
    setCloseModal(false);
    const peli = movies.filter((movie) => {
      return movie.id === id;
    });
    setMovie(...peli);
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <Modal
        setCloseModal={setCloseModal}
        closeModal={closeModal}
        movie={movie}
      />
      <div
        className={`${isCategory ? "isCategory" : "row__posters"}`}
        ref={refContainer}
      >
        <img
          src={flechaIz}
          className={`controlPrev izq ${isCategory && "category"} ${
            isMovile < 1000 && "movile"
          }`}
          alt=""
          onClick={() => {
            refContainer.current.scrollLeft -= 300;
          }}
        />
        {movies.map((movie) => {
          return (
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
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
        <img
          src={flechaDer}
          className={`controlPrev der ${isCategory && "category"} ${
            isMovile < 1000 && "movile"
          }`}
          alt=""
          onClick={() => {
            refContainer.current.scrollLeft += 300;
          }}
        />
      </div>
    </div>
  );
};

export default Row;
