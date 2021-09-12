import React ,{useContext} from 'react';
import styles from './Robot.module.css';
import {appContext} from '../AppProvide';
import {useAddToCart} from './useAddToCart';
export interface RobotProps{
    id:number;
    name:string;
    email:string;
}
const Robot:React.FC<RobotProps>=({id,name,email})=>{
    const {name:username} = useContext(appContext);
    const handleClick = useAddToCart();
    return <div className={styles.cardContainer}>
        <img src={`https://robohash.org/${id}`} alt="" />
        <p>{name}</p>
        <p>{email}</p>
        <p>作者：{username}</p>
        <button onClick={()=>handleClick(id,name)}>加入购物车</button>
    </div>
}
export default Robot;