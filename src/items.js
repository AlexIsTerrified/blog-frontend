import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import Navbar from './navbar.js';
import {Link} from 'react-router-dom';

 export default class Items extends Component {
	state = {
		blogs: [],
		loaded:false
	}
	
	UNSAFE_componentWillMount(){
		fetch("https://blog14710.herokuapp.com/")
			.then(res => res.text())
			.then(res => this.setState({blogs: JSON.parse(res),loaded:true}))
			.catch(err => err);
			
	}
	loaded(){
		if(this.state.loaded){
			return 			<div className="page">
			<h1>Blogs</h1>
				<div className="grid">
					{this.state.blogs.map((blog,key) => 
						{
							if(key < this.state.blogs.length-1){
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
		}else{
			return <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
		}
		
	}
	
  render(){
	  return (
		<section>
		{this.loaded()}
		</section>
	  );
  }
}



