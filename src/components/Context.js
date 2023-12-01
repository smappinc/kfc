import { createContext, useContext, useState } from "react";

//  creating a new context named MyContext using the createContext function. 
// Context provides a way to pass data through the component tree without having to pass props manually at every level.
const MyContext = createContext();

export const useMyContext = () => {
    return useContext(MyContext)
};



/**
 * 
 * This exports a component named MyContextProvider. This component serves as the provider for the context, and it wraps its children with MyContext.Provider.
 * It uses the useState hook to create a piece of state named cart and a function setCart to update that state. The initial value of cart is an empty array.
 * It creates an object named allObj containing the cart state and the setCart function.
 * The value prop of MyContext.Provider is set to allObj, making these values accessible to any component that subscribes to the MyContext context using the useMyContext hook.
 * 
 */
export const MyContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);


    const allObj = {
        cart,
        setCart,
    };

    return <MyContext.Provider value={allObj}>{children}</MyContext.Provider>;

};