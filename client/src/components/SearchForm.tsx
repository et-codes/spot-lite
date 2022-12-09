import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const SearchForm = (): JSX.Element => {
  const [search, setSearch] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    console.log(`Search for ${search}.`);
    setSearch("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="mb-1">
          <Form.Control
            type="text"
            placeholder="Search for song, album, or artist"
            onChange={handleChange}
            value={search}
          />
        </Col>
        <Col md="auto">
          <Button type="submit">Search</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchForm;