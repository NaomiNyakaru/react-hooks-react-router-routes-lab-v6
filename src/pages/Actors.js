import { useEffect, useState } from "react";

function Actors() {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the list of actors from an API or use static data
    fetch('http://localhost:4000/actors') // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => {
        setActors(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching actors:', error);
        setLoading(false);
      });
  }, []);



  return (
    <>
      <header>
        <h1>Actors Page</h1>
      </header>
      <main>
        {actors.length > 0 ? (
          actors.map(actor => (
            <article key={actor.id}>
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))}
              </ul>
            </article>
          ))
        ) : (
          <p>No actors available.</p>
        )}
      </main>
    </>
  );
}

export default Actors;
