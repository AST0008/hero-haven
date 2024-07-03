import React, { useState } from "react";
import img from "../assets/ironman.jpg"
import useFetch from "./useFetch";
 

const Dashboard = () => {
  const {
    data: heroesData,
    pending,
    error,
  } = useFetch("http://localhost:8000/heros");

  if (pending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const heroes = heroesData || [];

  return (
    <div className="dashboard">
      <div className="cards">
        {heroes.slice(0, 4).map(hero => (
          <div className="card" key={hero.id}>
            <div className="hero-img">
              <img
                src={require(`../assets/${hero.name.toLowerCase()}.jpg`)}
                alt={hero.name}
                height={150}
              />
            </div>
            <h3>{hero.name}</h3>
            <p>Powers: <br />
              {hero.powers}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
