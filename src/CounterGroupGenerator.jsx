import {useState} from "react";
import counter from "./Counter";

const CounterGroupGenerator =()=>{
    const [size,setSize] = useState(0);
    const handleChange = (event) =>{
        setSize(event.target.value);
    };
    const incrementsize =() =>{
        setSize(size+1);
    };
    const decresmentsize =() =>{
        setSize(size-1);
    };
    const reset =() =>{
        setSize(s);
    }
    return(
        <div>
            <span>Size:</span>
            <span>{size}</span>
            <button></button>
            <input min={0} max={20} type={"number"} value={size} onChange={handleChange}/>
            <button></button>
        </div>
    )
}
export default CounterGroupGenerator;