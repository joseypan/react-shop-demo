import React, { useEffect, useState } from 'react';
import Robot from './components/Robots';
import styles from './App.module.css';
import logo from './assets/images/logo.svg'
import ShoppingCart from './components/ShoppingCart';
import RobotDiscount from './components/RobotDiscount';
function App() {
  const [count,setCount]=useState(0);
  const [robotList,setRobotList] = useState([] as any[]);
  // 添加loading状态
  const [loading,setLoading] = useState(false);
  // 添加错误提示
  const [errorMsg,setErrorMsg] = useState<string>();
  useEffect(()=>{
    document.title=`点击了${count}次`
  },[count])
  useEffect(()=>{
    setLoading(true);
    const fetchData = async()=>{
      try{
        const response=await fetch(`https://jsonplaceholder.typicode.com/users`)
        const data=await response.json();
        setRobotList(data);
      }catch(err:any){
        setErrorMsg(err.message)
      }
    }
    fetchData()
    setLoading(false);
  },[])
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img className={styles.appLogo} src={logo} alt="" />
        <h1>这是robot标题</h1>
      </div>
      <div>
        <button onClick={()=>setCount(count+1)}>click count</button>
        <span>count:{count}</span>
        {(!errorMsg|| errorMsg!=='' )&& <div>
          请求错误：{errorMsg}
        </div>}
      </div>
      {/* 购物车 */}
      <ShoppingCart />
      <div className={styles.robotList}>
      {
        loading?<div>loading 加载中...</div>:robotList.map((row,index)=> index%2===0?<Robot id={row.id} name={row.name} email={row.email} key={row.id} />:<RobotDiscount id={row.id} name={row.name} email={row.email} key={row.id} /> )
      }
      </div>
    </div>
  );
}

export default App;
