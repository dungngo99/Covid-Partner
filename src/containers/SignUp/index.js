import React, {useState} from 'react'
import {Redirect, Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {authActions} from '../../redux/actions/auth.action'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import * as types from '../constants'

const SignUp = () => {
  const dispatch = useDispatch()

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const loading = useSelector(state => state.auth.loading)

  const [formData, setFormData] = useState({
    location: '',
    name: '',
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    location: '',
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
    setErrors({...errors, [event.target.name]: ''})
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const {location, name, email, password} = formData

    if (!location){
      setErrors({...errors, location: 'Please fill out location'})
      return;
    }else if(!name){
      setErrors({...errors, location: 'Please fill out name'})
      return;
    }else if(!email){
      setErrors({ ...errors, location: 'Please fill out email' })
      return;
    }else if (!password){
      setErrors({ ...errors, location: 'Please fill out password' })
      return;
    }

    dispatch(authActions.registerRequest(formData))
  }

  if (isAuthenticated) return <Redirect to={`${types.ACCOUNT}`}></Redirect>

  return (
    <Container className='bg-resgister'>
      <Row>
        <Col>
          <div className='text-center mb-3'>
            <h1 className="text-primary" style={{ "font-size": "25px" }}>Sign Up</h1>
            <p className="lead"><i className="fas fa-user" /> Create Your Account</p>
          </div>

          <Form onSubmit={handleSubmit} className="form-login">
            <Form.Group>
              <Form.Control type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
              {errors.name && <small className="form-text text-danger">{errors.name}</small>}
            </Form.Group>

            <Form.Group>
              <Form.Control type="email" placeholder="Email Address" name="email" value={formData.email}
                onChange={handleChange} />
              {errors.email && <small className="form-text text-danger">{errors.email}</small>}
            </Form.Group>

            <Form.Group>
              <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
              {errors.password && <small className="form-text text-danger">{errors.password}</small>}
            </Form.Group>

            <Form.Group>
              <Form.Control type="text" placeholder="Location" name="location" value={formData.location} onChange={handleChange} />
            </Form.Group>

            {loading ? (
              <Button className="btn-block" variant="primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
              </Button>
            ) : (
                <Button className="btn-block" type="submit" variant="success">
                  Register
                </Button>
              )}

            <p>Already have an account? <Link to="/login">Sign In</Link></p>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default SignUp
