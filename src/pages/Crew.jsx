import { useState } from 'react';
import MemberInfo from './Crew/MemberInfo';
import NavigationContext from './Crew/Context'
import { CrewData } from './Crew/CrewData';


const Crew = () => {
  const [index,setIndex] = useState(0)
  return (
    <NavigationContext.Provider value={{index,setIndex}}>  
      <MemberInfo
      position={CrewData[index].position}
      name={CrewData[index].name}
      description={CrewData[index].description}
      image={CrewData[index].image}
      />
    </NavigationContext.Provider>
  );
};

export default Crew;
