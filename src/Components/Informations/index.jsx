import "./Informations.css";

import { AiFillPhone,AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <p>(48)99999999</p>
        </div>
      </div>
      <div className="info-card">
        
        <AiOutlineMail />
        <div>
          <h3>E-mail</h3>
          <p>viniciusmiguel935@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Cuiabá-MT</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
