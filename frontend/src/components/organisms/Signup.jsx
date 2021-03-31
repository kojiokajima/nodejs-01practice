import React, {useState} from 'react'
import {TextInput, Button} from 'react-materialize';
import {Link} from 'react-router-dom';
import axios from 'axios';

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };



const Signup = () => {

    return (
        <div>
            <form action="/signup" method="POST" >
                <label htmlFor="TextInput-4">First Name</label>
                <TextInput id="TextInput-4" label="First Name" name="firstName" />
                <label htmlFor="TextInput-4">Last Name</label>
                <TextInput id="TextInput-4" label="Last Name" name="lastName" />
                <label htmlFor="TextInput-4">Email</label>
                <TextInput id="TextInput-4" label="Email" name="email" email={true} />
                <label htmlFor="TextInput-4">Password</label>
                <TextInput id="TextInput-4" label="Password" name="password" password={true} />
                <br/>
                <Button node="Button" style={{marginRight: '5px'}} waves="light" >
                    Register
                </Button>
            </form>
            <br/><br/>
            <Link to={"/"}>
                <Button node="Button" style={{marginRight: '5px'}} waves="light">
                    Go Back
                </Button>
            </Link>
        </div>
    )
}

export default Signup