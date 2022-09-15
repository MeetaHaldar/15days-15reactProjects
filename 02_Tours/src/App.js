import React, { useState, useEffect } from "react";
import Loadings from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [Loading, setLoading] = useState(true);
  const [ToursState, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = ToursState.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setLoading(false);
      setTours(result);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (Loading) {
    return <Loadings />;
  }
  if (ToursState.length === 0) {
    return (
      <main className="title">
        <h2>No Tours left</h2>
        <div className="underline"></div>
        <button className="btn" onClick={fetchTours}>
          Load Tours
        </button>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={ToursState} removeTour={removeTour} />
    </main>
  );
}

export default App;
