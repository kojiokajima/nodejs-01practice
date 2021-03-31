import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from "react-materialize";
import '../../index.css';
import '../../App.css';



const Home = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/list')
        .then((res) => res.json())
        .then((data) => {
            console.log("DATA: ", data)
            return setMessage(data.email)
        })
    }, [])

    return (
        <div className="App">
            <h1>フロントエンド</h1>
            <p>{message}</p>
            <Link to='/signup'>
                <Button node="Button" style={{marginRight: '5px'}} waves="light" >
                        SIGN UP
                </Button>
            </Link> 
        </div>
    )
}

export default Home;