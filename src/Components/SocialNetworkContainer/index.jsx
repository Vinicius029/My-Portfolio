import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import './socialNetwork.css';

const socialNetwork = [
    {name: "Linkedin", url: '#', icon: <FaLinkedinIn />},
    {name: "Github", url: 'github.com/vinicius029', icon: <FaGithub />},
    {name: "Instagram", url: '#', icon: <FaInstagram />},
]

const SocialNetworkContainer = () => {
    return (
        <div className="container-social">
            {
                socialNetwork.map(social => (
                    <a href={social.url} key={social.name} id={social.name}>
                        {social.icon}
                    </a>
                ))
            }
        </div>
    )
}

export default SocialNetworkContainer;