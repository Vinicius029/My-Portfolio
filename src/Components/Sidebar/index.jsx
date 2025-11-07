import eu from '../../image/eu.jfif'
import './sidebar.css';

import SocialNetworkContainer from '../SocialNetworkContainer';
import InformationContainer from '../Informations';

const Sidebar = () => {
    return (
        <aside className="container">
            <img src={eu} alt="" />
            <p className="title">Desenvolvedor Web</p>
            <SocialNetworkContainer />
            <InformationContainer />
        </aside>
    )
}

export default Sidebar;