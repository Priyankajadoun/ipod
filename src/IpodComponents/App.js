import React from "react";
import Case from "./Case";
import song1 from "../static/songs/Abhi_Toh_Party_Shuru_Hui_Hai_-_Khoobsurat(wapking.cc).mp3";


class App extends React.Component{
    constructor(){
        super();
        this.state={
         active:0,
         menuItems:["Cover Flow","Music","Games","Settings"],
         musicItems:["All Songs", "Artist", "Albums"],
         lengthMenuKey:{"-1":3,1:2,},
         menuMapping:{"-1":[0,1,2,3],1:[4,5,6]},
         currentmenu:-1,
         navigationStack:[],//used for navigation forward and backward
         playing:false,
         audio: new Audio(song1),
        }
    }


    // toggle song play amd pause

togglePlayPause =()=>{
    console.log("togglePlayPause is clicked")
    if(this.state.currentmenu===-2){
      return;
    }
    if(this.state.playing===true){
      this.setState({playing:false});
      this.state.audio.pause();
    }
    if(this.state.playing===false){
      this.setState({playing:true});
      this.state.audio.play();
    }
  }

  // function for: update active menu while rotating on the track -wheel

updateActiveMenu = (direction,menu) =>{
    console.log("updateActiveMenu is clicked")
    if(menu !== -1 && menu !==1 ){
      return;
    }
    let min=0;
    let max=0;
  
    max= this.state.lengthMenuKey[menu];
    if(direction ===1){
      if(this.state.active>=max){
        this.setState({active:min})
      }else{
        this.setState({active:this.state.active+1})
      }
    }else{
      if(this.state.active<=min){
        this.setState({active:max});
      }else{
        this.setState({active:this.state.active-1})
      }
    }
  }

  
// function for: Change menu backward

changeMenuBackward=()=>{
    console.log("changeMenuBackward is clicked")
    const navigationStack=this.state.navigationStack.slice();
    if(this.state.currentmenu===-1){
      return;
    }
    else{
      const prevId = navigationStack.pop();
      this.setState({
        currentmenu:prevId,
        navigationStack:navigationStack,
        active:0, 
  
      });
      return;
    }
  }

  // fuction for: change menu forward


changeMenuForward = (id, fromMenu) => {

    const navigationStack = this.state.navigationStack.slice();
  
    if ( fromMenu !== -1 && fromMenu !== 1 && fromMenu !== 4 && fromMenu !== 3 ) {
      return;
    }
  
 
  
    if (fromMenu === -1) {
      navigationStack.push(this.state.currentmenu);
      this.setState({ currentmenu: id, navigationStack: navigationStack, active: 0 });
      return;
    }
  
    if (fromMenu === 4) {
      this.togglePlayPause();
      return;
    }
    
    navigationStack.push(this.state.currentmenu);
  
  
    const currentmenuID = this.state.menuMapping[fromMenu][id];
    this.setState({ currentmenu: currentmenuID, navigationStack: navigationStack, active: 0 });
  
  }


    render(){
      const{audio,active,menuItems,musicItems,currentmenu,playing,togglePlayPause,updateActiveMenu,changeMenuBackward,changeMenuForward} = this.state;
        return(
            <>
            {console.log("musicItems",musicItems)}
          <Case active={active} menuItems={menuItems} musicItems={musicItems} audio={audio}
            currentmenu={currentmenu}  playing={playing} togglePlayPause={this.togglePlayPause}
            updateActiveMenu={this.updateActiveMenu} changeMenuBackward={this.changeMenuBackward} changeMenuForward = {this.changeMenuForward}
            />
            </>
        )
    }
} 

export default App;


