import { useState } from "react";
import "./VideoPlayer.css"

const VideoPlayer = () => {
    const [link, setLink] = useState("");

    const handleChange = (event) => {
        setLink(event.target.value);
    }

    return (
        <div className="video-player">
            <input 
                type="text" 
                className="video-player-input" 
                onChange={handleChange} 
                placeholder="paste your video link here"
            />
        </div>
    );
}
 
export default VideoPlayer;