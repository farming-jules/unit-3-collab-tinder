import React from "react";
import { Link } from "react-router-dom";
import { Card, Carousel, Button, ButtonGroup, Badge } from "react-bootstrap";

class ViewCard extends React.Component {

  render = () => {

    return (
      <Card style={{ width: '24rem' }}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/200x250.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/200x250.png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/200x250.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <Card.Body>
          <div className="text-left mb-3">
            <Card.Title className="mb-0"><b>FIRSTNAME</b> age </Card.Title>
            <hr></hr>
            <Card.Text>
              Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Maxime, nemo debitis. Veniam ullam error reprehenderit tenetur.
            </Card.Text>
            <hr></hr>
            <div>
              <Badge pill variant="success">Passion</Badge>{' '}
              <Badge pill variant="danger">Passion</Badge>{' '}
              <Badge pill variant="warning">Passion</Badge>{' '}
            </div>
            <hr></hr>
          </div>
          <ButtonGroup>
            <Button variant="outline-danger" className="btn-lg mr-3 text-center" style={{'border-radius': 50 + '%'}}>❌</Button>
            <Button variant="outline-success" className="btn-lg ml-3 text-center" style={{'border-radius': 50 + '%'}}>💚</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    );
  };
}

export default ViewCard;
