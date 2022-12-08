import { createContext } from "react";

const base = {
    index: 0,
    setIndex: () => {}
}

const NavigationContext = createContext(base);
export default NavigationContext;