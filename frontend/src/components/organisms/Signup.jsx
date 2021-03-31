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
    const [firstNameReg, setFirstName] = useState('')
    const [lastNameReg, setLastName] = useState('')
    const [emailReg, setEmail] = useState('')
    const [passwordReg, setPassword] = useState('')

    // const data ={
    //     firstName: firstNameReg,
    //     lastName: lastNameReg,
    //     email: emailReg,
    //     password: passwordReg
    // }

    const register = () => {
        // axios.post('/signup', {
        //     firstName: firstName,
        //     lastName: lastName,
        //     email: email,
        //     password: password
        // })
        // .then((response) => {
        //     console.log(response)
        // })
        // axios.post('/list', data)
        // .then((response) => {
        //     console.log(response)
        // })
    }

    const handlePassword = (e) => {
        e.preventDefault()
        setPassword(e.target.value)

    }

    return (
        <div>
            <form action="/list" method="POST" >
                <label htmlFor="TextInput-4">First Name</label>
                <TextInput id="TextInput-4" label="First Name" name="firstName" onChange={(e)=>{setFirstName(e.target.value)}} />
                <label htmlFor="TextInput-4">Last Name</label>
                <TextInput id="TextInput-4" label="Last Name" name="lastName" onChange={(e)=>{setLastName(e.target.value)}} />
                <label htmlFor="TextInput-4">Email</label>
                <TextInput id="TextInput-4" label="Email" name="email" onChange={(e)=>{setEmail(e.target.value)}} />
                <label htmlFor="TextInput-4">Password</label>
                <TextInput id="TextInput-4" label="Password" name="password" password={true} onChange={handlePassword} />
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