import React, { useEffect, useRef, useState } from "react";
import "./Categories.css";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import Row from "../../Components/Row/Row";
import Loading from "../../Components/loading/Loading";
import { peticiones } from "../../services/requests";

const Categories = ({ category, title }) => {
  const [reset, setReset] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("");

  const petciones = peticiones(page);
  const fetchUrl = petciones[category];

  const interceptorRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entries], observer) => {
        const { isIntersecting } = entries;

        if (isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1.0, root: null }
    );

    observer.observe(interceptorRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const loadingOff = () => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  };

  loadingOff();

  return (
    <div className="categories" id="categories">
      <Navbar
        setReset={setReset}
        setLoading={setLoading}
        setKeyword={setKeyword}
      />
      <Banner />
      <Row
        setPage={setPage}
        title={title}
        fetchUrl={fetchUrl}
        isLargeRow
        isCategory
        page={page}
        reset={reset}
        setLoading={setLoading}
      />
      {loading && <Loading />}

      <div className={"interceptor"} ref={interceptorRef}></div>
    </div>
  );
};

export default Categories;
