import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import './passwordForm.css'


export default function PasswordForm() {

    const [formData, setFormData] = useState({
        password1: '',
        password2: ''
    })

    function handlePasswordChange(event) {
        const { name, value} = event.target
        setFormData(prevState => (
            {
                ...prevState,
                [name]: value
            }
        ))
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    const location = useLocation()
    

    return (
        <div className="passwordForm--page">
            <div className="passwordForm--page--container">
                <h3>Create password</h3>
                <p>Use a minimum of 10 characters, including uppercase letters, lowercase letters and numbers.</p>
                <form onSubmit={handleSubmit} action="">
                    <div className="form">
                        <label htmlFor="password1"></label>
                        <input 
                             type="password" 
                             name="password1" 
                             id="password1"
                             placeholder="Enter your password"
                             value={formData.password1}
                             onChange={handlePasswordChange} 
                        />
                    </div>
                    <div className="form">
                        <label htmlFor="password2"></label>
                        <input 
                             type="password" 
                             name="password2" 
                             id="password2"
                             placeholder="Confirm your password"
                             value={formData.password2}
                             onChange={handlePasswordChange} 
                        />
                    </div>
                    <button>Create account</button>
                </form>
            </div>
        </div>
    )
}