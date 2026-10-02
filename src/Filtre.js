import { Form, Row, Col } from "react-bootstrap";

// Composant de filtrage : reçoit les valeurs courantes (titre, note)
// et remonte les changements au parent via onTitreChange / onNoteChange.
function Filtre({ titre, note, onTitreChange, onNoteChange }) {
  return (
    <Form className="mb-4">
      <Row>
        <Col md={6}>
          <Form.Group controlId="filtreTitre">
            <Form.Label>Filtrer par titre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex : Inception"
              value={titre}
              onChange={(e) => onTitreChange(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="filtreNote">
            <Form.Label>Note minimale</Form.Label>
            <Form.Control
              type="number"
              step="0.1"
              min="0"
              max="10"
              placeholder="Ex : 8"
              value={note}
              onChange={(e) => onNoteChange(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}

export default Filtre;
