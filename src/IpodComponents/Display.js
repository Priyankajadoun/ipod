import React from "react";
import Menu from "./Menu";
import Music from "./Music";
import Settings from "./Settings";
import Song from "./Song";
import Game from "./Game";
import "../IpodCss/display.css"


class Display extends React.Component{

    render(){
        const{currentmenu,active,menuItems,musicItems,playing,audio} = this.props;
        return(
            <>
            <div className="display">
                {console.log("musicItems",musicItems)}
                {currentmenu ===-1 && <Menu menuItems={menuItems} active={active} />}
                {currentmenu===0 && <div className="blank-div"><h1 className="empty-text">Cover Flow</h1></div>}
                {currentmenu===1 && <Music musicItems={musicItems} active={active}/>} 
                {currentmenu===2 && <Game/>}
                {currentmenu===3 && <Settings />}
                {currentmenu===4 && <Song playing={playing}active={active} audio = {audio}/>}  
                {currentmenu===5 && <div className="blank-div"><h1 className="empty-text">Artist</h1></div>}  
                {currentmenu===6 && <div className="blank-div"><h1 className="empty-text">Album</h1></div>}
            </div>
            </>
        )
    }
}

export default Display;