import React from 'react';
import {
  Container,
  Form,
  FormGroup,
  FormInput,
  Button
} from 'shards-react';

const index = () => {
  return (
    <Container fluid>
      <Form>
        <FormGroup>
          <label htmlFor="#firstName">First Name</label>
          <FormInput id="#firstName" placeholder="Username" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="#lastName">Last Name</label>
          <FormInput id="#lastName" placeholder="Password" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="#phone">Phone Number</label>
          <FormInput id="#phone" placeholder="Password" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="#zip">Zip Code</label>
          <FormInput id="#zip" placeholder="Password" />
        </FormGroup>
        <Button pill>
          Save
        </Button>
      </Form>
    </Container>
  )
}

export default index
