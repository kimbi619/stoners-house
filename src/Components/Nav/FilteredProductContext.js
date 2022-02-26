import React,{ useState, createContext} from 'react'

export const FilteredProductContext = createContext()

export const  FilteredProductContextProvider=(props)=>{
    const [cart, setCart] = useState([])
    // console.log(cart);
    return(
        <FilteredProductContext.Provider value={[cart, setCart]}>
            {props.children}
        </FilteredProductContext.Provider>
    )
}