import React from 'react';
import styled from 'styled-components';
import * as routes from '../constants';
import {
  Container,
  Row,
  Col,
  FormCheckbox,
  Card,
  CardImg
} from 'shards-react'

const DashSection = styled.div`
  border: 3px solid ${props => props.theme.brick};
  border-radius: 5px;
  background: ${props => props.theme.peach};
  padding: 30px;
  h2 {
    font-size: 35px;
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
  return (
    <DashSection>
      <h2>While you were gone...</h2>
      
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
      {
        tips.map((tip) => (
          <FormCheckbox checked={true}>
            {tip}
          </FormCheckbox>
        ))
      }
      <DashLink href={routes.TIPS}>
        View More Tips
      </DashLink>
    </DashSection>
  )
}

const DonationRequests = () => {

  const requests = [
    {},
  ]

  return (
    <DashSection>
      <h2>Help a neighbor out!</h2>
      <div>
        <Card>
             
        </Card>
      </div>
    </DashSection>
  )
}

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={7}>
          <DiscussionUpdates />
        </Col>
        <Col md={5}>
          <CovidTips />
        </Col>
      </Row>
      <Row>
        <Col>
          <DonationRequests />
        </Col>
      </Row>
    </Container>
  )
};

export default Dashboard;