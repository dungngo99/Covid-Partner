import React from 'react';
import {
  Container,
  Nav,
  NavItem,
  FormCheckbox,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  CardImg,
  CardFooter,
  Button
} from 'shards-react';

const _chunk = require('lodash.chunk');

const Donate = () => {

  const filterNames = {

  };

  const ItemRequest = ({item}) => {
    return (
      <Card>
        <CardBody>
          <CardTitle>
            {item.user.firstName} {item.user.lastName[0]}.
            <Button outline>
              Contact
            </Button>
          </CardTitle>
          {item.title}
        </CardBody>
        {item.image && <CardImg bottom src={item.image} style={{'maxHeight': '20vh', 'objectFit': 'cover'}} />}
        <CardFooter>
          
        </CardFooter>
      </Card>
    );
  };

  const requests = [
    {
      user: {
        firstName: "Bob",
        lastName: "Ross"
      },
      title: "Paint",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Multicolored_tempera_paints.jpg"
    }, {
      user: {
        firstName: "Gordon",
        lastName: "Ramsay"
      },
      title: "Lamb Sauce",
      image: "https://assets.marthastewart.com/styles/wmax-300/d21/a99872_0303_lambgravy/a99872_0303_lambgravy_vert.jpg"
    }, {
      user: {
        firstName: "Sam",
        lastName: "Smith"
      },
      title: "Masks x25",

    }
  ];

  return (
    <Container fluid>
      <Nav fill>
        <NavItem>
          Inactive
        </NavItem>
        <NavItem>
          Active
        </NavItem>
      </Nav>
      <Nav fill>
        <NavItem>
          <FormCheckbox inline></FormCheckbox>
        </NavItem>
        <NavItem>
          <FormCheckbox inline></FormCheckbox>
        </NavItem>
        <NavItem>
          <FormCheckbox inline></FormCheckbox>
        </NavItem>
      </Nav>
      <Container>
        {
          _chunk(requests, 5).map((row) => {
            return (
              <Row>
                {
                  row.map((col) => (
                    <Col><ItemRequest item={col} /></Col>
                  ))
                }
              </Row>
            )
          })
        }
      </Container>
    </Container>
  )
};

export default Donate;