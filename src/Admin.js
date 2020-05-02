import React,{Component} from 'react';
import { render } from 'react-dom'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import {TextField,Button} from '@material-ui/core';
import axios from 'axios';
import * as Cookies from "js-cookie";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



 export default class Admin extends Component {
		
	 
	 	 
	  render(){
		  return (
			<Router>
				<Switch>
					<Route path="/Admin" component={Login} exact />
					<Route path="/Admin/AddBlog" component={Add} />
				</Switch>
			</Router>
		  );
  }
}

class Login extends Component{
	 state = {
		 logoff: false,
	 }
	 
	 setSession = async() => {
		var name = this.state.username;
		var pass = this.state.password;
		 const form = await new FormData();
		 await form.set('username', this.state.username);
		 await form.set('password', this.state.password);
		 console.log(this.state)
		 await axios.post(
			  'http://localhost:8000/admin',
			  {username:name,password:pass} ).then((response) => {
				  if(response.data){
					Cookies.remove("login");
					Cookies.set("login", {name:this.state.username,pass:this.state.password}, { expires: 2 })
					this.setState({logoff:false});
					console.log(response);
				}else{
					this.setState({logoff:true});
				}
			  })
		
	}
	getSession = async (name, pass) => {
		var session = await Cookies.get('login');
		await axios.post('https://blog14710.herokuapp.com/admin',{username:name,password:pass})
			.then(response => {
				if(!response.data){
					return <Redirect to='/Admin'  />
				}else{
					return <Redirect to='/Admin/AddBlog'/>
				}
			});
	}
	
	handleChange = (event) =>{
		let nam = event.target.name;
		let val = event.target.value;
		this.setState({[nam]: val});
		console.log("slknioen")
	}
	loginCheck = () => {
		if(this.state.logoff){
				return <b>login fail</b>
		}else{
			return <Redirect to='/Admin/AddBlog'/>
		}
	} 
	
	render(){
		return (
			<section>
			<div className="page">
			{this.loginCheck()}
				<form> 
					<TextField label="USERNAME" name="username" className="classes.margin" onChange={this.handleChange}/>
					<TextField label="PASSWORD" name="password" type="password" className="classes.margin" onChange={this.handleChange}/>
					<Button variant="contained" color="primary" component="span" type="submit" onClick={this.setSession}>Login</Button>
				</form>
			</div>
		</section>
		)
		
	}
}

class Add extends Component{
	state = {
		login: true,
	}
	
	getSession = async (name, pass) => {
		var session = await Cookies.get('login');
		console.log(JSON.parse(session));
		
		await axios.post('https://blog14710.herokuapp.com/admin',{username:JSON.parse(session).name,password:JSON.parse(session).pass})
			.then(response => {
				if(response.data){
					console.log('logged dawggg');
					
				}else{
					this.setState({login:false});
				}
			});
	}
	redirect(){
		if(!this.state.login){
			return <Redirect to="/Admin"/>
		}
	}
	handleChange = (event) =>{
		let nam = event.target.name;
		let val = event.target.value;
		this.setState({[nam]: val});
		console.log("slknioen")
	}
	handleEditor = (event,editor) =>{
		let val = editor.getData();
		this.setState({editor: val});
	}
	handleFile= (event) =>{
		let val = event.target.files[0];
		this.setState({picture: val});
	}
	upload = async () =>{
		 const form = await new FormData();
		 await form.set('name', this.state.title);
		 await form.set('doc', this.state.editor);
		 await form.set('picture',this.state.picture);
			
		 await axios.post(
			  'https://blog14710.herokuapp.com/admin/add',
			  form ).then((response) => {
				  if(response.data){
					  console.log('yeah nigga')
				}else{
					this.setState({logoff:true});
					this.loginCheck();
				}
			  })
	}
	 
	componentWillMount(){
		this.getSession('terrible','afkmbsmk');
	}
	
	render(){
		return (
			<section>
			{this.redirect()}
			<div className="page">
			<form>
				<TextField label="Blog Title" className="blog-title" name="title" onChange={this.handleChange} />
				<Button variant="contained" component="label">
				  Upload Display Picture
				  <input type="file" style={{ display: "none" }} name="picture" onChange={this.handleFile}/>
				</Button>
				<div style={{height:'20px'}}></div>
				<CKEditor editor={ ClassicEditor }  onChange={this.handleEditor}/>
				<div style={{height:'20px'}}></div>
				<Button variant="contained" component="span" type="submit" onClick={this.upload}>Submit</Button>
				</form>
			</div>
		</section>
		)
		
	}
}