import React from "react";
import "./ProfileScreen.css";
import Navbar from "../../Components/Navbar/Navbar";
import PlansScreen from "../../Components/PlansScreen/PlansScreen";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const ProfileScreen = () => {
  const navigate = useNavigate();
  const [hide, setHide] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setHide(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <div className="profileScreen">
      <Navbar profile />
      <div className="profileScreen__body">
        <h1>Edit profile</h1>
        <div className="profileScreen__info">
          <img
            className={`${hide < 725 && "hide"}`}
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{`davidalpalacio@gmail.com`}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <PlansScreen />
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="profileScreen__signOut"
              >
                Go home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
