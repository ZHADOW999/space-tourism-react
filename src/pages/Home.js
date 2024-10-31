

import { useEffect } from "react";
import homeBackground from "./starter-code/assets/home/background-home-desktop.jpg";


const Home = () => {
    useEffect( () =>{
        document.body.style.backgroundImage=`url(${homeBackground})`
        
        return () =>{
            document.body.style.backgroundImage="";
        }
    },[])    
    return ( 
        <html className=" h-screen bg-cover bg-no-repeat bg-center " >
            
            <div>
                <div>
                    hi
                </div>
            </div>
        </html>                      
   );
 }
 
export default Home;