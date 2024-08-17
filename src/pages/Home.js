// pages/Home.js
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard"; // Ensure the correct path to MovieCard component

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from an API or use static data
    fetch('http://localhost:4000/movies') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <>
      <header>
        <h1>Home Page</h1>
      </header>
      <main>
        <div>
          {movies.length > 0 ? (
            movies.map(movie => (
              <MovieCard key={movie.id} id={movie.id} title={movie.title} />
            ))
          ) : (
            <p>Loading movies...</p>
          )}
        </div>
      </main>
    </>
  );
}

export default Home;


