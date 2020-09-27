import React from 'react'
import styled from 'styled-components';
import * as routes from '../constants';
import {
  Container,
  FormInput,
  FormTextarea
} from 'shards-react';

const DiscussionPost = styled.div`
  border: 3px solid ${props => props.theme.brick};
  border-radius: 5px;
  background: ${props => props.theme.peach};
  padding: 30px;
  h2 {
    font-size: 35px;
  }
`;

const Discussion = () => {

  const MyPost = () => {
    return (
      <DiscussionPost>
        <FormInput></FormInput>
        <FormTextarea></FormTextarea>
      </DiscussionPost>
    );
  };

  const Post = ({post}) => {
    return (
      <DiscussionPost>
        
      </DiscussionPost>
    )
  }

  return (
    <Container>
      <h1>This is our discussion group</h1>
      <MyPost></MyPost>
      <Post></Post>
    </Container>
  )
}




export default Discussion;
