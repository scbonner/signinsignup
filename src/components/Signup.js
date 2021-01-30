import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'


const Signup = () => {
    return (
// adding fragment because of Card 
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Sign Up</h2>
                    <Form>
                      <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required />
                      </Form.Group>
                      <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required />
                      </Form.Group>
                      <Form.Group id='confirm-password'>
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type='password' ref={passwordConfirmRef} required />
                      </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Already have an account? Log In
            </div>
            
        </>
    )
}

export default Signup
