import React from "react";
import "../IpodCss/menu.css"


class Music extends React.Component{
    render(){
        const{musicItems,active} = this.props;
        return(
            <div className="menu-container">
            <div className="menu">
                <h3 className="heading">Music</h3>
            <ul>
                {console.log("musicItems",musicItems)}
                {musicItems.map((element,index)=>{
                    return active===index?<li key={index} className="active">&nbsp;{element}</li>:<li key={index}  >&nbsp;{element}</li>
                })}
            </ul>
            </div>
            </div>
        )
    }
}

export default Music;