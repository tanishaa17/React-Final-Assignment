import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../Redux/Actions/Action';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export const Login = () => {
    const { loading, error } = useSelector((store) => store.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [creds, setCreds] = useState({
        username: "",
        password: ""
    })
    const handleChange = (e) => {
        let { className, value } = e.target
        setCreds({ ...creds, [className]: value })
    }
    const handleSubmit = (e) => {
        dispatch(userLogin(creds));
        if (!error) {
            alert("User Logged in Successfully");
            navigate("/");
        }
    }
    return (
        <>
            {loading && <p>loading...</p>}
            {error && <p>error</p>}
            <h2>Login Page</h2>

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
                    <TextField className='username' onChange={handleChange} error id="filled-error-helper-text" label="Username" helperText="Required!." variant="filled" />
                    <TextField className='username' onChange={handleChange} error id="filled-error-helper-text" label="Password" helperText="Required!." variant="filled" />
                </div>
            </Box>
            <Stack spacing={2} direction="row">
                <Button style={{ marginTop: "20px", margin: "auto" }} variant="contained" color='success' onClick={handleSubmit}>LOGIN</Button>
            </Stack>
        </>
    )
}
