import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow.js";
import  HomeIcon from "@material-ui/icons/Home";

import  VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import  HistoryIcon from "@material-ui/icons/History";
import  OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import  ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import  ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';







function Sidebar(){
	return(
	<div className="sidebar">
	<SidebarRow selected Icon={HomeIcon} title="Home" />
	<SidebarRow Icon={LibraryBooksIcon} title="Courses" />
	<SidebarRow Icon={MenuBookIcon} title="Books" />
	
	<SidebarRow Icon={VideoLibraryIcon} title="Library" />
	<hr/>
	<SidebarRow  Icon={OndemandVideoIcon} title="Live classes" />
	<SidebarRow  Icon={LiveHelpIcon} title="Live Help" />
	<SidebarRow  Icon={ThumbUpAltOutlinedIcon} title="Liked videos" />
	<SidebarRow  Icon={HistoryIcon} title="History" />
	<SidebarRow  Icon={ExpandMoreOutlinedIcon} title="Show more" />
     <hr />




	</div>
	);
}
export default Sidebar;