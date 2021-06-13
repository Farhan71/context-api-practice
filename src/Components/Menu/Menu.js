import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Category from '../Category/Category';


const Menu = () => {
    const category = useContext(CategoryContext)
    return (
        <div style={{border: "2px solid purple"}}>
            <h1>This is menu: {category} </h1>
            <Category></Category>
            
        </div>
    );
};

export default Menu;