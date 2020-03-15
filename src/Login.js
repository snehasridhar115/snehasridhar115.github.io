import React from 'react';
import './Styles/Login.css';
import axios from 'axios';
import Userhome from './Userhome';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// function reg() {
//   return (
//     <Register/ >
//   );
// }

class Login extends React.Component {

  constructor() {
    super();
	this.state={
		UserName: null,
		Password: null,
		isLoggedin: false,
		// failed: 0
	}
  }

handleChange = (event) => {
	event.preventDefault();
    	const { name, value } = event.target;
	console.log(name);
	this.setState({[name]: value});
}
handleSubmit = (event) =>{
	event.preventDefault();
	var opts={
    	"id":this.state.UserName,
    	"passwd":this.state.Password,
   	};
	//console.log(opts);
	console.log(opts.id);
	axios.post('http://localhost:5000/login',opts)
    	.then(res => {
      	console.log(res);
      	console.log(res.data);
		if(res.data.success===true)// && this.state.failed <3)
		{
			this.setState({isLoggedin: true});
			window.location.replace('http://localhost:3000/Userhome');
		}
    	}).catch(error => {
			this.setState({isLoggedin: false});
			// this.setState({failed: this.state.failed + 1});
      		console.log(error);
    	})
}
  render() {
  return (
	<form onSubmit={this.handleSubmit}>     
		<div class="SubHeader">
			<h2 class="Heading">Login</h2>
		</div>  
		<div class="Component">
			<input type="text" class="UserName" placeholder="UserName" name="UserName"  onChange={this.handleChange} />
			<br />
			<input type="Password" class="Password" placeholder="Password" name="Password" onChange={this.handleChange} />
			<br />
			<button class="Button" class="SignIn">Sign In</button>
			<br />    
			<a class="Register" href="http://localhost:3000/Register">New User? Register Here</a>
		</div>
    </form>	
  );
  }
}

export default Login;
