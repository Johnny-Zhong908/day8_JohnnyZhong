import "./ProduCatogry.css"
import product from "./Product";

import productItem from "./ProductItem";
const ProductCatogry = () => {
    const Products = {
        name: "Football",
        price: 49.99,
        status: true
    }
    const Products = {
        name: "Football",
        price: 49.99,
        status: true
    }
    const Products = {
        name: "Football",
        price: 49.99,
        status: true
    }
    const Products = {
        name: "Football",
        price: 49.99,
        status: true
    }
}
    return (<div >
            {ProductCatogry.map((product,index))}=>{
                return <ProductItem productItem={product} key={name+index}/>)



}