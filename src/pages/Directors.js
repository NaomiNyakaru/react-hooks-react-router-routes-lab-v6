// pages/Directors.js
import { useEffect, useState } from "react";
import NavBar from '../components/NavBar'; // Import NavBar component

function Directors() {
  const [directors, setDirectors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the list of directors from an API or use static data
    fetch('http://localhost:4000/directors') // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => {
        setDirectors(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching directors:', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <h1>Directors Page</h1>
        {directors.length > 0 ? (
          directors.map(director => (
            <article key={director.id}>
              <h2>{director.name}</h2>
              <ul>
                {director.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))}
              </ul>
            </article>
          ))
        ) : (
          <p>No directors available.</p>
        )}
      </main>
    </>
  );
}

export default Directors;
