import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container>
      <h1>Spot-Lite</h1>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="info">Info</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
    </Container>
  );
}

export default App;
