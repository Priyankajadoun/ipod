import React from "react";
import img from "../static/settings.png"
import "../IpodCss/settings.css"


class Settings extends React.Component{
    render(){
        return(
            <>
           
            <div className="setting">
            <img  className="img" src={img} alt="Img"/>
            <h2>Settings</h2>
            </div>
            
            </>
        )
    }
}
export default Settings;