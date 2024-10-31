import { useEffect } from "react";
import DestinationBackground from './starter-code/assets/destination/background-destination-desktop.jpg'

const Destination = () => {
    useEffect(() =>{
        document.body.style.backgroundImage=`url(${DestinationBackground})`;
        return () =>{
            document.body.style.backgroundImage="";
        }
    },[])
    return ( 
        <div className="h-screen bg-cover bg-no-repeat bg-center ">
            hey
        </div>
     );
}
 
export default Destination