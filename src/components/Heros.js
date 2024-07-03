import React from "react";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const Heros = ({onClick}) => {
  const {
    data: heroes,
    pending,
    error,
  } = useFetch("http://localhost:8000/heros");

  return (
    <div>
      {pending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {heroes && (
        <article>
          {heroes.map((hero) => (
            <div className="heros-cards">
              <div key={hero.id} className="card-inner">
                <div className="card-front">
                  <div className="heros-img">
                    <img
                      src={require(`../assets/${hero.name.toLowerCase()}.jpg`)}
                      alt={hero.name}
                      height={150}
                    />
                  </div>
                </div>
                <div className="card-back">
                  <h2>{hero.name}</h2>
                  <p>{hero.powers}</p>
                  {/* <button onClick={onClick}>Edit</button> */}
                  <Link to={`/heros/${hero.id}`}>Edit Details</Link>
                </div>
              </div>
            </div>
          ))}
        </article>
      )}
    </div>
  );
};

export default Heros;
