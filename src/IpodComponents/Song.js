import React from "react";

import songImg1 from "../static/song1Img.jpg";

import "../IpodCss/playing.css";

class Song extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentTime:0,
        
        }
        this.intervalId = "";
    }

    // logic for updating the current music playbreak

    componentDidMount(){
        const{audio}=this.props;
        this.setState({currentTime:audio.currentTime});
        this.intervalId=setInterval(()=>{
            this.setState({currentTime:this.props.audio.currentTime});
        },100);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }
    render(){
        const{playing,audio}=this.props;
        
        var currentTimeRender = Math.floor(this.state.currentTime/60)+":"+Math.floor(this.state.currentTime%60);

        var durationRender = Math.floor(audio.duration/60)+":"+ Math.floor(audio.duration%60);

        const percetageRender ={width:(this.state.currentTime/audio.duration*100)+"%"};
        if(durationRender==="NaN:NaN"){
            durationRender="0:00";
        }
        if(Math.floor(this.state.currentTime%60 < 10)){
            var currentTimeRender = Math.floor(this.state.currentTime/60)+":0"+Math.floor(this.state.currentTime%60);
        }
        return(
           <div className="now-playing-container">
              <div className="song-details">
                <img src={songImg1} alt="songImg"/>
                <div className="song-info">
                    <h6 className="descr">01.&nbsp; Abhi Toh Party Shuru Hui Hai</h6>
                    <p className="descr">Badshah</p>
                    {/* {console.log(playing,"playing")} */}
                    {playing && <h4 className="play-pause-nav">Playing</h4>}
                    {!playing && <h4 className="play-pause-nav">Paused</h4>}

                </div>
                </div>  
              <div className="status">
                {currentTimeRender}
                <div id="progress">
                    <div style={percetageRender} id="progress-bar"></div>
                </div>
                {durationRender}
                </div>  

           </div>
        )
    }
}
export default Song;