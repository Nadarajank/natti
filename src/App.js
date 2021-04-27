import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import Header from './Header';
import Feed from './Feed';
import Login from './Login';
import Contact from './Contact';
import Home from './Home';
import Signup from './Signup';




function App() {

    //const [myname, setName] = useState("nadarajan");
  
  return (
    <Router>
    
      <Header />
      <Switch>
      <Route path="/Home">
            <Home />
      </Route>
      <Route path="/Login">
            <Login />
      </Route>
      <Route path="/Contact">
            <Contact />
      </Route>
      <Route path="/Feed">
            <Feed />
      </Route>
      <Route path = "/Signup">
         <Signup />
      </Route>
     
      </Switch>
  
    </Router>
  );
}

export default App;
