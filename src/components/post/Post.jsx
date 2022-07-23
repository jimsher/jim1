import "./post.css";
import { Users } from "../../dummyData";
import {useState} from  "react";


export default function Post({ post }) {
    const [like,setLike] = useState(post.like)
    const [isliked,setIsLiked] = useState(false)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    
    const likeHandler =()=>{
        setLike(isliked ? like-1 : like+1)
        setIsLiked(!isliked)
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                    <img className="postProfileImg" src={Users.filter((u)=>u.id === post.userId)[0].profilePicture}
                         alt=""
                        />
                        <span className="postUsername">{Users.filter((u)=>u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                    <img className="postProfileImg" src="/assets/morevert.png" alt=""  />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={PF+post.photo} alt=""/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                    <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt=""/>
                        <span className="postLikeCounter">{like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comment</span>
                    </div>
                </div>
            </div>
        </div>
    )
} 