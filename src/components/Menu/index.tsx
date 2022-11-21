import React from "react";
import Group from "assets/img/Group.png";
import * as S from "./styles";
import { Link } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
   async function logout() {
    await signOut()
    navigate('/login')
  }
  return (
    <S.Cabecalho>
      <picture>
           <img src={Group} alt="Imagens principais" />
      </picture>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/cadastrar">Cadastrar</Link>
          </li>
        </ul>
      </nav>
    </S.Cabecalho>
  );
};

export default Menu;
