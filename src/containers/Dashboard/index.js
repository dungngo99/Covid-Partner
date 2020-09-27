import React from 'react';
import styled from 'styled-components';
import * as routes from '../constants';
import {
  Container,
  Row,
  Col,
  FormCheckbox,
  Card,
  CardTitle,
  CardBody,
  CardImg,
  ListGroup,
  ListGroupItem,
  Button
} from 'shards-react'

const DashSection = styled.div`
  border: 3px solid ${props => props.theme.brick};
  border-radius: 5px;
  background: ${props => props.theme.peach};
  padding: 30px;
  h2 {
    font-size: 35px;
  }
  .dash-body {
    padding: 20px 0;
  }
`;

const DashLink = styled.a`
  color: ${props => props.theme.darkblue};
  font-size: 20px;
  font-weight: bold;
  :hover {
    color: ${props => props.theme.darkblue};
    text-decoration: none;
  }
`;

const DiscussionUpdates = () => {

  const Update = ({update}) => {
    return (
      <ListGroupItem>
        <span style={{'fontWeight': 'bold'}}>
          {`${update.user.firstName} ${update.user.lastName}: `}
        </span>
        <span>
          {update.discussionTitle}
        </span>
      </ListGroupItem>
    );
  }

  const updates = [
    {
      user: {
        firstName: "Bob",
        lastName: "Ross"
      },
      discussionTitle: "Let's Paint Together!"
    }, {
      user: {
        firstName: "Duncan",
        lastName: "Williams"
      },
      discussionTitle: "Anybody down for Among Us @ 4?"
    }, {
      user: {
        firstName: "Patricia",
        lastName: "Parker"
      },
      discussionTitle: "Who here has Germix?"
    }
  ];

  return (
    <DashSection>
      <h2>While you were gone...</h2>
      <div className='dash-body'>
      <ListGroup>
        {
          updates.map((update, index) => (
            <Update update={update} key={index} />
          ))
        }
      </ListGroup>
      </div>
      <DashLink href={routes.DISCUSSION}>
        View all discussions
      </DashLink>
    </DashSection>
  )
}

const CovidTips = () => {

  const tips = [
    'Wash your hands frequently',
    'Wear a mask',
    'Maintain 6ft social distancing'
  ];

  return (
    <DashSection>
      <h2>Some things to keep in mind!</h2>
      <div className='dash-body'>
        {
          tips.map((tip, index) => (
            <FormCheckbox checked={true} key={index}>
              {tip}
            </FormCheckbox>
          ))
        }
      </div>
      <DashLink href={routes.TIPS}>
        View More Tips
      </DashLink>
    </DashSection>
  )
}

const DonationRequests = () => {

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
    <DashSection>
      <h2>Help a neighbor out!</h2>
      <Container style={{'overflowX': 'auto'}}>
        <Row>
          {
            requests.map((request, index) => (
              <Col style={{'width': '40vh'}} key={index}>
                <Card small style={{'height': '40vh'}}>
                  <CardBody>
                    <CardTitle>
                      {request.user.firstName} {request.user.lastName[0]}.
                      <Button outline>
                        Contact
                      </Button>
                    </CardTitle>
                    {request.title}
                  </CardBody>
                  {request.image && <CardImg bottom src={request.image} style={{'maxHeight': '25vh', 'objectFit': 'cover'}} />}
                </Card>
              </Col>
            ))
          }
          <Card small>
            <CardBody>
              <CardTitle>
                View All
              </CardTitle>
            </CardBody>
          </Card>
        </Row>
      </Container>
    </DashSection>
  )
}

const Dashboard = () => {
  return (
    <Container fluid>
      <h1>Welcome back!</h1>
      <Row style={{'padding': '15px 0'}}>
        <Col md={7}>
          <DiscussionUpdates />
        </Col>
        <Col md={5}>
          <CovidTips />
        </Col>
      </Row>
      <Row style={{'padding': '15px 0'}}>
        <Col>
          <DonationRequests />
        </Col>
      </Row>
    </Container>
  )
};

export default Dashboard;