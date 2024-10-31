import { useEffect,useState } from "react";
//import homeBackground from "./starter-code/assets/home/background-home-desktop.jpg";


const Home = () => {
    const [bgImage, setBgImage] = useState('/starter-code/assets/home/background-home-desktop.jpg');
    useEffect( () =>{
        const updateBackground = () => {
            const width = window.innerWidth;
            if (width <= 768) setBgImage('/starter-code/assets/home/background-home-mobile.jpg');
            else if (width <= 1024) setBgImage('/starter-code/assets/home/background-home-tablet.jpg');
            else setBgImage('/starter-code/assets/home/background-home-desktop.jpg');
          };
      
          updateBackground(); // Initial check
          window.addEventListener('resize', updateBackground);
          return () => window.removeEventListener('resize', updateBackground);
    },[])    
    return ( 
        <div style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Page content */}
    </div>
     );
}
 
export default Home;

// import { useEffect } from "react";
// import homeBackground from "./starter-code/assets/home/background-home-desktop.jpg";


// const Home = () => {
//     useEffect( () =>{
//         document.body.style.backgroundImage=`url(${homeBackground})`
        
//         return () =>{
//             document.body.style.backgroundImage="";
//         }
//     },[])    
//     return ( 
//         <html className=" h-screen bg-cover bg-no-repeat bg-center " >
            
//             <div>
//                 <div>
//                     hi
//                 </div>
//             </div>
//         </html>
//      );
// }
 
// export default Home;