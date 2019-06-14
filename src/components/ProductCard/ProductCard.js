//import Libraries
import React, {Component} from 'react';

//import Components

//import Styles
import './ProductCard.css';

class ProductCard extends Component{
    state = {
        open: false
    }
    render(){
        // const {name, detail, description, links, image} = this.props.data;
        const {name, description, links, image} = this.props.data;
        // const linksMap = links.map((obj, idx)=>{
        //     return 
        // })
        return(
            <div className={"ProductCard"}>
                <img className="ProductImage" src={require("../../assets/products/"+image)} alt=""/>
                <div className="ProductContent">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    {/* {this.state.open ? detail : null} */}
                    {/* {linksMap} */}
                </div>
            </div>
        )
    }
}


export default ProductCard;