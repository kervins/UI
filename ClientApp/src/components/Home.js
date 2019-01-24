import React, { Component } from 'react';
import login from "../Pictures/login.png"
import "./Home.css";

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
        <div>
            <form action="action_page.php">
                <div class="imgcontainer">
                    <img src={login} alt="Avatar" className="avatar" />
                </div>    
                <div class="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />
                    <br />
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                    <br />
                    <button type="submit" name="loginbtn">Login</button>
                    <label>
                        <input type="checkbox" unchecked="unchecked" class="remember" /> 
                    </label>
                </div>
                <div class="container">
                    <button type="button" className="cancelbtn">Cancel</button>
                    <span class="psw">Forgot <a href="javascript:alert('We are working on it');">password?</a></span>
                </div>
            </form>
        </div>
    );
  }
}
