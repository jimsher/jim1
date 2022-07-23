import "./sidebar.css"
import CloseFriend from "../closeFriend/CloseFriend"
import { Users } from "../../dummyData";


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <img className="sidebarIcon" src="/assets/feed.png" alt=""/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                        <li className="sidebarListItem">
                        <img src="/assets/chats.png" alt="" className="sidebarIcon" />
                        <span className="sidebarListItemText">Cats</span>
                    </li>
                    <li className="sidebarListItem">
                        <img src="/assets/video.png" alt="" className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <img src="/assets/grups.png" alt="" className="sidebarIcon" />
                        <span className="sidebarListItemText">Grups</span>
                    </li>
                    <li className="sidebarListItem">
                        <img src="/assets/bookmark.png" alt="" className="sidebarIcon" />
                        <span className="sidebarListItemText">Bokmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <img src="/assets/question.png" alt="" className="sidebarIcon" />
                        <span className="sidebarListItemText">Question</span>
                    </li>
                    <li className="sidebarListItem">
                        <img src="/assets/joobs.png" alt="" className="sidebarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <img src="/assets/events.png" alt="" className="sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <img src="/assets/student.png" alt="" className="sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                   {Users.map(u=>(
                    <CloseFriend key={u.id} user={u}/>
                   ))}
                </ul>
            </div>
        </div>
    );


}    