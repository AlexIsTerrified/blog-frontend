import React,{Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
import $ from 'jquery';
import {Menu, MenuItem} from '@material-ui/core';
import logo from './logo.svg'

export default class Navbar extends Component{
	state = {
		width: window.innerWidth,
		anchor: null
		};
		
	handleClick = (event) => {
		this.setState({anchor: event.currentTarget});
	  };

	handleClose = () => {
		this.setState({anchor: null});
	  };	
		
	menuCl(){
		var menuEl = $(".menu");
		var nav = $(" nav");
		if(menuEl.hasClass('close')){
			menuEl.removeClass('close');
			nav.removeClass('menu-display');
		}else{
			menuEl.addClass('close');
			nav.addClass('menu-display');
		}
	}
	
	render(){
		return (
			<React.Fragment>
				<div className="menu" onClick={this.menuCl}>
					<div className="menu-1"></div>
					<div className="menu-2"></div>
					<div className="menu-3"></div>
				</div>
			<nav>
			<div className="center">
				<div>
					<Link to="/" target="blank"><img src={logo}/></Link>
				</div>
				<span><NavLink id="3" onClick={this.menuCl} to="/Blogs" activeClassName="active-nav">BLOGS</NavLink></span>
				<span><a id="2" onClick={this.menuCl}>ABOUT</a></span>
				<span><NavLink id="1" onClick={this.menuCl} to="/" activeClassName="active-nav">HOME</NavLink></span>
				</div>
			</nav>
		</React.Fragment>
		);
	}
}