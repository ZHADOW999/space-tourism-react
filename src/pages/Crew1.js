import { useEffect } from "react";
import CrewBackground from "./starter-code/assets/crew/background-crew-desktop.jpg"

const Crew = () => {
    useEffect(()=>{
        document.body.style.backgroundImage=`url(${CrewBackground})`;
        return () =>{
            document.body.style.backgroundImage="";
        }
    },[])
    return ( 
        <div className="h-screen bg-cover bg-no-repeat bg-center " >
            yo
        </div>
     );
}
 
export default Crew;
