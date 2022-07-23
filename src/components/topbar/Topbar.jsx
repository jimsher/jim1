import "./topbar.css";
import {Link } from "react-router-dom"

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration:"none"}}>
                    <span className="logo">STUDBOOK</span>
                    </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <img src="/assets/1.png" alt="" className="searchIcon" />
                    <input placeholder="Search for friend, post or video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconitem">
                        <img src="/assets/5.png" alt="" className="topbarIconItem" /> 
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconitem">
                        <img src="/assets/3.png" alt="" className="topbarIconItem" />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconitem">
                        <img src="/assets/2.png" alt="" className="topbarIconItem" />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/jimi1.jpg" alt="" className="topbarImg"/>
               </div>
             </div>
    );
}