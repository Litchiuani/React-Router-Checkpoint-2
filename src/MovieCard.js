import { Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieCard({ id, titre, description, posterURL, note }) {
  return (
    <Link to={`/movie/${id}`} className="text-decoration-none text-reset">
      <Card style={{ width: "16rem", cursor: "pointer" }} className="shadow-sm m-2 h-100">
        <Card.Img
          variant="top"
          src={posterURL}
          alt={titre}
          style={{ height: "260px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-start">
            <span>{titre}</span>
            <Badge bg="warning" text="dark">
              {note}
            </Badge>
          </Card.Title>
          <Card.Text className="text-muted" style={{ fontSize: "0.9rem" }}>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default MovieCard;
