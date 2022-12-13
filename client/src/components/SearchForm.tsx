import { useState } from "react";
import { Button, ButtonGroup, Col, Form, Row } from "react-bootstrap";

interface SearchFormProps {
  handleSearch: (searchTerm: string, searchType: string) => void;
}

interface SearchType {
  label: string;
  type: string;
}

const SearchForm = ({ handleSearch }: SearchFormProps): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const [searchType, setSearchType] = useState<string>("Artist");

  const searchTypes: SearchType[] = [
    { label: "Artist", type: "artist" },
    { label: "Album", type: "album" },
    { label: "Song", type: "track" },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    handleSearch(search, searchType.toLowerCase());
    setSearch("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Col md="auto">
          <ButtonGroup>
            {searchTypes.map<JSX.Element>(({ label, type }) => (
              <Button
                key={type}
                name={type}
                variant={type === searchType ? "primary" : "outline-primary"}
                onClick={(e) => setSearchType(e.currentTarget.name)}
              >
                {label}
              </Button>
            ))}
          </ButtonGroup>
        </Col>
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Search by song, album, or artist"
            onChange={handleChange}
            value={search}
          />
        </Col>
        <Col>
          <Button type="submit">Search</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchForm;
