import React, { useState } from 'react'
import styled, { ThemeConsumer } from 'styled-components';
import * as routes from '../constants';
import {
  Container,
  FormInput,
  FormTextarea,
  Button,
  Collapse,
  InputGroup,
  InputGroupAddon,
  Row,
  Col
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

const MyPost = () => {

  const [tags, setTags] = useState(['tag', 'tag']);

  return (
    <DiscussionPost style={{'margin': '40px 0'}}>
      <FormInput
        style={{
          'backgroundColor': 'rgba(255, 255, 255, 0.5)', 
          'fontSize': '25px'
        }}
        placeholder="Post Title"
      />
      <FormTextarea
        style={{
          'margin': '20px 0',
          'backgroundColor': 'rgba(255, 255, 255, 0.5)'
        }}
        placeholder="Post Content"
      />
      <ThemeConsumer>
        {
          theme => (
            <div style={{
              'display': 'flex',
              'justifyContent': 'space-between',
              'width': '100%',
              'padding': '0'
            }}>
              <div>
                {
                  tags.map((tag) => (
                    <span
                      style={{
                        'marginRight': '20px',
                        'color': theme.darkblue,
                        'fontWeight': 'bold'
                      }}>
                        #{tag}
                      </span>
                  ))
                }
                <Button pill outline>Add Tag</Button>
              </div>
              <Button pill>Post</Button>
            </div>
          )
        }
      </ThemeConsumer>
      
    </DiscussionPost>
  );
};

const Post = ({post}) => {

  const [show, setShow] = useState(false);

  const Comment = ({comment}) => {
    return (
      <ThemeConsumer>
        {
          theme => (
            <div style={{
              'display': 'flex',
              'margin': '10px 0'
            }}>
              <div style={{
                'border-radius': '50%',
                'border': `2px solid ${theme.brick}`,
                'height': '50px',
                'width': '50px',
                'backgroundImage': 'url("https://profplumbinc.com/wp-content/uploads/2018/06/default-profile.png")',
                'backgroundSize': 'cover',
                'marginRight': '10px'
              }}>
              </div>
              <div style={{
                'flex': '1 1',
                'padding': '10px 30px',
                'backgroundColor': theme.peach,
                'border': `2px solid ${theme.brick}`,
                'borderRadius': '5px'
              }}>
                <div style={{
                  'fontWeight': 'bold'
                }}>
                  {comment.author.firstName} {comment.author.lastName} 
                </div>
                <div>
                  {comment.content}
                </div>
              </div>
            </div>
          )
        }
      </ThemeConsumer>
    );
  }
  return (
    <div style={{
      'margin': '100px 0',
      'display': 'flex'
    }}>
      <div>
        <ThemeConsumer>
          {
            theme => (
              <div style={{
                'border-radius': '50%',
                'border': `2px solid ${theme.brick}`,
                'height': '100px',
                'width': '100px',
                'backgroundImage': 'url("https://profplumbinc.com/wp-content/uploads/2018/06/default-profile.png")',
                'backgroundSize': 'cover',
                'marginRight': '30px'
              }}>
              </div>
            )
          }
        </ThemeConsumer>
        <div style={{
          'fontSize': '20px',
          'textAlign': 'center',
          'marginTop': '10px'
        }}>
          {post.author.firstName} {post.author.lastName[0]}.
        </div>
      </div>
      <div style={{'flex': '1 1'}}>
        <DiscussionPost>
          <div style={{'fontSize': '30px', 'fontWeight': 'bold'}}>
            {post.title}
          </div>
          <div style={{'fontSize': '20px', 'margin': '20px 0 50px'}}>{post.content}</div>
          <Button onClick={() => setShow(!show)} size="sm" outline >
          {show ? 'Hide' : 'Show' } Comments
          </Button>
        </DiscussionPost>
        <Collapse open={show}>
            {
              post.comments.map((comment, index) => (
                <Comment comment={comment} key={index} />
              ))
            }
        </Collapse>
        <div style={{'margin': '30px 0'}}>
          <InputGroup>
            <FormInput placeholder={"Your comment"}/>
            <InputGroupAddon type="append">
              <Button>Comment</Button>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    </div>
  )
}

const Discussion = () => {

  const posts = [
    {
      title: 'Title',
      content: 'Content',
      author: {
        firstName: 'Jill',
        lastName: 'Richardson'
      },
      comments: [
        {
          author: {
            firstName: 'Robin',
            lastName: 'Hood'
          },
          content: 'My message'
        }, {
          author: {
            firstName : 'Barack',
            lastName: 'Obama'
          },
          content: 'My message'
        }, {
          author: {
            firstName: 'Vanessa',
            lastName: 'Williams'
          },
          content: 'My message'
        }
      ]
    },
    {
      title: 'Title',
      content: 'Content',
      author: {
        firstName: 'Katy',
        lastName: 'Bowen'
      },
      comments: [
        {
          author: {
            firstName: 'James',
            lastName: 'Ortega'
          },
          content: 'My message'
        },
        {
          author: {
            firstName: 'Penny',
            lastName: 'Smith'
          },
          content: 'My message'
        }
      ]
    }
  ];

  const [expanded, setExpanded] = useState(false);
  const [filters, setFilters] = useState([]);

  return (
    <Container>
      <Row>
        <Col md={expanded ? 4 : 3}>
          <div style={{'display': 'flex', 'justifyContent': 'space-between', 'flexDirection': 'row', 'marginTop': '30px'}}>
            <span style={{'flex': '0 0', 'fontSize': '40px'}}>Filters</span>
            <Button style={{'flex': '0 0'}} onClick={() => setExpanded(!expanded)}>{expanded ? 'Collapse' : 'Expand'}</Button>
          </div>
          <div style={{'margin': '20px 0'}}>
            {
              expanded
              ? 
                <>
                  <FormInput placeholder="Search..."/>
                </>
              : 
                <>
                  {filters.length} filters
                </>
            }
          </div>
        </Col>
        <Col md={expanded ? 8 : 9}>
          <MyPost></MyPost>
          {
            posts.map((post, index) => (
              <Post post={post} key={index} />
            ))
          }
        </Col>
      </Row>
      
    </Container>
  )
}

export default Discussion;
