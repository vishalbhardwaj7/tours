import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import "./App.css";
const url = "https://course-api.com/react-tours-project";
export const UserContext = React.createContext();
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => id != tour.id);
    setTours(newTours);
  };
  const fetching = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTours(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetching();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length == 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button className="btn" onClick={fetching}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <UserContext.Provider value={removeTour}>
      {/*Used to send function to the Tour child of child */}
      <main>
        <Tours tours={tours} />
      </main>
    </UserContext.Provider>
  );
}

export default App;
