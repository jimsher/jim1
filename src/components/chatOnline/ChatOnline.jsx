import "./chatOnline.css";

export default function ChatOnline() {
    return (
        <div className="chatOnline">
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img className="chatOnlineImg"
                        src="assets/jimi1.jpg"
                        salt=""
                    />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">jimi gvinjo</span>
            </div>
        </div>
        );
}