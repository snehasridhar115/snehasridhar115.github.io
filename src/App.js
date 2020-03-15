import React from 'react';
import Login from './Login';
import Register from './Register';
import AddEvent from './AddEvent';
import Userhome from './Userhome';
import Header from './Header';
import './Styles/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
	
	return (
	<div>
		<Header />
		<p className="App.css">
      	 This is snehasridhar115. Welcome, and hello!
    	</p>
		<Router> 	
			<Route path="/Login" component={Login} />
			<Route path="/Register" component={Register} />
			<Route path="/AddEvent" component={AddEvent} />
			<Route path="/Userhome" component={Userhome} />
		</Router>     
	</div>  
    // <Register />
    //<AddEvent />
  );
}

export default App;
