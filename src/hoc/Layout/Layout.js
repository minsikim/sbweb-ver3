//import Libraries
import React, {Component} from 'react';
import { Helmet } from 'react-helmet';

//import Components
import Navigation from '../../components/Navigation/Navigation';

//import Styles
import './Layout.css';

let addClass = "";

class Layout extends Component{

    // componentDidMount() {
    //     if(!this.props.keepScroll)window.scrollTo(0, 0);

    //     window.location.hash = window.decodeURIComponent(window.location.hash);
    //     const scrollToAnchor = () => {
    //         const hashParts = window.location.hash.split('#');
    //         if (hashParts.length > 2) {
    //         const hash = hashParts.slice(-1)[0];
    //         document.querySelector(`#${hash}`).scrollIntoView();
    //         }
    //     };
    //     scrollToAnchor();
    //     window.onhashchange = scrollToAnchor;
    // }

    render(){
        return(
            <div className={"Layout"}>
                <Helmet>
                    <title>{"새봄 - 깨끗한 토마토"}</title>
                    <meta name="description" content="언제 먹어도 맛있고, 간식처럼 즐길 수 있는 특수토마토류를 재배하는 농업회사 새봄입니다. 새봄의 모습을 보여드리기 위해 열심히 홈페이지를 준비 중에 있습니다. 곧 이쁘게 단장한 모습으로 농업회사 새봄이 다가가겠습니다. 감사합니다." />
                </Helmet>
                <Navigation/>
                <div className={'ContentWrapper'}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}


export default Layout;