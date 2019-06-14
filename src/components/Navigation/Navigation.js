//import Libraries
import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom';

//import Components

import data from "../../data/data.json";

//import Style classNamees
import './Navigation.css';

class Navigation extends Component {

    render() {

        const {navigation} = data;

        return (
            <ul id="navigation">
                <li data-menuanchor={navigation[0]} className="active">
                    <div className="NavCircle"></div>
                    <a href="">
                        <svg id="nav-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 149.807 22.762">
                            <g id="group_501" data-name="group 501" transform="translate(-13.294 113.239)">
                                <g id="group_1" data-name="group 1" transform="translate(107.494 -108.179)">
                                <path id="path_1" data-name="path 1" className="cls-1" d="M3.245,1.79A6.989,6.989,0,0,0-3.742-5.2,6.989,6.989,0,0,0-10.734,1.79,6.99,6.99,0,0,0-3.742,8.78,6.99,6.99,0,0,0,3.245,1.79m-6.987-8.6a8.6,8.6,0,0,1,8.6,8.6,8.6,8.6,0,0,1-8.6,8.6,8.6,8.6,0,0,1-8.6-8.6,8.6,8.6,0,0,1,8.6-8.6" transform="translate(12.345 6.81)"/>
                                </g>
                                <g id="group_2" data-name="group 2" transform="translate(83.552 -110.857)">
                                <path id="path_2" data-name="path 2" className="cls-1" d="M3.245,2.348a6.989,6.989,0,0,0-6.99-6.989,6.989,6.989,0,0,0-6.99,6.989,6.991,6.991,0,0,0,6.99,6.99,6.991,6.991,0,0,0,6.99-6.99m-15.161-13.16a1.182,1.182,0,0,1,1.181,1.182v6.967a8.6,8.6,0,0,1,6.99-3.589,8.6,8.6,0,0,1,8.6,8.6,8.6,8.6,0,0,1-8.6,8.6,8.6,8.6,0,0,1-8.6-8.6v-13.16Z" transform="translate(12.346 8.931)"/>
                                </g>
                                <g id="group_3" data-name="group 3" transform="translate(59.612 -108.178)">
                                <path id="path_3" data-name="path 3" className="cls-1" d="M.374,1.455h13.6a6.99,6.99,0,0,0-13.6,0m15.4,1.611H.187A6.988,6.988,0,0,0,13.378,6.288h1.771a8.6,8.6,0,1,1,.628-3.222" transform="translate(1.424 5.534)"/>
                                </g>
                                <g id="group_4" data-name="group 4" transform="translate(35.67 -108.179)">
                                <path id="path_4" data-name="path 4" className="cls-1" d="M3.245,1.79A6.989,6.989,0,0,0-3.745-5.2,6.986,6.986,0,0,0-10.732,1.79,6.988,6.988,0,0,0-3.745,8.78a6.991,6.991,0,0,0,6.99-6.99m1.61,0v8.594H4.426A1.181,1.181,0,0,1,3.245,9.2V6.8a8.6,8.6,0,0,1-6.99,3.59,8.6,8.6,0,0,1-8.6-8.6,8.6,8.6,0,0,1,8.6-8.6,8.6,8.6,0,0,1,8.6,8.6" transform="translate(12.345 6.81)"/>
                                </g>
                                <g id="group_5" data-name="group 5" transform="translate(14 -110.858)">
                                <path id="path_5" data-name="path 5" className="cls-1" d="M.887,1.466a2.21,2.21,0,0,0,.283.075l6.212,1.59.033.009a5.282,5.282,0,0,1,2.541,8.946,9.041,9.041,0,0,1-5.828,2.209,9.937,9.937,0,0,1-7.5-3.421l.38-.33a1.183,1.183,0,0,1,1.563.013,8.322,8.322,0,0,0,5.557,2.124A7.391,7.391,0,0,0,8.86,10.9,3.668,3.668,0,0,0,7.014,4.7L.81,3.112.775,3.1l-.29-.076A4.024,4.024,0,0,1-1.758,1.362,4.03,4.03,0,0,1-.573-4.211a9.258,9.258,0,0,1,4.7-1.368,9.946,9.946,0,0,1,6.381,2.321l-.323.385a1.18,1.18,0,0,1-1.546.235,8.323,8.323,0,0,0-4.512-1.33v0A7.61,7.61,0,0,0,.289-2.85,2.417,2.417,0,0,0-.4.5a2.413,2.413,0,0,0,1.282.967" transform="translate(3.373 5.579)"/>
                                </g>
                                <g id="group_6" data-name="group 6" transform="translate(131.436 -108.18)">
                                <path id="path_6" data-name="path 6" className="cls-2" d="M0,0H.429A1.18,1.18,0,0,1,1.61,1.184v2.4a8.6,8.6,0,0,1,13.972-.01A8.6,8.6,0,0,1,31.165,8.594v8.594H29.552V8.594A6.989,6.989,0,0,0,16.481,5.152a8.61,8.61,0,0,1,.72,3.443v8.594H15.59V8.594a6.99,6.99,0,0,0-13.98,0v8.594H0Z" transform="translate(0 0.007)"/>
                                </g>
                            </g>
                        </svg>
                    </a>
                </li>
                <li >
                    <div className="NavCircle"></div>
                    <p onClick={() => this.props.navClick(3)}>스낵토마토란?></p>
                </li>
                <li>
                    <div className="NavCircle"></div>
                    상품 소개
                </li>
                <li>
                    <div className="NavCircle"></div>
                    <a href="#P3">재배 환경</a>
                </li>
                <li>
                    <div className="NavCircle"></div>
                    <a href="#P4">문 의</a>
                </li>
                <li><a href="/"><strong>KR</strong> / JP</a></li>
            </ul>
        )
    }
}

export default Navigation;