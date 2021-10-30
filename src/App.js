import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Main/Home';
import AuthProvider from './Context/AuthProvider';
import Header from './components/Common/Header/Header';
import Login from './components/Login/Login';
import MyOrders from './Admin/MyOrders';
import ManageOrders from './Admin/ManageOrders';
import AddNew from './Admin/AddNew';
import OfferAdd from './Admin/OfferAdd/OfferAdd';
import HoneyAdd from './Admin/HoneyAdd/HoneyAdd';
import ServiceDetails from './components/Pages/Details/ServiceDetails';
import HoneyDetails from './components/Pages/Details/HoneyDetails/HoneyDetails';
import OfferDetails from './components/Pages/Details/OfferDetails/OfferDetails';
import UpdateOrders from './Admin/UpdateOrders';
import Footer from './components/Common/Footer/Footer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UpdateStatus from './Admin/UpdateStatus';
import Honeys from './components/Pages/Home/HoneyTours/Honeys';
import Offers from './components/Pages/Home/Offers/Offers';
import PopularTours from './components/Pages/Home/PopularTours/PopularTours';
import PopularDetails from './components/Pages/Details/PopularDetails/PopularDetails';
import PopularAdd from './Admin/PopularAdd/PopularAdd';

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
          <Route exact  path="/offers">
              <Offers></Offers>
          </Route>
          <PrivateRoute  path="/honeytours">
            <Honeys></Honeys>
          </PrivateRoute>
          <PrivateRoute  path="/populartours">
            <PopularTours></PopularTours>
          </PrivateRoute>
          <PrivateRoute  path="/orders">
              <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute  path="/manageorder">
              <ManageOrders></ManageOrders>
          </PrivateRoute>
          <PrivateRoute  path="/addnew">
              <AddNew></AddNew>
          </PrivateRoute>
          <PrivateRoute  path="/offeradd">
              <OfferAdd></OfferAdd>
          </PrivateRoute>
          <PrivateRoute  path="/honeyadd">
              <HoneyAdd></HoneyAdd>
          </PrivateRoute>
          <PrivateRoute  path="/popularAdd">
              <PopularAdd></PopularAdd>
          </PrivateRoute>
          <PrivateRoute  path="/honey/:honeyId">
              <HoneyDetails></HoneyDetails>
          </PrivateRoute>
          <PrivateRoute  path="/popular/:popularId">
              <PopularDetails></PopularDetails>
          </PrivateRoute>
          <PrivateRoute exact path="/offers/:offerId">
              <OfferDetails></OfferDetails>
          </PrivateRoute>
          <PrivateRoute exact path="/update/:orderId">
            <UpdateOrders></UpdateOrders>
          </PrivateRoute>
          <PrivateRoute exact path="/status/:orderId">
            <UpdateStatus></UpdateStatus>
          </PrivateRoute>
        </Switch>
        <Footer/>
      </Router>
    </AuthProvider>
      
  );
}

export default App;
