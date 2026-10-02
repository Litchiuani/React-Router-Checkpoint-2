import { useState, useMemo } from "react";
import MovieList from "./MovieList";
import Filtre from "./Filtre";
import AddMovieForm from "./AddMovieForm";

function Home({ movies, onAddMovie }) {
  const [titreFiltre, setTitreFiltre] = useState("");
  const [noteFiltre, setNoteFiltre] = useState("");

  // Recalculé uniquement quand movies, titreFiltre ou noteFiltre changent
  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const correspondAuTitre = movie.titre
        .toLowerCase()
        .includes(titreFiltre.toLowerCase());

      const correspondALaNote =
        noteFiltre === "" || movie.note >= Number(noteFiltre);

      return correspondAuTitre && correspondALaNote;
    });
  }, [movies, titreFiltre, noteFiltre]);

  return (
    <>
      <AddMovieForm onAddMovie={onAddMovie} />

      <Filtre
        titre={titreFiltre}
        note={noteFiltre}
        onTitreChange={setTitreFiltre}
        onNoteChange={setNoteFiltre}
      />

      <MovieList movies={filteredMovies} />
    </>
  );
}

export default Home;
