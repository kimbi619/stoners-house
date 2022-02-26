import React,{ useState, createContext} from 'react'
import useLocalStorage from '../../UseLocalStorage'

export const StoreContext = createContext()

export const  StoreContextProvider=(props)=>{
    // const [store, setStore] = useState([])
    const [store, setStore] = useLocalStorage('store', [])
    return(
        <StoreContext.Provider value={[store, setStore]}>
            {props.children}
        </StoreContext.Provider>
    )
}