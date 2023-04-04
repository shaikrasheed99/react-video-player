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
            <input 
                type="text" 
                className="video-player-input" 
                onChange={handleChange} 
                placeholder="paste your video link here"
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