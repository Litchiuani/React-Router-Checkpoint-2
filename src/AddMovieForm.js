import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function AddMovieForm({ onAddMovie }) {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [note, setNote] = useState("");
  const [trailerURL, setTrailerURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!titre.trim()) {
      return;
    }

    onAddMovie({
      id: Date.now(),
      titre: titre.trim(),
      description: description.trim(),
      posterURL: posterURL.trim() || "https://via.placeholder.com/342x260?text=Affiche+indisponible",
      note: note === "" ? 0 : Number(note),
      trailerURL: trailerURL.trim(),
    });

    setTitre("");
    setDescription("");
    setPosterURL("");
    setNote("");
    setTrailerURL("");
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4 p-3 border rounded">
      <h5 className="mb-3">Ajouter un film</h5>
      <Row className="g-2">
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Titre"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            required
          />
        </Col>
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="URL de l'affiche"
            value={posterURL}
            onChange={(e) => setPosterURL(e.target.value)}
          />
        </Col>
        <Col md={9}>
          <Form.Control
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Col>
        <Col md={3}>
          <Form.Control
            type="number"
            step="0.1"
            min="0"
            max="10"
            placeholder="Note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </Col>
        <Col md={12}>
          <Form.Control
            type="text"
            placeholder="URL de la bande-annonce (lien d'intégration YouTube)"
            value={trailerURL}
            onChange={(e) => setTrailerURL(e.target.value)}
          />
        </Col>
      </Row>
      <Button type="submit" className="mt-3">
        Ajouter
      </Button>
    </Form>
  );
}

export default AddMovieForm;
