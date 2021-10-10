
import './App.css';
import { Route, Switch} from  "react-router-dom"

import Home from './components/Home'
import About from './components/About';
import Service from './components/Service';
import Error from './components/Error';
import Param from './components/Param';
import Info from './components/Info';
import Profile from './components/Profile';
import Account from './components/Account';
import UseRoute from './components/UserRoute';
const App = () => {

  const Name = () => {
    return <h1>Hello , I am a Name page</h1>
  }
  return (
    
    
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about/Name" component={Name} />
      <Route path="/service" component={Service} />
      <Route path="/param/:id" component={Param} />
      <Route path="/user/info" component={Info} />
      <Route path="/user/profile" component={Profile} />
      <Route path="/user/account" component={Account} />
      <Route path="/user" component={UseRoute} />
      
      <Route component={Error} />
    
    </Switch>
    
  );
}

export default App;
