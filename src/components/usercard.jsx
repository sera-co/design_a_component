// write the component code here
import React from "react";

const Usercard=()=>{
    const profilePhoto = "https://upload.wikimedia.org/wikipedia/commons/a/a5/European_Rabbit%2C_Lake_District%2C_UK_-_August_2011.jpg";
    const name="Sera Shine"
    const email="sera@gmail.com";
    const phoneNumber="1234568790";
    const address="123 Main Street";

    return(
        <div>
        <img src={profilePhoto} style={{width:"100px",height:"100px"}}/>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{phoneNumber}</p>
        <p>{address}</p>
        </div>
    )
}
export default Usercard;