import React, { useEffect, useState, useRef } from "react";
import "./Nav.css";
import netflix from "../../assets/netflix.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

const Navbar = ({ profile, setReset, isHomeScreen, setLoading }) => {
  if (!isHomeScreen) {
  }
  const [show, handleShow] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);
  const referencia = useRef();
  const inputRef = useRef();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
      setShowOptions(false);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  });

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      return window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate(`/search/${e.target[0].value}`);
    inputRef.current.value = "";
  };

  return (
    <div className={`nav ${show && "nav__black"} `} ref={referencia}>
      <div className="nav__contents">
        <img
          src={netflix}
          alt=""
          className="nav__logo"
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
        />
        <div
          className={`nav__Categories ${show && "nav__Cat"} ${
            width < 720 && "form3"
          }`}
        >
          <h3
            onClick={() => {
              window.scrollTo(0, 0);
              if (!isHomeScreen) {
                setReset((prev) => !prev);
                setLoading(true);
              }
            }}
          >
            <Link className="links" to={"/categories/originals"}>
              Originals
            </Link>
          </h3>
          <h3
            onClick={() => {
              window.scrollTo(0, 0);
              if (!isHomeScreen) {
                setReset((prev) => !prev);
                setLoading(true);
              }
            }}
          >
            <Link className="links" to={"/categories/trending"}>
              Trending
            </Link>
          </h3>
          <h3
            onClick={() => {
              window.scrollTo(0, 0);
              if (!isHomeScreen) {
                setReset((prev) => !prev);
                setLoading(true);
              }
            }}
          >
            <Link className="links" to={"/categories/top_rated"}>
              top rated
            </Link>
          </h3>
          <h3
            onClick={() => {
              window.scrollTo(0, 0);
              if (!isHomeScreen) {
                setReset((prev) => !prev);
                setLoading(true);
              }
            }}
          >
            <Link className="links" to={"/categories/horror"}>
              Horror movies
            </Link>
          </h3>
        </div>
        <div className={`form ${!show && "form2"} ${width < 1000 && "form3"}`}>
          <form onSubmit={submitForm}>
            <input
              className="input"
              type={"text"}
              placeholder={"Search a movie"}
              ref={inputRef}
            />
          </form>
        </div>
        <img
          onClick={() => {
            window.scrollTo(0, 0);
            profile ? navigate("/") : navigate("/profile");
          }}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
        {width < 720 && show && (
          <BiMenu
            size="40px"
            color="white"
            className="icon"
            onClick={() => {
              setShowOptions((prev) => !prev);
            }}
          />
        )}
      </div>
      {showOptions && show && (
        <div className="options">
          <h2>Categories</h2>
          <h3
            onClick={() => {
              window.scrollTo(0, 0);
              if (!isHomeScreen) {
                setReset((prev) => !prev);
                setLoading(true);
              }
            }}
          >
            <Link className="links" to={"/categories/originals"}>
              Originals
            </Link>
          </h3>
          <h3
            onClick={() => {
              window.scrollTo(0, 0);
              if (!isHomeScreen) {
                setReset((prev) => !prev);
                setLoading(true);
              }
            }}
          >
            <Link className="links" to={"/categories/trending"}>
              Trending
            </Link>
          </h3>
          <h3
            onClick={() => {
              window.scrollTo(0, 0);
              if (!isHomeScreen) {
                setReset((prev) => !prev);
                setLoading(true);
              }
            }}
          >
            <Link className="links" to={"/categories/top_rated"}>
              top rated
            </Link>
          </h3>
          <h3
            onClick={() => {
              window.scrollTo(0, 0);
              if (!isHomeScreen) {
                setReset((prev) => !prev);
                setLoading(true);
              }
            }}
          >
            <Link className="links" to={"/categories/horror"}>
              Horror movies
            </Link>
          </h3>
        </div>
      )}
    </div>
  );
};

export default Navbar;
