import { createContext } from "react";

const base = {
    index: 0,
    setIndex: () => {}
}

const TechnologyContext = createContext(base);
export default TechnologyContext;