import React from "react";
import img from "../static/game.png"
import "../IpodCss/settings.css"


class Games extends React.Component{
    render(){
        return(
            <>
           
            <div className="setting">
            <img  className="img" src={img} alt="Img"/>
            <h2>Games</h2>
            </div>
            
            </>
        )
    }
}
export default Games;