import React, { useState, useEffect } from "react";
import "./Login.css";

import { useNavigate } from 'react-router-dom';
import { CustomInput } from "../../common/CustomInput/CustomInput";
import { logMeDummyJSON } from "../../services/apiCalls";

//REDUX 

import { useSelector, useDispatch } from "react-redux";
import { login, userData } from "../userSlice";

export const Login = () => {

  const navigate = useNavigate();

  //Instanciamos useDispatch para poder emitir acciones (dispatch)
  const dispatch = useDispatch();

  const rdxCredentials = useSelector(userData);
  
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [greetings, setGreetings] = useState("")

  useEffect(()=> {

    if(rdxCredentials?.credentials?.token){

        navigate("/")
    }

  }, [rdxCredentials])

  const inputHandler = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const logMeIn = () => {

    logMeDummyJSON(user)
        .then(
            resultado => {

                //Nada más log... guardo los datos en RDX..
                dispatch(login({ credentials: resultado.data}));

                setGreetings(resultado.data.firstName)

                setTimeout(()=> {
                    navigate("/profile");
                }, 1000)
            }
        )
        .catch(error => console.log(error))

  }

  return (
    <>
        {
            greetings !== "" 

            ? (<div className="loginDesign">Hola de nuevo {greetings}....</div>)

            : (<div className="loginDesign">
            <CustomInput
              name={"username"}
              type={"text"}
              handlerFunction={inputHandler}
            />
      
            <CustomInput
              name={"password"}
              type={"password"}
              handlerFunction={inputHandler}
            />
      
            <button onClick={()=>logMeIn()}>Login me!</button>
          </div>)
        }
    </>
    
  );
};
