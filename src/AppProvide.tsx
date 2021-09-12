import {createContext,useState} from 'react';
interface defaultValProps{
    name:string;
    shoppingCart:{items:{id:number;name:string}[]}
}
const defaultContextValue:defaultValProps ={
    name:'josey',
    shoppingCart:{items:[]}
}
export const appContext = createContext(defaultContextValue);
export const appSetStateContext = createContext(undefined)
const AppProvide:React.FC=(props)=>{
    const [state,setAppState] = useState(defaultContextValue);
    return <appContext.Provider value={state}>
        <appSetStateContext.Provider value={setAppState}>
            {props.children}
        </appSetStateContext.Provider>
    </appContext.Provider>
}
export default AppProvide;