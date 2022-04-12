import { useState } from 'react';
import {BiMinusCircle, BiPlusCircle } from "react-icons/bi";

const QuantitySelector = (props) => {
    const [count, setCount] = useState(0);

    return (
        <div className='input-group sc-input'>
            <span className="input-icon pe-auto" id="basic-addon1" onClick={() => setCount(prevCount => prevCount > 0 ? prevCount - 1:0)}><BiMinusCircle/></span>
            <input type="number" className="form-control text-center pe-5" defaultValue={count} min={0} max={100} readOnly ></input>
            <span className="input-icon pe-auto" id="basic-addon1" onClick={() => setCount(prevCount => prevCount + 1)}><BiPlusCircle/></span>
        </div>
    )
}

export default QuantitySelector;