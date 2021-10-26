import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import Create from './Components/Create.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BlogDetails from './Components/BlogDetails.js';

function App() {
    return ( 
    <Router>
        <div className = "App"> 
         <Navbar />
         <div className="content"> 
            <Switch>
              <Route exact path="/">
                <Home />
              </Route> 
              <Route path="/Create">
                <Create />
              </Route>
              <Route path="/blogs">
                <BlogDetails />
              </Route>  
            </Switch> 
         </div> 
        </div>
    </Router>
    );
}

export default App;