import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import initialMovies from "./movies";
import Home from "./Home";
import MovieDetail from "./MovieDetail";

function App() {
  const [movies, setMovies] = useState(initialMovies);

  const handleAddMovie = (movie) => {
    setMovies((prevMovies) => [...prevMovies, movie]);
  };

  return (
    <BrowserRouter>
      <Container className="py-4">
        <h1 className="mb-4 text-center">Mon Cinéma</h1>

        <Routes>
          <Route path="/" element={<Home movies={movies} onAddMovie={handleAddMovie} />} />
          <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
