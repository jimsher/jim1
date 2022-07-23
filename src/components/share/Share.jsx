import "./share.css"

export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="/assets/person/jimi1.jpg" alt=""/>
                    <input 
                    placeholder="What 's in your mind Jimsheri?" 
                    className="shareInput"/>
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                    <div className="shareOption">
                    <img src="/assets/media.png" alt="" className="shareOptionImg" />
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                            <img src="/assets/tag.png" alt="" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div> 
                        <div className="shareOption">
                            <img src="/assets/location.png" alt="" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div> 
                        <div className="shareOption">
                            <img src="/assets/feelings.png" alt="" className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
             </div>
             </div>
                    
                     
                       
    );
}