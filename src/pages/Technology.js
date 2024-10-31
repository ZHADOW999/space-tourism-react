import { useEffect } from "react";
import TechnologyBackground from "./starter-code/assets/technology/background-technology-desktop.jpg";

const Technology = () => {
    useEffect(()=>{
        document.body.style.backgroundImage=`url(${TechnologyBackground})`
    },[])
    return ( <div className="h-screen bg-cover bg-no-repeat bg-center ">

    </div> );
}
 
export default Technology;