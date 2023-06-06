import React from "react";
import { SocialIcon } from "react-social-icons";
import '../styles/SocialMedia.css'

const socials = [
    "https://open.spotify.com/user/carsonbarnett2",
    "https://github.com/cob0013",
    "https://www.instagram.com/carsonbarnett/",
]

export const SocialMedia = () => {
    return (
        <div className="socialMediaContainer">
           {socials.map(url => <SocialIcon className="socialIcon" url={url}/>)}
        </div>
    )
}

export default SocialMedia