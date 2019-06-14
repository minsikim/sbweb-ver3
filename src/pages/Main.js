import React, {Component} from "react";
import ReactDOM from "react-dom";
// import "fullpage.js/vendors/scrolloverflow";
// Optional. When using scrollOverflow:true
// import ReactFullpage from "@fullpage/react-fullpage";
import ReactPageScroller from "react-page-scroller"; 

import Layout from "../hoc/Layout/Layout";
// import Section from "./Section";
import Navigation from "../components/Navigation/Navigation";
import Section1 from "./Section1";
import Section2 from "./Section2";

import "./Fullpage.css";
import "./Section.css";

// const anchors = ["P1", "P2", "P3", "P4"];

// const pluginWrapper = () => {
//     require('fullpage.js/vendors/scrolloverflow');
//     require('./statics/fullpage.scrollHorizontally.min');
//   };

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {currentPage: 1};
        this._pageScroller = null;
    }
    goToPage = (eventKey) => {
        this._pageScroller.goToPage(eventKey);
        console.log("[Main.js] goToPage()", eventKey)
    };

    pageOnChange = (number) => {
        if(this.state.currentPage !== number){
            this.setState((prevState) => { 
                if(prevState.currentPage !== number){
                    return {currentPage: number}
                }
                
            });
            console.log(number);
        }
    };

    render(){

        return(
            <React.Fragment>
                <Navigation navClick={this.pageOnChange}/>
                <ReactPageScroller 
                    ref={c => this._pageScroller = c} 
                    pageOnChange={this.pageOnChange}
                    animationTimer={500}
                    transitionTimingFunction={"ease-out"}>
                    <Section1 onClick={this.pageOnChange(2)}></Section1>
                    <Section2></Section2>
                    <Section1></Section1>
                    <Section2></Section2>
                </ReactPageScroller>
            </React.Fragment>
        )
    }

}

export default Main;