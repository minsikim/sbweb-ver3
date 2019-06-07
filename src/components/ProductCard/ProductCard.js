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
        const {name, detail, description, links, image} = this.props.data
        const linksMap = this.props.data.links.map((obj, idx)=>{
            return 
        })
        return(
            <div className={"ProductCard"}>
                <img src={require("../../assets/products/"+this.props.data.image)} alt=""/>
                <div className="ProductContent">
                    <h3>{this.props}</h3>
                    <p></p>
                    {this.state.open ? detail : null}
                    {linksMap}
                </div>
            </div>
        )
    }
}


export default ProductCard;