import React from "react";
import { useLocation } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import orderform from "../utils/orderform";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Admin from "../containers/Admin";
import Grid from "../components/Grid";
import NewFooter from "../components/newFooter";
/* import Category from "../components/Category"; */
import Login from "../components/Login";
import Register from "../components/Register";
import { Product } from "../components/Product";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import { useDispatch } from "react-redux";
import { userLogged } from "../store/userLogged";
import axios from "axios";
/*import Contact from "../components/Contact";  */

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  React.useEffect(() => {
    let lStorage = JSON.parse(window.localStorage.getItem("orderform"));
    if (!lStorage) {
      window.localStorage.setItem("orderform", JSON.stringify(orderform));
      lStorage = JSON.parse(window.localStorage.getItem("orderform"));
    }
    lStorage.clientProfile
      ? dispatch(userLogged(lStorage.clientProfile))
      : axios
          .get("/api/auth/me")
          .then((res) => res.data)
          .then((user) => {
            dispatch(userLogged(user));
            lStorage.clientProfile = user;
            console.log(lStorage);
            window.localStorage.setItem("orderform", JSON.stringify(lStorage));
            console.log("userLogged: ", user);
          })
          .catch((err) => console.log(err));
  }, []);
  const camino = location.pathname.slice(0, 6);

  return (
    <div className="App">
      <BrowserRouter>
        {camino === "/admin" ? null : <Navbar />}
        <Route exact path="/" render={() => <Grid />} />
        {/*      <Route path="/{:categoryID}" render={() => <Category />} /> */}
        <Route path="/cart" component={Cart} />
        {/*   <Route exact path="/contacto" render={() => <Contact />} /> */}
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/register" render={() => <Register />} />
        <Route exact path="/products/:id" render={() => <Product />} />
        <Route path="/checkout" render={() => <Checkout />} />
        <Route path="/admin" render={() => <Admin />} />
      </BrowserRouter>
      {camino === "/admin" ? null : <NewFooter />}
    </div>
  );
}

export default App;
