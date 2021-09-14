import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import orderform from "../utils/orderform";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
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
import Categories from "../components/Categories";
import BySex from "../components/BySex";
/*import Contact from "../components/Contact";  */

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    let lStorage = JSON.parse(window.localStorage.getItem("orderform"));
    if (!lStorage) {
      window.localStorage.setItem("orderform", JSON.stringify(orderform));
    }
    axios
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

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" render={() => <Grid />} />
        <Route
          exact path="/categories/:sex"
          render={({ match }) => (
            <BySex sex={match.params.sex}/>
          )}
        />
        <Route
          path="/categories/:sex/:category"
          render={({ match }) => (
            <Categories sex={match.params.sex} cat={match.params.category} />
          )}
        />
        <Route path="/cart" component={Cart} />
        {/*   <Route exact path="/contacto" render={() => <Contact />} /> */}
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/register" render={() => <Register />} />
        <Route exact path="/products/:id" render={() => <Product />} />
        <Route path="/checkout" render={() => <Checkout />} />
      </BrowserRouter>
      <NewFooter />
    </div>
  );
}

export default App;
