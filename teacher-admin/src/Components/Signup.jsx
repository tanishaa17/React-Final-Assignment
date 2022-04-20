import React from "react";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userSignup } from '../Redux/Actions/Action';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



export const Signup = () => {
    const { loading, error } = useSelector((store) => store.auth);// auth is taken from rootReducer(store.js)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        let { className, value } = e.target
        setUser({ ...user, [className]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userSignup(user));
        if (!error) {
            alert("User Registered Successfully");
            navigate("/login");
        }
    }

    return (
        <>
            {loading && <p>loading...</p>}
            {error && <p>error</p>}
            <h2 style={{ color: "#198754" }}>Register Here...</h2>
            <Box
                style={{ border: "2px solid #198754", width: "40%", margin: "auto" }}
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField onChange={handleChange} className="name" error id="filled-error-helper-text" label="Name" helperText="Required!" variant="filled" />
                    <TextField onChange={handleChange} className="email" error id="filled-error-helper-text" label="Email" helperText="Required!" variant="filled" />
                    <TextField onChange={handleChange} className="username" error id="filled-error-helper-text" label="Username" helperText="Required!" variant="filled" />
                    <TextField onChange={handleChange} className="password" error id="filled-error-helper-text" label="Password" helperText="Required!" variant="filled" />
                </div>
            </Box>
            <Stack spacing={2} direction="row">
                <Button style={{ marginTop: "20px", margin: "auto" }} variant="contained" color='success' onClick={handleSubmit}>REGISTER </Button>
            </Stack>
        </>
    )
}
