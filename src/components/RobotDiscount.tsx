import React ,{useContext} from 'react';
import styles from './Robot.module.css';
import {appContext} from '../AppProvide';
import { RobotProps } from './Robots';
import { useAddToCart } from './useAddToCart';

const RobotDiscount:React.FC<RobotProps>=({id,name,email})=>{
    const {name:username} = useContext(appContext);
    const handleClick = useAddToCart();
    return <div className={styles.cardContainer}>
        <img src={`https://robohash.org/${id}`} alt="" />
        <p>打折商品</p>
        <p>{name}</p>
        <p>{email}</p>
        <p>作者：{username}</p>
        <button onClick={()=>handleClick(id,name)}>加入购物车</button>
    </div>
}
export default RobotDiscount;