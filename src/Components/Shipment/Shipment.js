import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const[category, setCategory] = useContext(CategoryContext)
    return (
        <div>
            <h1>This is shipment: {category}</h1>
            <button onClick={()=> setCategory("No gadget")}>increase from shipment</button>
        </div>
    );
};

export default Shipment;