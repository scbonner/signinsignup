import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'



export default function ForgotPassword() {
    const emailRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)  //set state because we are not loadin it is set to false 
    const history = useHistory()

    async function handleSubmit(e) {
        //prevents screen form from refreshing
        e.preventDefault()

      try {
        setError("")
        setLoading(true)
        // await login(emailRef.current.value, passwordRef.current.value)
        history.push('/')  // takes you to the Dashboard page
      } catch {
        setError('Failed to log in')
    }

     setLoading(false)
}   
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Log In</h2>
                    {error && <Alert variant='danger'>{error}</Alert>} 
                        <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required />
                        </Form.Group>
                        <Button disable={loading} className='w-100' type='submit'>Reset Password</Button>
                        </Form>
                        <div className='w-100 text-center mt-3'>
                             <Link to='/login'>Log In</Link>
                        </div> 
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Need an account? <Link to='/signup'>Sign Up</Link>
            </div>
        </>
    )
}


