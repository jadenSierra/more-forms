import React, {useState} from "react";

const Form = props => {

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [fNameError, setFNameError] = useState("");
    const [lNameError, setLNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");


    const handleFName = (e) => {
        setFName(e.target.value);
        if(e.target.value.length < 1){
            setFNameError("Please type a Name")
        } else if (e.target.value.length < 2){
            setFNameError("Name must be longer than 2 characters")
        } else {
            setFNameError("")
        }
    }

    const handleLName = (e) => {
        setLName(e.target.value);
        if(e.target.value.length < 1){
            setLNameError("Please type a Name")
        } else if (e.target.value.length < 2){
            setLNameError("Name must be longer than 2 characters")
        } else {
            setLNameError("")
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1){
            setEmailError("Please type an email")
        } else if (e.target.value.length < 2){
            setEmailError("Email must be longer than 5 characters")
        } else {
            setEmailError("")
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length< 1){
            setPasswordError("Please type a password")
        } else if (e.target.value.length < 8){
            setPasswordError("Password must be longer than 8 characters")
        } else {
            setPasswordError("")
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 1){
            setConfirmPasswordError("Please confirm password")
        } else if (password !== confirmPassword){
            setConfirmPasswordError("Passwords do not match")
        } else {
            setConfirmPasswordError("")
        }
    }

    return (
        <>
        <form>
            <div>
                <label>First Name</label>
                <input type="text" value={fName} onChange={handleFName}/>
                {fNameError ? <p style={{color:"red"}}>{fNameError}</p> : ""}
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" value={lName} onChange={handleLName}/>
                {lNameError ? <p style={{color:"red"}}>{lNameError}</p> : ""}
            </div>
            <div>
                <label>Email</label>
                <input type="text" value={email} onChange={handleEmail}/>
                {emailError ? <p style={{color:"red"}}>{emailError}</p> : ""}
            </div>
            <div>
                <label>Password</label>
                <input type="text" value={password} onChange={handlePassword}/>
                {passwordError ? <p style={{color:"red"}}>{passwordError}</p> : ""}
            </div>
            <div>
                <label>Confirm Password</label>
                <input type="text" value={confirmPassword} onChange={handleConfirmPassword}/>
                {confirmPasswordError ? <p style={{color:"red"}}>{confirmPasswordError}</p> : ""}
            </div>
        </form>
        </>
    );
}

export default Form;
