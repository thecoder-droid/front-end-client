import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    let handleSubmit = (event) => {
        event.preventDefault(); 
        props.setShowLoading(true)
        fetch("http://localhost:3000/api/login", {
            method: 'POST',
            body: JSON.stringify({user:{email: email, passwordhash: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            setTimeout(() => {props.updateToken(data.sessionToken)
            props.setShowLoading(false)}, 4000)   
        })
    }


    return ( 
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email} type="email" required/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} minLength="5"/>
                </FormGroup>
                <Button type="submit" color="warning">Login</Button>
            </Form>
        </div>
     );
}
 
export default Login;