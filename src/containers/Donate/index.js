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
    }, 
    {
      user: {
        firstName: "Gordon",
        lastName: "Ramsay"
      },
      title: "Lamb Sauce",
      image: "https://assets.marthastewart.com/styles/wmax-300/d21/a99872_0303_lambgravy/a99872_0303_lambgravy_vert.jpg"
    }, 
    {
      user: {
        firstName: "Sam",
        lastName: "Smith"
      },
      title: "Masks x25",
      image: "https://cdn.discordapp.com/attachments/758010039729389642/759639137040072705/61j3WQQbHjL.png"
    }, 
    {
      user: {
        firstName: "David",
        lastName: "Ross"
      },
      title: "DUDE WHO'S FRIENDZONED ALWAYS",
      image: "https://www.humaverse.com/wp-content/uploads/2019/10/1229px-David_Schwimmer_Jul_2005_London_England_Cropblur1.jpg"
    },
     { 
      user: {
        firstName: 'Scrooge',
        lastName: 'McDuck'
      }, 
      title: "RICHEST DUCK IN THE ENTIRE CARTOON MUlTIVERSE",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Multicolored_tempera_paints.jpg"
    },
    {
      user: {
        firstName: 'Miley',
        lastName: 'Cyrus'
      },
      title: "Side by Side Comparison",
      image: "https://i.imgur.com/bHPTygz.jpg"
    },
    { 
      user: {
        firstName: 'Billy',
        lastName: 'Ray Cyrus'
      }, 
      title: "Ex-Country Pop star",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Multicolored_tempera_paints.jpg"
    },
    { 
      user: {
        firstName: 'Dolly',
        lastName: 'Parton'
      }, 
      title: "Middle aged celebrity ",
      image: "https://celebmafia.com/wp-content/uploads/2019/02/dolly-parton-2019-grammy-awards-2.jpg"
    },
    {
      user: {
        firstName: 'Leoluch',
        lastName: 'the_Rebellion'
      }, 
      title: "Smartass Dictator",
      image: "http://3.bp.blogspot.com/-yVe-wtSYqeE/Vcs131AlNBI/AAAAAAAAAYo/NJ__DYcuVzI/s1600/%255BCoalgirls%255D_Code_Geass_23_%25281280x720_Blu-ray_FLAC%2529_%255B51DD6992%255D.mkv_snapshot_21.43_%255B2015.06.29_17.20.43%255D.png"
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