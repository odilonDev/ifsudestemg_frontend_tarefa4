import { useState } from "react";
import imagemLogin from "./login.jpg";
import imagemLogout from "./logout.jpg";

const ControleLogin = (props) =>{

    const [loginEstado, setLoginEstado] = useState({
       mensagem: 'Por favor faça o login.',
       statusLogin: false,
       imagem: imagemLogout,
       textoBotao: 'Login'
    });

    const clicouBotao = () =>{
        let varMensagem;
        let varStatusLogin;
        let varImagem;
        let varTextoBotao;

        if (loginEstado.statusLogin){
            varMensagem = 'Por favor faça o login.';
            varStatusLogin = false;
            varImagem = imagemLogout;
            varTextoBotao = 'Login';
        }else{
            varMensagem = 'Seja Bem-Vindo!';
            varStatusLogin = true;
            varImagem = imagemLogin;
            varTextoBotao = 'Logout';
        }

        setLoginEstado({
            mensagem: varMensagem,
            statusLogin: varStatusLogin,
            textoBotao: varTextoBotao,
            imagem: varImagem
        })
    }

    return(
        <div>
            <h3>{loginEstado.mensagem}</h3> 
            <img src={loginEstado.imagem}/><br/>
            <button type="button" onClick={() => clicouBotao()}>{loginEstado.textoBotao}</button>
        </div>
    )
}

export default ControleLogin;
