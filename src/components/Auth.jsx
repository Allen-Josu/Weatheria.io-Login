/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react/prop-types */
import { Box, Button, Paper, TextField } from "@mui/material"
import "./Auth.css"
import { Link } from "react-router-dom";
import { useState } from "react";

function Auth({ id }) {
    const [username, setUserName] = useState("")
    const [mobile, setmobile] = useState("")
    const [password, setPassword] = useState("")
    const [confirm_password, setConfirm_Password] = useState("")
    const [isusername, setIsUserName] = useState(true)
    const [ismobile, setIsMobile] = useState(true)
    const [ispassword, setIsPassword] = useState(true)
    const [isconfirmpassword, setIsConfirmPassword] = useState(true)


    const Validate = (e) => {
        const { name, value } = e.target
        if (name === "username") {
            console.log(value);
            if (value.match(/^[a-zA-Z\s]*$/)) {
                setUserName(value)
                setIsUserName(true)
            }
            else {
                setUserName(value)
                setIsUserName(false)
            }
        }
        else if (name === "mobile") {
            if (!!value.match(/^\d{10}$/)) {
                setmobile(value)
                setIsMobile(true)
            }
            else {
                setmobile(value)
                setIsMobile(false)
            }
        }
        else if (name === "password") {
            if (!!value.match(/^[0-9a-zA-Z]*$/)) {
                setPassword(value)
                setIsPassword(true)
                if (value === confirm_password) {
                    setConfirm_Password(value)
                    setIsConfirmPassword(true)
                }
            }
            else {
                setPassword(value)
                setIsPassword(false)
            }
        }
        else {

            if (value === password) {
                setConfirm_Password(value)
                setIsConfirmPassword(true)
            }
            else {
                setConfirm_Password(value)
                setIsConfirmPassword(false)
            }
        }
    }

    const Submit = (e) => {
        e.preventDefault()
        alert("An Error has been occured. Please try again after some time")
        setUserName("")
        setConfirm_Password("")
        setPassword("")
        setmobile("")
    }

    return (
        <>
            <div className="d-flex  justify-content-center align-items-center" style={{ backgroundColor: "#7CB9E8", height: "100vh" }} >
                <Box component={Paper} eleveation={15} className="d-flex flex-column w-25 shadow-5 py-4 rounded-3 align-items-center">
                    <p className="heading">{id === "signup" ? "Register" : "Welcome Back"}</p>
                    <form onSubmit={Submit} className="w-100 px-5 d-flex gap-3 flex-column justify-content-center">
                        {
                            id === "signup" && <div className="d-flex flex-column">
                                <TextField id="outlined-basic" value={username || ""} name="username" onChange={Validate} className="w-100 " label="Username" variant="outlined" />
                                {
                                    !isusername && <p className="text-danger warning">Numbers should not be used)</p>
                                }
                            </div>
                        }

                        <div className="d-flex flex-column">
                            <TextField id="outlined-basic" name="mobile" value={mobile || ""} onChange={Validate} className="w-100 " label="Mobile Number" variant="outlined" />
                            {
                                !ismobile && <p className="warning text-danger">Only number of length 10 should be used</p>
                            }
                        </div>
                        <div className="d-flex flex-column">
                            <TextField id="outlined-basic" name="password" value={password || ""} onChange={Validate} className="w-100 " label="Password" variant="outlined" />
                            {
                                !ispassword && <p className="text-danger warning">Special Character should not use</p>
                            }
                        </div>
                        {
                            id === "signup" && <div className="d-flex flex-column">
                                <TextField id="outlined-basic" name="confirm_password" value={confirm_password || ""} onChange={Validate} className="w-100" label="Confirm Password" variant="outlined" />
                                {
                                    !isconfirmpassword && <p className="text-danger warning">Should be same as password</p>
                                }
                            </div>
                        }

                        <Button type="submit" variant="contained" className="w-100 my-3  rounded-5 " disabled={isconfirmpassword && ismobile && ispassword && isusername ? false : true}>
                            <span className="signup">{id === "signup" ? "Sign Up" : "Sign in"}</span>
                        </Button>
                    </form>
                    {
                        id === "signup" ? <p>Already a user? <Link to="/login" >Sign in</Link></p> : <p>New User? <Link to="/" >Sign up</Link> Here</p>
                    }
                </Box>
            </div>
        </>
    )
}

export default Auth;
