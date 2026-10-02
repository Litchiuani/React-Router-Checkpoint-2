import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  if (movies.length === 0) {
    return <p className="text-muted">Aucun film ne correspond à ce filtre.</p>;
  }

  return (
    <div className="d-flex flex-wrap">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          titre={movie.titre}
          description={movie.description}
          posterURL={movie.posterURL}
          note={movie.note}
        />
      ))}
    </div>
  );
}

export default MovieList;
