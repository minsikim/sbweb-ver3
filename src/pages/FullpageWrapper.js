import React from "react";
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

import Layout from "../hoc/Layout/Layout";
import MySection from "./MySection";

import "./Fullpage.css";

const anchors = ["P1", "P2", "P3", "P4"];

const FullpageWrapper = () => (
    <Layout>
        <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        // sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
        render={({ state, fullpageApi }) => {
            return (
            <div>
                <MySection content={"Slide down!"} />
                <MySection content={"Keep going!"} />
                <MySection content={"Slide up!"} />
                <MySection content={"Slide up!"} />
            </div>
            );
        }}
        />
    </Layout>
  );

export default FullpageWrapper;