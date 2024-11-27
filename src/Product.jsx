import "./Product.css"

const Product = () =>{
    const  productItem ={
        name:"Football",
        price:"49.99",
        status:false
    }
    return (<div className={"product-item-wrapper"}>
        <span>{productItem.name}</span>
        <span >{productItem.price}</span>
        <span >{productItem.status}</span>
    </div>)

}
export default Product;