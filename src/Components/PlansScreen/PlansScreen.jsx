import React, { useEffect, useState } from "react";
import "./PlansScreen.css";
import Plans from "./Plans";

const PlansScreen = () => {
  const [subscrition, setSubscrition] = useState(null);

  useEffect(() => {
    const mode = window.localStorage.getItem("id");
    setSubscrition(mode);
  }, []);

  const ChangeCurrentPlan = (id) => {
    setSubscrition(id);
    window.localStorage.setItem("id", id);
  };

  return (
    <div className="plansScreen">
      {Plans.map((plan) => {
        return (
          <div
            className={`plansScreen__plan ${
              subscrition == plan.id && "CurrentPlan"
            }`}
            key={plan.id}
          >
            <div className="plansScreen___info">
              <h4>{plan.Name}</h4>
              <h5>{plan.quality}</h5>
            </div>
            <button
              onClick={() => {
                ChangeCurrentPlan(plan.id);
              }}
            >
              {subscrition === plan.id ? "Current plan" : "Suscribe"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PlansScreen;
