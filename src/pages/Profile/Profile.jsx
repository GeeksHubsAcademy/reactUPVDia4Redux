
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Profile.css";

//RDX

import { useSelector } from 'react-redux';
import { userData } from '../userSlice';

export const Profile = () => {

    const rdxCredentials = useSelector(userData);
    const navigate = useNavigate();

    useEffect(()=> {

        if(!rdxCredentials?.credentials?.token){
    
            navigate("/")
        }
    
      }, [rdxCredentials])

    return (
        <div className="profileDesign">
            Name : {rdxCredentials.credentials.firstName}
            Surname : {rdxCredentials.credentials.lastName}
        </div>
    )
}