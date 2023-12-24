import React from "react";
import "../IpodCss/menu.css"

class Menu extends React.Component{
   

    render(){
        const{menuItems,active} = this.props;
        return(
        
          <div className="menu-container">
                <div className="menu">
                    <h3 className="heading">ipod.js</h3>
                    <ul>
                        {
                            menuItems.map((element,index)=>{
                                return active===index?<li key={index} className="active"> &nbsp;{element}</li>:<li key={index}>&nbsp;{element}</li>
                            })
                        }
                    </ul>                                                      
                </div>
          </div>
        )
    }
}

export default Menu;