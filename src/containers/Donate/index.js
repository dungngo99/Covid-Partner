import React, {useState, useEffect} from 'react';
import {ThemeConsumer} from 'styled-components';
import {
  Container,
  Nav,
  NavItem,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  CardImg,
  Button
} from 'shards-react';
import firebase from 'firebase/app';

const _chunk = require('lodash.chunk');

const ItemRequest = ({item}) => {
  return (
    <Card>
      <CardBody>
        <CardTitle style={{'display': 'flex', 'justifyContent': 'space-between'}}>
          <span>
            {item.user.firstName} {item.user.lastName[0]}.
          </span>
          <Button outline>
            Contact
          </Button>
        </CardTitle>
        {item.title}
      </CardBody>
      {item.image && <CardImg bottom src={item.image} style={{'maxHeight': '20vh', 'objectFit': 'cover'}} />}
    </Card>
  );
};

const Donate = () => {

  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState([]);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const unsubscribe  = firebase.firestore().collection('Donate_post_id').onSnapshot((snapshot) => {
      const req = [];
      snapshot.forEach((doc) => {
        let _doc = {...doc.data()}
        doc.data().userRef.get().then((res) => {
          _doc.user = res.data()
          req.push(_doc);
        })
        console.log(_doc);
      });
      setLoading(false);
      setRequests(req);
    });

    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <Container fluid>
      <ThemeConsumer>
        {
          theme => (
            <Nav fill>
              <NavItem
                onClick={() => setActive(false)}
                style={{
                  'fontSize': '30px',
                  'fontWeight': !active ? 'bold' : '',
                  'color': !active ? theme.darkblue : ''
                }}
              >
                Inactive
              </NavItem>
              <NavItem
                onClick={() => setActive(true)}
                style={{
                  'fontSize': '30px',
                  'fontWeight': active ? 'bold' : '',
                  'color': active ? theme.darkblue : ''
                }}
              >
                Active
              </NavItem>
            </Nav>
          )
        }
      </ThemeConsumer>
      <Container>
        {
          !loading &&
          _chunk(requests.filter((val) => val.active === active), 3).map((row, i) => {
            return (
              <Row key={i} style={{'margin': '20px 0'}}>
                {
                  row.map((col, j) => (
                    <Col md={4} key={j}><ItemRequest item={col} /></Col>
                  ))
                }
              </Row>
            )
          })
        }
        {
          loading &&
          <div>Loading...</div>
        }
      </Container>
    </Container>
  )
};

export default Donate;