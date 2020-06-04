import React from "react";

import {
    Button,
    Container,
    Row,
    Col,
    Card,
  } from "react-bootstrap";
  
  
  let books = {
    fantasy: require("../data/fantasy.json"),
    horror: require("../data/horror.json"),
    history: require("../data/history.json"),
    romance: require("../data/romance.json"),
    scifi: require("../data/scifi.json"),
  };

  let book_list = ['fantasy', 'horror', 'history', 'romance', 'scifi'];
  
  class BookList extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        books: books.fantasy.slice(0, 1),
        
      };
    }
  
   
  
    
  
    render() {
      return (
        <div>
          <Container className='justify-content-center' >
          <DropdownButton
              as={InputGroup.Prepend}
              id="dropdown-basic-button"
              className="mb-3"
              title={this.state.categorySelected}
            >
              {book_list.map((category, index) => {
                return (
                  <Dropdown.Item
                    href="#/action-1"
                    key={`dropdown-category-${index}`}
                    onClick={() => this.handleDropdownChange(category)}
                  >
                    {category}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
            <Row className='justify-content-center'>
              {this.state.books ? (
                this.state.books.map((book) => {
                  return (
                    <Col xs={6} key={book.asin}>
                      <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={book.img} />
                        <Card.Body>
                          <Card.Title>{book.title}</Card.Title>
                         
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })
              ) : (
                <div> nothing here </div>
              )}
            </Row>
          </Container>
        </div>
      );
    }
  }
  
  export default BookList;