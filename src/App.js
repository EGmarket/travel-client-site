import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Main/Home';
import AuthProvider from './Context/AuthProvider';
import Header from './components/Common/Header/Header';
import Login from './components/Login/Login';
import MyOrders from './Admin/MyOrders';
import ManageOrders from './Admin/ManageOrders';
import AddNew from './Admin/AddNew';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route  path="/home">
              <Home></Home>
          </Route>
          <Route  path="/login">
              <Login></Login>
          </Route>
          <Route  path="/orders">
              <MyOrders></MyOrders>
          </Route>
          <Route  path="/manageorder">
              <ManageOrders></ManageOrders>
          </Route>
          <Route  path="/addnew">
              <AddNew></AddNew>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
      
  );
}

export default App;
