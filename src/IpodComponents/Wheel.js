import React from "react";
import { FaForward } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { IoMdPause } from "react-icons/io";
import ZingTouch from "zingtouch";
import "../IpodCss/wheel.css"

class Wheel extends React.Component{

    render(){
        const{changeMenuForward,active,currentmenu} = this.props;
        return(
            <div className="Wheel-contaier" id="Wheel-contaier">
            <div className="wheel" id="wheel" >
                <div className="controll" id="menu">
                    <div>MENU</div>
                </div>
                <div className="controll" id="forward">
                <FaForward  />
                </div>
                <div className="controll" id="play-pause">
                <div>
                <FaPlay/>
                <IoMdPause />
                </div>
                </div>
                <div className="controll" id="reverse">
                <FaBackward/>
                </div>
            </div>
            <div className="blank" id="blank" onClick={() => { changeMenuForward(active, currentmenu) }}></div>

        </div>
        )
    }

    wheelControll=(e)=>{
        const {updateActiveMenu,currentmenu}=this.props;
        if(e.detail.distanceFromOrigin===0){
            this.angle=e.detail.angle

        }
        if(Math.abs(this.angle-e.detail.angle)>100){
            this.angle=Math.abs(e.detail.angle);
            if(e.detail.distanceFromLast===0){
                return;
            }else if(e.detail.distanceFromLast<0){
                updateActiveMenu(1,currentmenu);
            }else{
                updateActiveMenu(0,currentmenu);  
            }
        }
        else if(Math.abs(this.angle-e.detail.angle)>15){
            this.angle=Math.abs(e.detail.angle);
            if(e.detail.distanceFromLast===0){
                return;
            }
            else if(e.detail.distanceFromLast>0){
                updateActiveMenu(1,currentmenu);
            }
            else{
                updateActiveMenu(0,currentmenu);
            }
        }
    }

    componentDidMount(){
        const {changeMenuBackward,togglePlayPause,
            // seekSongForward, seekSongReverse
        }=this.props;
       const wheelControll = this.wheelControll;
        const wheel = document.getElementById("wheel");
        const activeRegion = ZingTouch.Region(wheel);
        const menuIcon = document.getElementById("menu");
        const playPause = document.getElementById("play-pause");
        // const reverse = document.getElementById("reverse");
        // const forward = document.getElementById("forward");

        // const longTapGesture = new ZingTouch.Tap({
        //     maxDelay:10000,
        //     numInputs: 1,
        //     tolerance: 1,
        // })
        activeRegion.bind(menuIcon,"tap",function(e){
            changeMenuBackward();
        })
        activeRegion.bind(wheel,"rotate",function(e){
            wheelControll(e);
        })
        activeRegion.bind(playPause,"tap",function(e){
            togglePlayPause();
        })
        // activeRegion.bind(reverse,longTapGesture,function(e){
        //     seekSongReverse(e);
        // })
        // activeRegion.bind(forward,longTapGesture,function(e){
        //     seekSongForward(e);
        // })
        
    }

}

export default Wheel;