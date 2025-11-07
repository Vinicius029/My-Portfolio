import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import './socialNetwork.css';

const socialNetwork = [
    {name: "Linkedin", url: 'https://www.linkedin.com/in/vin%C3%ADcius-miguel-916077211/', icon: <FaLinkedinIn />},
    {name: "Github", url: 'https://github.com/vinicius029', icon: <FaGithub />},
    {name: "Instagram", url: '#', icon: <FaInstagram />},
]

const SocialNetworkContainer = () => {
    return (
        <div className="container-social">
            {
                socialNetwork.map(social => (
                    <a href={social.url} key={social.name} id={social.name} target="_blank">
                        {social.icon}
                    </a>
                ))
            }
        </div>
    )
}

export default SocialNetworkContainer;