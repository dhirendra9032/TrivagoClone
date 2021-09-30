// import "./App.css";
// import { Routes } from "./Routes/Routes";

// function App() {
//   return (
//     <div className="App">
//       <Routes />
//     </div>
//   );
// }

// export default App;

import Navbar from "../src/Components/Navbar/Navbar";
import { Routes } from "./Routes/Route";

function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <Navbar/>  
      <Routes/>
    </div>
  );   
}

export default App;
