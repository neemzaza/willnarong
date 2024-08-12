import React, { useState, useEffect } from 'react'
import { BrowserRouter, Redirect, Link } from 'react-router-dom';
import Axios from 'axios'
import Home from './Home'

export default function Loginform() {
    const logged = () => {
        return <BrowserRouter><Redirect to="/Home" component={dir} /></BrowserRouter>
    }

    const dir = () => {
        return <Home />
    }
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [loginStatus, setloginStatus] = useState("")

    Axios.defaults.withCredentials = true
    const login = () => {
        Axios.post("http://localhost:3001/login", {
            username: username,
            password: password
        }).then((res) => {
            if (res.data.message) {
                setloginStatus(res.data.message)
            } else {
                // setloginStatus(logged)
                return logged
            }
        })
    }

    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((res) => {
            if (res.data.loggedIn == true) {
                setloginStatus(res.data.user[0].username)
            }
        })}, [])

    return (
        <>
            <div class="formsignup p-4">
                <h3 Style="color: red">{loginStatus}</h3>
                    <label><i class="bi bi-envelope"></i>&nbsp;
                      Email or <i class="bi bi-person-badge"></i>&nbsp;
                      Username</label>&nbsp;&nbsp;
                      <input class="username" type="username" onChange={(e) => {
                        setUsername(e.target.value) 
                      }}/>&nbsp;&nbsp;<br /><br />
                    <label><i class="bi bi-key"></i>&nbsp;Password</label>&nbsp;&nbsp;
                      <input class="passworld" type="password" onChange={(e) => {
                        setPassword(e.target.value)
                      }}/>&nbsp;&nbsp;<br /><br />
                    <input class="submit" type="submit" onClick={login}/>
                  </div>
        </>
    )
}
