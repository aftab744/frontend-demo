import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";



function Header(){
	return(
	<div className="header">
	<div className="header__left">
	<MenuIcon className="header__menu"/>
	<h1>Coursify</h1>
	</div>
	<div className="header__inputbar">
	<input placeholder="Ask question..." type="text"/>
	<SearchIcon className="header__searchbutton"/>
	</div>
	<div></div>
	</div>);
}
export default Header;