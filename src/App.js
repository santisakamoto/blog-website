import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js'


function App() {
    return ( 
        <div className = "App"> 
         <Navbar />
         <div className="content"> 
           <Home />
         </div> 
        </div>
    );
}

export default App;