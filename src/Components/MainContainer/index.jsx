import About from '../About';
import Tecnologys from '../Tecnologys';
import './MainContainer.css';

const MainContainer = () => {
    return (
        <main className='container-main'>
            <About />
            <Tecnologys />
        </main>
    )
}

export default MainContainer;