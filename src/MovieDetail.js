import { useParams, Link } from "react-router-dom";
import { Button, Ratio } from "react-bootstrap";

function MovieDetail({ movies }) {
  const { id } = useParams();
  const movie = movies.find((m) => String(m.id) === id);

  if (!movie) {
    return (
      <div>
        <p>Film introuvable.</p>
        <Button as={Link} to="/" variant="secondary">
          Retour à l'accueil
        </Button>
      </div>
    );
  }

  const { titre, description, note, trailerURL } = movie;

  return (
    <div>
      <Button as={Link} to="/" variant="secondary" className="mb-3">
        Retour à l'accueil
      </Button>

      <h1>{titre}</h1>
      <p className="text-muted">Note : {note} / 10</p>
      <p>{description}</p>

      {trailerURL ? (
        <Ratio aspectRatio="16x9" style={{ maxWidth: "640px" }}>
          <iframe
            src={trailerURL}
            title={`Bande-annonce de ${titre}`}
            allowFullScreen
          />
        </Ratio>
      ) : (
        <p className="text-muted">Aucune bande-annonce disponible pour ce film.</p>
      )}
    </div>
  );
}

export default MovieDetail;
