import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { Container, Form, Button } from "react-bootstrap";
import { authActions } from "../../redux/actions/auth.action"
import * as types from '../constants'

const SignIn = () => {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.auth.loading)
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [errors, setError] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault()

    const { email, password } = formData

    if (!email) {
      setError({ ...errors, email: "Please fill out your email" })
      return;
    }

    if (!password) {
      setError({ ...errors, password: "Please fill out your password" })
      return;
    }

    dispatch(authActions.loginRequest(formData))
  }

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
    setError({ ...errors, [event.target.name]: '' })
  }

  if (isAuthenticated) return <Redirect to={`${types.ACCOUNT}`}></Redirect>

  return (
    <Container className="bg-login">
      <div className="col-login">
        <div className="style-row-quote">
          <h1 className="style-quote">Welcome to our app</h1>
        </div>
        <div className="style-form-login">
          <Form onSubmit={handleSubmit} className="form-login">
            <div className="text-center mb-3">
              <h1 className="text-primary" style={{ "fontSize": "25px" }}>Sign In</h1>
            </div>
            <div>
              <Form.Group>
                <Form.Control type="email" required placeholder="Email Address" name="email" value={formData.email} onChange={handleChange}/>
                {errors.email && (<small className="form-text text-danger">{errors.email}</small>)}
              </Form.Group>
              <Form.Group>
                <Form.Control type="password" placeholder="Password" name="password" value={formData.password}onChange={handleChange} minLength="3" />
                {errors.password && (
                  <small className="form-text text-danger">{errors.password}</small>
                )}
              </Form.Group>

              {loading ? (
                <Button className="btn-block" variant="primary" type="button" disabled >
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  Loading...
                </Button>
              ) : (
                  <Button className="btn-block" type="submit" variant="success">Login</Button>
                )}
              <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
            </div>
          </Form>
        </div>
      </div>
    </Container>
  )
}

export default SignIn
