import React from "react";
import Display from "./Display";
import Wheel from "./Wheel";
import "../IpodCss/case.css"

class Case extends React.Component{

    render(){
            const{audio,active,menuItems,musicItems,currentmenu,playing,togglePlayPause,updateActiveMenu,changeMenuBackward,changeMenuForward} = this.props;
        return(
            <>
            <div className="case-container">
                <div className="case">
                <Display audio={audio} active={active} menuItems={menuItems} musicItems={musicItems} currentmenu={currentmenu}  playing={playing}/>
                <Wheel audio={audio} active={active} menuItems={menuItems} musicItems={musicItems} currentmenu={currentmenu}  playing={playing} togglePlayPause={togglePlayPause}
            updateActiveMenu={updateActiveMenu} changeMenuBackward={changeMenuBackward} changeMenuForward = {changeMenuForward}/>
            </div>
            </div>
            </>
        )
    }
}

export default Case;                                                                                                                                                                                              