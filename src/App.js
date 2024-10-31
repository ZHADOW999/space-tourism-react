import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew1";
import Technology from "./pages/Technology";
import Layout from "./layout";
import { Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <div>
      <NavBar />
      <Routes>
      
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* This renders Home at the root path */}
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// //import { BrowserRouter as Router,Switch,Route } from "react-router-dom";


// import NavBar from "./pages/NavBar";

// import Home from "./pages/Home";

// // import Technology from "./pages/Technology";
// import Destination from "./pages/Destination";
// import Crew from "./pages/Crew1";

// import Technology from "./pages/Technology";
// import Layout from "./layout";
// import { Route, Routes } from "react-router-dom";


// function App() {
  
//   return (
    
//     <div>
      
//       <NavBar/>
        
//           <Routes>
//             <Route path="/" element={<Layout/>}/>
//             <Route path="/" element={<Home />} />
            
//             <Route path="/destination" element={<Destination />} />
//             <Route path="/crew" element={<Crew />} />
//             <Route path="/technology" element={<Technology />} />
            
//           </Routes>
        
        
//         </div>
//         // <Router>
//     //   <div>
//     //     <NavBar/>
//     //     <div>
//     //     <Route path="">
//     //           <Layout/>
//     //         </Route>
//     //       <Switch>
          
//     //         <Route exact path="/">
//     //           <Home/>
//     //         </Route>
//     //         <Route path="/destination">
//     //           <Destination/>
//     //         </Route>
//     //         <Route path="/crew">
//     //           <Crew/>
//     //         </Route>
//     //         <Route path="/technology">
//     //           <Technology/>
//     //         </Route>
//     //       </Switch>
//     //     </div>
//     //   </div>
//     // </Router>
    
//   );
// }

// export default App;

