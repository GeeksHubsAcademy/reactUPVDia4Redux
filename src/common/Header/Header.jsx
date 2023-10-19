import React, { useState, useEffect } from "react";
import "./Header.css";

import {useNavigate} from 'react-router-dom';

//REDUX
import { useSelector, useDispatch } from 'react-redux';
import { logout, userData } from "../../pages/userSlice";

export const Header = () => {

  //Instancio useNavigate
  let navigate = useNavigate();

  const dispatch = useDispatch();

  //Instancio RDX en modo lectura

  const rdxCredentials = useSelector(userData);

  useEffect(()=>{

    console.log(rdxCredentials, "soy redux credentials desde header");

  }, [rdxCredentials]);

  const logOutMe = () => {

    dispatch(logout( {credentials : ""}))

    navigate("/")
    
  }

  return (
    <div className="headerDesign">
      {!rdxCredentials?.credentials.token ? (
        <>
          <div className="linkDesign" onClick={()=>navigate("/login")}>login</div>
          <div className="linkDesign" onClick={()=>navigate("/register")}>register</div>
        </>
      ) : (
        <>
          <div className="linkDesign" onClick={()=>navigate("/profile")}>{rdxCredentials.credentials.firstName}</div>
          <div className="linkDesign" onClick={()=>logOutMe()}>log out</div>
        </>
      )}
    </div>
  );
};
