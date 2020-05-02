import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import Navbar from './navbar.js';
import {Link} from 'react-router-dom';
import { ArrowBackIos,ArrowForwardIos } from '@material-ui/icons';

 export default class Blog extends Component {
	state = {
		blogs:[],
		blog: [],
		loaded:false,
		prev: null,
		next: null,
		curr:null
	}
	
	async UNSAFE_componentWillMount(){
		var blog =await this.props.match.params.blog;
		await fetch("https://blog14710.herokuapp.com/blogs/"+blog)
			.then(res => res.text())
			.then(res =>this.setState({blog: JSON.parse(res)}))
			.catch(err => err);
		
		await fetch("https://blog14710.herokuapp.com/")
			.then(res => res.text())
			.then(res => JSON.parse(res))
			.then(res => {
				res.map((blog, key) => {
					if(blog._id == this.state.blog[0]._id){
						if(key <= 1)this.setState({prev:key})
							else this.setState({prev:key-1})
						if(key >= res.length-1)this.setState({next:key})
							else this.setState({next:key+1})
						this.setState({curr:key});
					}
					this.setState({loaded:true});
					} )
				this.setState({blogs:res});
			})
			.catch(err => err);
			
	}
	async componentWillReceiveProps(nextProps){
		this.setState({loaded:false,blogs:[],blog:[]});
		var blog =await nextProps.match.params.blog;
		await fetch("https://blog14710.herokuapp.com/blogs/"+blog)
			.then(res => res.text())
			.then(res =>this.setState({blog: JSON.parse(res)}))
			.catch(err => err);
		
		await fetch("https://blog14710.herokuapp.com/")
			.then(res => res.text())
			.then(res => JSON.parse(res))
			.then(res => {
				res.map((blog, key) => {
					if(blog._id === this.state.blog[0]._id){
						if(key <= 0)this.setState({prev:key})
							else this.setState({prev:key-1})
						if(key >= res.length-2)this.setState({next:key})
							else this.setState({next:key+1})
						this.setState({curr:key});
					}
					this.setState({loaded:true});
					} )
				this.setState({blogs:res});
			})
			.catch(err => err);
			
	}
	
	blognav(){
		if(this.state.blogs[0] != null){
			if(this.state.curr<=0 && this.state.curr>=this.state.blogs.length-1)
				return;
			else if(this.state.curr<=0)
				return <section>
			<a></a>
			<Link className="right" to={"/Blogs/"+this.state.blogs[this.state.next]._id}>
							<ArrowForwardIos/>
							<div>
								<a>{this.state.blogs[this.state.next].name}</a>
								<i>{this.state.blogs[this.state.next].date.slice(0,15)}</i>
							</div>
							</Link>
						</section>
			else if(this.state.curr>=this.state.blogs.length-2)	
					return	<section>
			<Link className="left" to={"./"+this.state.blogs[this.state.prev]._id}>
							<ArrowBackIos/>
							<div>
								<a>{this.state.blogs[this.state.prev].name}</a>
								<i>{this.state.blogs[this.state.prev].date.slice(0,15)}</i>
							</div>
							</Link>
							<a></a>
						</section>
			else return <section>
							<Link className="left" to={"./"+this.state.blogs[this.state.prev]._id}>
							<ArrowBackIos/>
							<div>
								<a>{this.state.blogs[this.state.prev].name}</a>
								<i>{this.state.blogs[this.state.prev].date.slice(0,15)}</i>
							</div>
							</Link>
							<Link className="right" to={"/Blogs/"+this.state.blogs[this.state.next]._id}>
							<ArrowForwardIos/>
							<div>
								<a>{this.state.blogs[this.state.next].name}</a>
								<i>{this.state.blogs[this.state.next].date.slice(0,15)}</i>
							</div>
							</Link>
					</section>
		}else{
			return;
		}
	}
	loaded(){
		if(this.state.loaded){
			return <div className="page">
						{this.state.blog.map((blog,key) => 
							<div className="blog" key={key}>
								<h1>{blog.name}</h1>
						<div className="head-img"><img src={"https://blog14710.herokuapp.com/photo/"+blog._id}></img></div>
								<i>{blog.date.slice(0,15)}</i>
							<div style={{height:'20px'}}></div>
								<React.Fragment>
								<div dangerouslySetInnerHTML={{__html: blog.doc}}></div>
								</React.Fragment>
								{this.blognav()}
							</div>
							
						)}
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



