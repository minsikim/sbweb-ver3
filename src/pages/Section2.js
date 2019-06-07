import React from "react";

import ProductCard from "../components/ProductCard/ProductCard";

import data from "../data/data.json"

class Section1 extends React.Component {



    render() {

        const productCards = data.section2.products.map((obj, idx)=>{
            return <ProductCard data={obj} key={idx}/>
        })

        return (
            <React.Fragment>
                <h1 className="MainTitle">상품소개</h1>
                <p className="MainTitle">{"여기는 조금 더 구체적인 내용을 쓰시면 됩니다. 쓸 내용이 없다면 생략합니다.\n여기는 조금 더 구체적인 내용을 쓰시면 됩니다. 쓸 내용이 없다면 생략합니다.\n여기는 조금 더 구체적인 내용을 쓰시면 됩니다. 쓸 내용이 없다면 생략합니다.\n여기는 조금 더 구체적인 내용을 쓰시면 됩니다. 쓸 내용이 없다면 생략합니다.\n여기는 조금 더 구체적인 내용을 쓰시면 됩니다. 쓸 내용이 없다면 생략합니다.\n"}</p>
                <div className="ProductCards">
                    {productCards}
                </div>
            </React.Fragment>

      );
    }
  }

  export default Section1;