import React,{Component} from 'react';
import logo from './logo.svg';
import Navbar from './navbar.js';
import $ from 'jquery';

 export default class Home extends Component {

	componentDidMount(){
		$(window).scroll(function(){
        if($(window).scrollTop() > 1){
          $(".header").css({"opacity" : 1-($(window).scrollTop())/350});
        }else{
			$(".header").css({"opacity" : 1});
		}
      });
	}

	render(){
		return (
		<section className="head">
		<div className="header">
			<span className="name">This weird blog thing</span>
			<p>This is a blog... I guess</p>
			</div>
		</section>
		);
	}
}

