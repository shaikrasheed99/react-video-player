import { useState } from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.css"

const VideoPlayer = () => {
    const [link, setLink] = useState("");
    const [hasLink, setHasLink] = useState(false);

    const handleChange = (event) => {
        const inputLink = event.target.value;
        if (inputLink === "") {
            setHasLink(false);
        } else {
            setLink(inputLink);
            setHasLink(true);
        }
    }

    return (
        <div className="video-player">
            <div className="video-player-icons">
                <ul>
                    <li><img className="icon" src="youtube.png" alt="youtube" /></li>
                    <li><img className="icon" src="facebook.png" alt="facebook" /></li>
                    <li><img className="icon" src="twitch.png" alt="twitch" /></li>
                    <li><img className="icon" src="vimeo.png" alt="vimeo" /></li>
                    <li><img className="icon" src="soundcloud.png" alt="soundcloud" /></li>
                </ul>
            </div>
            <input 
                type="text" 
                className="video-player-input" 
                onChange={handleChange} 
                placeholder="paste the video link from any one of the above platforms"
            />
            <div className="video-player-output">
                {hasLink? 
                    <ReactPlayer
                        width="50vw"
                        height="50vh"
                        controls
                        url={link} 
                    /> : 
                    <p>Your video will play here!!</p>
                }
            </div>
        </div>
    );
}
 
export default VideoPlayer;