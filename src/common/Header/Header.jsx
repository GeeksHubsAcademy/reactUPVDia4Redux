import React, { useState, useEffect } from "react";
import "./Header.css";

import {useNavigate} from 'react-router-dom';

export const Header = () => {

  //Instancio useNavigate
  let navigate = useNavigate();

  const rdxCredentials = "";

  const logOutMe = () => {
    
  }

  return (
    <div className="headerDesign">
      {rdxCredentials === "" ? (
        <>
          <div className="linkDesign" onClick={()=>navigate("/login")}>login</div>
          <div className="linkDesign" onClick={()=>navigate("/register")}>register</div>
        </>
      ) : (
        <>
          <div className="linkDesign" onClick={()=>navigate("/profile")}>profile</div>
          <div className="linkDesign" onClick={()=>logOutMe()}>log out</div>
        </>
      )}
    </div>
  );
};
