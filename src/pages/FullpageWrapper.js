import React from "react";
import ReactDOM from "react-dom";
// import "fullpage.js/vendors/scrolloverflow";
// Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

import Layout from "../hoc/Layout/Layout";
import Section from "./Section";
import Section1 from "./Section1";

import "./Fullpage.css";
import "./Section.css";

const anchors = ["P1", "P2", "P3", "P4"];

// const pluginWrapper = () => {
//     require('fullpage.js/vendors/scrolloverflow');
//     require('./statics/fullpage.scrollHorizontally.min');
//   };

const FullpageWrapper = () => (
    <Layout>
        <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        sectionsColor={["#222222", "#eeeeee", "#eeeeee"]}
        render={({ state, fullpageApi }) => {
            return (
            <ReactFullpage.Wrapper>
                <Section>
                    <Section1/>
                </Section>
                <Section content={"Keep going!"} />
                <Section content={"Slide up!"} />
                <Section content={"Slide up!"} />
            </ReactFullpage.Wrapper>
            );
        }}
        />
    </Layout>
  );

export default FullpageWrapper;