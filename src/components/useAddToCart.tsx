import React,{useContext} from 'react';
import { appSetStateContext } from '../AppProvide';
export const useAddToCart:React.FC=()=>{
    const setData = useContext(appSetStateContext);
    const handleClick = (id,name)=>{
    if(setData){
        setData((state)=>{
            return {
                ...state,
                shoppingCart: {
                  items: [...state.shoppingCart.items, {id, name}]
                }
              }
        })
    }
}
    return handleClick;
}