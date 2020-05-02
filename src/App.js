import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './navbar.js';
import Items from './items.js';
import Home from './Home.js';
import Header from './header.js';
import Admin from './Admin.js';
import Blog from './blog.js';
import { TextBlock, RectShape } from 'react-placeholder/lib/placeholders';
import ReactPlaceholder from 'react-placeholder';


export default class App extends Component {
	state = {
		ready: false
	}
	 
	 GhostPlaceholder = () => (
	  <div className='my-placeholder'>
		<RectShape color='gray' style={{width: 200, height: 100}} />
		<TextBlock rows={6} color='blue'/>
	  </div>
	);
	 
	  render(){
			  
		  return (
		  
			<Router>
				<Navbar/>
				<div className="main">
				<Header/>
				<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/Blogs" component={Items} exact />
				<Route path="/Blogs/:blog" name="blog"  component={Blog} exact />
				<Route path="/Admin" component={Admin} />
				</Switch>
				</div>
				
			</Router>
		  );
	  }
}

