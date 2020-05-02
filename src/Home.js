import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from './navbar.js';
import {TextField} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';


 export default class Home extends Component {
	state = {
		home: null,
		blogs: []
	}	
		
		
	UNSAFE_componentWillMount(){
		fetch("https://blog14710.herokuapp.com/home")
			.then(res => res.text())
			.then(res => this.setState({home: JSON.parse(res)}))
			.catch(err => err);
		fetch("https://blog14710.herokuapp.com/")
			.then(res => res.text())
			.then(res => this.setState({blogs: JSON.parse(res),loaded:true}))
			.catch(err => err);
	}
	 gethome(){
		 if(this.state.home == null){
			 return <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
		 }else{
			return	<div className="page"> 
				<div className="blog">
							<h1>{this.state.home.name}</h1>
							<div className="head-img"><img src={"https://blog14710.herokuapp.com//home/photo/"}></img></div>
						<div style={{height:'20px'}}></div>
							<React.Fragment>
							{this.state.home.doc}
							</React.Fragment>
						</div>
						<div style={{height:'50px'}}></div>
						<h1>Latest Blogs</h1>
						<div className="grid">
						
						{this.state.blogs.map((blog,key) => 
						{
							if(key <3 && key < this.state.blogs.length-1){
								return <Link to={"./blogs/"+blog._id} key={key}>
								<div className="blog-item" style={{backgroundImage:'url(https://blog14710.herokuapp.com/photo/'+blog._id+')'}}>
								<i>{blog.date.slice(0,10)}</i>
								<a>{blog.name}</a>
								</div></Link>
							}else{
								return;
							}
						}
						
						)}
						</div>
					</div>
		 }
	 }
	  render(){
		
		  return (
		  <section>
			
				{this.gethome()}
			
		</section>
		  );
  }
}

